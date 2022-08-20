
async function editPostHandler(event) {
    event.preventDefault();
    const post_id = $(this).attr('id');
    const title = $(this).find('.post-title').first().val().trim();
    const content = $(this).find('.post-content').first().val().trim();
    // exits the function if both fields are empty
    if (!(title || content)) {
        return;
    }
    // creates an object to use as the body for the api call and only assigns data if it was provided
    let updateBody = {};
    if (title) {
        updateBody.title = title;
    }
    if (content) {
        updateBody.content = content;
    }
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...updateBody }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

async function deletePostHandler(event) {
    event.preventDefault();
    const post_id = $(this).closest('.edit-post-form').attr('id');
    console.log(post_id);
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

$('#posts-accordion').on('submit', '.edit-post-form', editPostHandler);

$('#posts-accordion').on('click', '.delete-post-btn', deletePostHandler);