// sets timeout to 10minutes to reload the page, 
//  this is the same time the user idles out and has to log back in
setTimeout(function () {
    document.location.reload();
}, 1000 * 60 * 10); 