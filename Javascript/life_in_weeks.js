/*
create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

It will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.

Where x, y and z are replaced with the actual calculated numbers.


For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input

e.g. If you are 56 years old:

    lifeInWeeks(56)

Example Output

    You have 12410 days, 1768 weeks, and 408 months left.
*/


function lifeInWeeks(age) {
    /************Don't change the code above************/    
    
    const maxAge = 90;
    const yearsLeft = maxAge - age;
    
    const daysLeft = yearsLeft * 365;
    const weeksLeft = yearsLeft * 52;
    const monthsLeft = yearsLeft * 12;
    
    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
    
    /*************Don't change the code below**********/
}

lifeInWeeks(56);
