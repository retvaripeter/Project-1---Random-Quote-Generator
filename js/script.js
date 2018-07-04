// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Variables

// this html variable will hold all the string for the printQuote function
var html ;

//Array which holds the objects about the quotes

var quotes = [

  {
    //Quote: which contains a string: the text of the quote that will be displayed on the page.
    quote: "What didn't kill me, it didn't make me stronger at all.",
    //Source: which contains a string: identifying the creator of the quote.
    source: "Ed Sheeran",
    //Citation: which contains a string: the text of the quote that will be displayed on the page.
    citation: "From the song called 'Drunk'",
    //Year: which contains a number identifying the year of the quote.
    year: 2012
  },
  {
    quote: "I don’t count my sit-ups. I only start counting when it starts hurting. When I feel pain, that’s when I start counting, because that’s when it really counts.",
    source: "Mohammed Ali",
    citation: "From a sport interview",
    year: 1970
  },
  {
    quote: "Learning never exhausts the mind.",
    source: "Leonardo Da Vinci",
    year:1498
  },
  {
    quote: "Life without love is like a tree without blossom or fruit",
    source: "Khalil Gibran",
    citation: "From the song called 'Drunk'",
    year: 1922
  },
  {
    quote: "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
    source: "Satchel Paige"
  },
  {
    quote: "Everything will be okay in the end. If it's not okay, then it's not the end.",
    source: "Ed Sheeran"
  },

];

// Functions

/*
Tasks to do(checklist):

I. Selects a random quote OBJECT from the quotes array.
II. Returns the randomly selected quote object.

*/

// This function replace the id quote-box in index.html page

function print (message) {

  var outputDiv = document.getElementById('quote-box') ;
  outputDiv.innerHTML = message;

}

// This function calls the GetRandomNumber function to get a random object from array 'quotes'


function getRandomQuote () {

  return quotes[getRandomNumber()];

}

// Generates a random number between 1 and the length of 'qoutes array'
function getRandomNumber () {

// this function is perfect, because it will less than 1 relative to the quotes.length (thanks to the Math.random which never gonna be 1)
var RandomNumber = Math.floor(Math.random()* quotes.length);
  return RandomNumber ;
}

function printQuote () {

// call the getRandomQuote function and put it in the myRandomquote variable

  var myRandomquote = getRandomQuote();

// concatinate the proper propeties :) to the html variable which we generated in the function's scope

      html = '<p class="quote"> '+ myRandomquote.quote + '</p>';

      html += '<p class="source"> ' + myRandomquote.source;

/* Test it without the if statements

  // add the citation  if it's value not undefined

  if (myRandomquote.citation !== "undefined"){

      html += '<span class="citation"> myRandomquote.citation </span>';

  }

  // add the year  if it's value not undefined

  else if (myRandomquote.year !== "undefined"){

      html += '<span class="year"> myRandomquote.year </span>';

  }

*/

  // add the ending paragraph html tag at the end of the html variable even there was no citation or year property in the random Array

      html += '</p>'


  // returns and displays the final HTML string to the page ( use this JS snippet to accomplish that )

document.getElementById('quote-box').innerHTML = html ;

}
