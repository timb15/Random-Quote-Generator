// FSJS - Random Quote Generator

// Quotes array containing objects with constious properties
const quotes = [
  {
    quote: "Some People dream of success, while other people wake up and make it happen.",
    source: "Wayne Huizenga",
    tags: ["success", "inspirational"]
  },
  {
    quote: "If you don't know where you're going, any road will get you there.",
    source: "Lewis Carroll",
    citation: "Alice's Adventures in Wonderland",
    year: 1965,
    tags: ["inspirational"]
  },
  {
    quote: "Electricity is really just organized lightning.",
    source: "George Carlin",
    citation: "Comedy Show",
    tags: ["funny"]
  },
  {
    quote: "In a closed society where everybody's guilty, the only crime is getting caught. In a world of thieves, the only final sin is stupidity.",
    source: "Hunter S. Thompson",
    citation: "Fear and loathing in Las vegas",
    year: 1998,
    tags: ["movie", "philosophical"]
  },
  {
    quote: "Madness, as you know, is like gravity, all it takes is a little push.",
    source: "The Joker",
    citation: "The Dark Knight",
    year: 2008,
    tags: ["movie", "philosophical"]
  },
  {
    quote: "Why do they call it rush hour when nothing moves.",
    source: "Robin Williams",
    citation: "Comedy Show",
    tags: ["funny"]
  },
  {
    quote: "Design is a funny word. Some people think design means how it looks. But of course, if you did deeper, it's really how it works.",
    source: "Steve Jobs",
    year: 2005,
    tags: ["philosophical"]
  },
  {
    quote: "Change your thoughts and you change the world.",
    source: "Norman Vincent Peale",
    tags: ["inpspitrational", "philosophical"]
  },
  {
    quote: "Follow your bliss and the universe will open doors where there were only walls.",
    source: "Joseph Campbell",
    tags: ["sucess", "philosophical", "inspirational"]
  },
  {
    quote: "Winners never quit and quitters never win.",
    source: "Vince Lombardi",
    tags: ["sucess", "philosophical", "inspirational"]

  },
  {
    quote: "The things you own end up owning you.",
    source: "Tyler Durden",
    citation: "Fight Club",
    year: "1999",
    tags: ["philosophical"]
  }

];


//Takes properties from a random object in "quotes" array and returns them as another array
getRandomQuote = (arr) => {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

//Creating function that generates numbers for random rgb background.
randomBackground = () => {
  let color = [];
  for (let i = 0; i < 3; i += 1) {
    color.push(Math.floor(Math.random() * 256));
  }
  return color;
}

/*Uses getRandomQuote funtion and Prints quote, source and other properties (if they exist) to the index.html file.
    Also uses randomBackground function to generate a random color background.*/
function printQuote() {
  const outputDiv = document.getElementById('quote-box');
  const output = getRandomQuote(quotes);
  let quoteString = '';

  document.body.style.backgroundColor = `rgb( ${randomBackground()} )`;

  quoteString += `<p class="quote">${output.quote}</p>`;
  quoteString += `<p class="source">${output.source}`;

  (output.citation != undefined)
    ? quoteString += `<span class="citation">, ${output.citation}</span>`
    : null;

  (output.year != undefined)
    ? quoteString += `<span class="year">,  ${output.year}</span>`
    : "</p>";

  output.tags.forEach(tag => quoteString += `<P><span class="tags">${tag}</span)</p>`);

  outputDiv.innerHTML = quoteString;
}
//changing the quote every 30 seconds
const quoteChange = window.setInterval(printQuote, 30000);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
