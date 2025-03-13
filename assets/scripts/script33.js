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
        const paragraph = document.createElement("p");
        paragraph.textContent = comment.body;
        commentsContainer.appendChild(paragraph);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  // number 6

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }

      return response.json();
    })
    .then((countries) => {
      const country = countries[28];
      console.log(country);
      const name = country.name.common;
      const population = country.population;
      const currency = Object.values(country.currencies)[0].name;
      const flag = country.flags.svg;
      document.getElementById("name").textContent = `Name: ${name}`;
      document.getElementById(
        "population"
      ).textContent = `Population: ${population}`;
      document.getElementById("currency").textContent = `Currency: ${currency}`;
      document.getElementById("flag").src = flag;
    })
    .catch((error) => {
      console.log(error);
    });
});
