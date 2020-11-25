function getPhotos(count) {
    return fetch(`https://api.unsplash.com/photos/random?count=${count}`, {
        headers: {
            Authorization: "Client-ID NhrfMRYsOi7BlBcPKK4t143BSyVe-b_xRk-ZNPw2AEQ"
        }
    })
    .then(response => response.json())
    .catch(error => console.error("ERROR", error));
}

function createPostElement(photo) {
    const template = document.querySelector('.post--template');
    const newPost = template.cloneNode(true);

    newPost.classList.remove('post--template');

    const mainImage = newPost.querySelector('.post__image img');
    mainImage.src = photo.urls.regular;

    return newPost;
}

getPhotos(10)
    .then(photos => photos.forEach(photo => {
        const postEl = createPostElement(photo);

        const postList = document.querySelector('.content__post-list');
        postList.appendChild(postEl);
    }));

    counter = 0;
    const addLike = () =>{
        document.querySelector(".button--link").innerHTML = `${counter++} Likes` ;
        }