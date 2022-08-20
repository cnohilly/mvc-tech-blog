async function commentFormHandler(event) {
    event.preventDefault();

    // alternative method of getting the id of post
    // const post_id = document.querySelector('.post-card').getAttribute('data-post-id');

    // gets the location and retrieves the post_id from the url
    const locParams = window.location.toString().split('/');
    const post_id = locParams[locParams.length - 1];
    // gets the value from the input field
    const comment_text = document.querySelector('#comment-input').value.trim();

    // if the text is not empty
    if (comment_text) {
        try {
            // attempts to post the comment and reload the page
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
            } else {
                alert(response.statusText);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);