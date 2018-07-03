// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// I disabled this button until I finish with the rest of the project: document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Array which holds the objects about the Quotes

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
