document.addEventListener("DOMContentLoaded", function () {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network is down");
      }
      return response.json();
    })
    .then((userData) => {
      const user = userData.find((user) => user.id === 3);

      if (user) {
        console.log("User with id=3:", user);
        return fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
        );
      } else {
        console.log("User with id=3 not found");
        throw new Error("User not found");
      }
    })

    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    })
    .then((posts) => {
      console.log("Posts of user with id=3:", posts);

      const firstPostId = posts[0].id;
      return fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${firstPostId}`
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      return response.json();
    })
    .then((comments) => {
      console.log("Comments of first post:", comments);
      const commentsContainer = document.getElementById("comments-container");

      commentsContainer.innerHTML = "";
      comments.forEach((comment) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = comment.body;
        commentsContainer.appendChild(paragraph); 
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
