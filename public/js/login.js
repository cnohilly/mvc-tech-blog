async function loginFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (username && password) {
        try {
            const response = await fetch('/api/users/login', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response);
            if (response.ok) {
                // replace location to homepage + reload
                document.location.replace('/');
                document.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }
    $('.login-alert').removeClass('d-none');
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);