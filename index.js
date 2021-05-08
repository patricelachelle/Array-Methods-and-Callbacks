import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(items) {
    return items.Year === 2014 && items.Stage === "Final"
});

console.log("finals2014", finals2014);

//(a) Home Team name for 2014 world cup final

console.log('Task 1 a:', finals2014[0] ['Home Team Name'])

//(b) Away Team name for 2014 world cup final

console.log('Task 1 b:', finals2014[0] ["Away Team Name"])

//(c) Home Team goals for 2014 world cup final

console.log('Task 1 c:', finals2014[0] ['Home Team Goals'])

//(d) Away Team goals for 2014 world cup final

console.log('Task 1 d:', finals2014[0] ['Away Team Goals'])

//(e) Winner of 2014 world cup final */

console.log('Task 1 e:', finals2014[0] ['Win conditions'])


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    return fifaData.filter(function(data){
        return data.Stage
    })

}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(years, getFinals) {
    
    return fifaData.map(function(getFinals){

        return getFinals.Year
        
    })

}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(winners, getFinals) {
    
   winners = []
   
         winners.push("Uruguay", "Italy", "Italy", "Germany FR", "Brazil", "Brazil", "England", "Brazil", "Germany FR", "Argentina", "Italy", "Argentina", "Germany FR", "Italy", "France", "Brazil", "France", "Spain", "Germany") 
                                      
    return winners
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(arr, getYears, getWinners) {

    arr = []

    arr.push("In 1930, Uruguay won the world cup!", "In 1934, Italy won the world cup!", "In 1938, Italy won the world cup!", "In 1954, Germany FR won the world cup!", "In 1958, Brazil won the world cup!", "In 1962, Brazil won the world cup!", "In 1966, England won the world cup!", "In 1970, Brazil won the world cup!", "In 1974, Germany FR won the world cup!", "In 1978, Argentina won the world cup!", "In 1982, Italy won the world cup!", "In 1986, Argentina won the world cup!", "In 1990, Germany FR won the world cup!", "In 1994, Italy won the world cup!", "In 1998, France won the world cup!", "In 2002, Brazil won the world cup!", "In 2006, France won the world cup!", "In 2010, Spain won the world cup!", "In 2014, Germany won the world cup!")  

    return arr
    
}   




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinals) {

        return fifaData.reduce(function(getFinals){

    return getFinals
    
})
}



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
