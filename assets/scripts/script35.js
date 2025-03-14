//number 1

const string = "Today I went to the shop 123 and bought 4 bananas.";

const numbers = string.match(/\d+/g);

console.log(numbers);

// number 2

const text = "City postal codes: 12345, 98765, 54321";

const postalCodes = text.match(/\b\d{5}\b/g);

console.log(postalCodes);

// number 3

const movies = [
  "The Shawshank Redemption (1994)",
  "The Godfather (1972)",
  "The Godfather: Part II (1974)",
  "Pulp Fiction (1994)",
  "The Good, the Bad and the Ugly (1966)",
  "The Dark Knight (2008)",
  "12 Angry Men (1957)",
  "Schindler's List (1993)",
  "The Lord of the Rings: The Return of the King (2003)",
  "Fight Club (1999)",
];

function getMoviesAfter1990(movies) {
  const regex = /\d{4}/;

  return movies.filter((movie) => {
    const match = movie.match(regex);
    return match ? match[0] > 1990 : false;
  });
}

console.log(getMoviesAfter1990(movies));

// number 4

const colors = [
  "AliceBlue #F0F8FF",
  "AntiqueWhite #FAEBD7",
  "Aqua #00FFFF",
  "Aquamarine #7FFFD4",
  "Azure #F0FFFF",
  "White #FFF",
  "Red #F00",
  "Green #0F0",
  "Blue #00F",
];

const regex = /#([A-F0-9]{6})/i;

const hexCodes = colors
  .map((color) => {
    const match = color.match(regex); 
    return match ? match[0] : null; 
  })
  .filter(Boolean); 

console.log(hexCodes);

