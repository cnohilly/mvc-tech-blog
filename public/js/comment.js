async function commentFormHandler(event) {
    event.preventDefault();

    const locParams = window.location.split('/');
    const post_id = locParams[locParams.length - 1];
    const comment_text = document.querySelector('#comment-input').value.trim();

    if (comment_text) {
        try {
            const response = await fetch('/api/comments/', {
                method: 'post',
                body: JSON.stringify({
                    post_id,
                    comment_text
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                // reload the current page
                document.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);