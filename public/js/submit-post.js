async function submitPostHandler(event) {
    event.preventDefault();
    const title = $('#post-title').val().trim();
    const content = $('#post-content').val().trim();

    console.log(title, content);
    if (title && content) {
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