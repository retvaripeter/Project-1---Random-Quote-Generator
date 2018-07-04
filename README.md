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
