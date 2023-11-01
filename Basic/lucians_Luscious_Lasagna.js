//DEFINE THE EXPECTED OVEN TIME IN MINUTES
/*
Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is 40.
*/
export const EXPECTED_MINUTES_IN_OVEN = 40;

//CALCULATE THE REMAINING OVEN TIME IN MINUTES
/*
Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.
*/
export function remainingMinutesInOven(actualMinutesInOven) {
  var time = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  return time;
}

//CALCULATE THE PREPARATION TIME IN MINUTES
/*
Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.
*/
export function preparationTimeInMinutes(numberOfLayers) {
  var minutes = numberOfLayers * 2;
  return minutes;
}

//CALCULATE THE TOTAL WORKING TIME IN MINUTES
/*
Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.
*/
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  var totalMinutes = preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
  return totalMinutes;
  
}