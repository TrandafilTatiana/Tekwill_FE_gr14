document.addEventListener("DOMContentLoaded", async function () {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!userResponse.ok) {
      throw new Error("Network is down");
    }

    const userData = await userResponse.json();
    const user = userData.find((user) => user.id === 3);

    if (!user) {
      console.log("User with id=3 not found");
      throw new Error("User not found");
    }

    console.log("User with id=3:", user);
    
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );

    if (!postsResponse.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await postsResponse.json();
    console.log("Posts of user with id=3:", posts);

    const firstPostId = posts[0].id;

    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPostId}`
    );

    if (!commentsResponse.ok) {
      throw new Error("Failed to fetch comments");
    }

    const comments = await commentsResponse.json();
    console.log("Comments of first post:", comments);

    const commentsContainer = document.getElementById("comments-container");
    commentsContainer.innerHTML = "";

    comments.forEach((comment) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = comment.body;
      commentsContainer.appendChild(paragraph);
    });

    // number 6
    const countriesResponse = await fetch("https://restcountries.com/v3.1/all");

    if (!countriesResponse.ok) {
      throw new Error("Failed to fetch countries");
    }

    const countries = await countriesResponse.json();
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
  } catch (error) {
    console.log(error);
  }
});
