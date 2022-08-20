async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-input').value.trim();
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (username && email && password) {
        try {
            const response = await fetch('/api/users', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                // replace location to homepage + reload
                document.location.replace('/');
                document.location.reload();
            } else {
                // will show alert if the user failed to sign up, either from a post error or the fields are empty
                $('.signup-alert').removeClass('d-none');
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        $('.signup-alert').removeClass('d-none');
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);