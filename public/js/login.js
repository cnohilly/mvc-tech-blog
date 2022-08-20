async function loginFormHandler(event) {
    event.preventDefault();

    // gets the values from the input fields
    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    // ensures the fields are not empty
    if (username && password) {
        try {
            // attempts to log the user in and go to homepage
            const response = await fetch('/api/users/login', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                // replace location to homepage + reload
                document.location.replace('/');
                document.location.reload();
            } else {
                // will show alert if the user failed to login, either from a post error or the fields are empty
                $('.login-alert').removeClass('d-none');
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        $('.login-alert').removeClass('d-none');
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);