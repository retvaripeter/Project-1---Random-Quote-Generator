# Project 1 - Random Quote Generator

Notes for myself to build a structure:

// I. Selects a random quote OBJECT from the quotes array.

/* 1)

    For this we need to use the Math.random function to generate a number
    between 0 (because the first object in array holds the index value: 0) and the length of the array(quotes)-1.

    The function: Math.floor(Math.random()* quotes.length) + 1

   2)

    Second we need to figure it out how to access and display an object.
    If we would like to display let say the first object with Ed Sheeran's famous  sentence: quotes[0] it's ok.

   3)

    The randomly select method should come from the Math.random function, which will generate a random number and we will put this number into array[Randomnumber]


// II. Returns the randomly selected quote object.

    We can simple call the function in the array[getTheRandomNumber], because it will contain the word return at the end.

III. Challenge: only add a property if the object has it

Check with console.log or in console with this code: quotes[randomnumber].citation or year has an undefined  value or not. If not than add it to the html.

IV. Challenge: Set a timer to call the printQuote function

I will use the notes/examples from MDN:

var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

instead of slowAlert will be the printQuote function


V. Challenge: background color

Background color changes each time the quote changes.

The color goes from black (rgb(0,0,0)) to white(rgb(255,255,255))
So if we use this rgb model we can change the color of a letter/background etc.

To get it randomly we need the Math.random() function with this way and put it into 3 variables which
will hold the values between 0 and 255. We also need another variable to concatinate these values to a string.

var r = Math.floor(Math.Random()*256);
var g = Math.floor(Math.Random()*256);
var b = Math.floor(Math.Random()*256);

var RGBcolor = "rgb(" + r +","+ g +","+ b + ")";

6. Add tags property to array and print it as well

need to add tag properties and order values as well

change the javascript html variable with adding 1 more paragraph with the tags

change the CSS style too to show in a nice and proper way the tags
should be also on the right side like the year maybe with a slight different before the word
