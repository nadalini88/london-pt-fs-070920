// set base URL to your json server
// Ex: http://localhost:3000
const baseURL = "http://localhost:3000";
// const fetch = require("node-fetch")
/**
 * BEFORE YOU START:
 * 1. Run `npm install -g json-server`
 * 2. In this directory, run `json-server db.json`
 * 		to serve your back end API
 * 3. In your broser, go to http://localhost:3000/comments,
 * 		to view the available data
 */

/**
 * Exercise 1
 *
 * create an async function {getComments}, which 
 * gets data from URL and returns the data as JS objects
 *
 * Note: test this function with an URL from your json-server API
 */


const getComments = async () => {
    const resposta = await fetch('http://localhost:3000/comments');
    const dados = await resposta.json()
    return dados
}

// const getComments = async (url) => {
//     return fetch(url)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             let dados = data
//             return dados
//         })
// }


// getComments("http://localhost:3000/comments")


// //  const fetchData = async (url) => {
//     const result = await fetch(url);
//     const json = await result.json();
//     return json;
// }
/**
 * Exercise 2
 *
 * create an async function {postComment}, which takes {newComment} as an argument,
 * and posts it to the comments URL.
 *
 * This function should return the data recieved
 * from the server if successful, or "Oops something went wrong!" if not.
 *
 * Don't forget to handle errors.
 */

const postComment = async (newComment) => {

    const data = await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment)
    })
        .then((response) => {
            return response.json()
        })
    return data;
};


/**
 * Exercise 3
 *
 * Create an async function {patchComment}, which takes {comment}
 * and {newCommentBody} as arguments.
 *
 * It should send a patch request to update the comment in the database with
 * the newCommentBody as the new body value.
 *
 * This function should return the updated object if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */

const patchComment = async (comment, newCommentBody) => {
    const data = await fetch("http://localhost:3000/comments/" + comment.id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            id: comment.id,
            body: newCommentBody
        }),
    }).then((response) => {
        return response.json()
    })

    return data.id ? data : "Oops we couldn't update that!"
}


/**
 * Exercise 4
 *
 * create an async function {putComment}, which takes {comment} as an argument,
 * and makes a put request with the new comment data.
 *
 * This function should return the updated comment if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */

const putComment = async (comment) => {

    
        const data =  await fetch("http://localhost:3000/comments/" + comment.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }, body: JSON.stringify(comment)
        })
            .then((response) => {
                return response.json()
            })
            return data.id ? data : "Oops we couldn't update that!"
        }
        
/**
 * Exercise 5
 *
 * create an async function {deleteComment}, which takes {comment} as an argument,
 * and deletes the selected comment from DB.
 * This function should return "Deleted!" if successful,
 * or "That could not be deleted!" if not.
 *
 * Don't forget to handle errors.
 */

const deleteComment = async (comment) => {
   
        await fetch("http://localhost:3000/comments/" + comment.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(comment),
        }).then((response) => {
            response.json()
            // return "Deleted!"
            console.log(response)
        }).catch ((error) => {
            return error
        })
}
