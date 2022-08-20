async function submitPostHandler(event) {
    event.preventDefault();
    const title = $('#post-title').val().trim();
    const content = $('#post-content').val().trim();

    // makes sure both fields are filled
    if (title && content) {
        // attempts to create the new post and redirects to dashboard
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    content
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

$('#new-post-form').on('submit', submitPostHandler);