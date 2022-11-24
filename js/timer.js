//The global constant of the id functions of the four boxes has to be determined.
   //Because no html element can be used directly in JavaScript
   let dayBox = document.getElementById("day-box");
   let hrBox = document.getElementById("hr-box");
   let minBox = document.getElementById("min-box");
   let secBox = document.getElementById("sec-box");

   //I have added the time for which I want to run the countdown
  //Then that time is stored in a constant called "endDate"
   let endDate = new Date(2022, 03, 1, 00, 00);

//The above date has been converted to milliseconds
//getTime() method is used to return the number of milliseconds since 1 January 1970.
   let endTime = endDate.getTime();


//All the calculations are stored in the function called countdown
   function countdown() {
//The current time has been taken from the device using the "new Date" method
     let todayDate = new Date();
//The time received from the device has been converted to milliseconds
     let todayTime = todayDate.getTime();
//How long the countdown will last has been calculated.
//Countdown time = Countdown end time - Current time
     let remainingTime = endTime - todayTime;
//Minutes, hours, days have been converted to milliseconds
//1 minute = 1 * 60 seconds = 1000 * 60 milliseconds
     let oneMin = 60 * 1000;
     let oneHr = 60 * oneMin;
     let oneDay = 24 * oneHr;

//If the number of times is less than 10 then a 0 will be added before it
     let addZeroes = (num) => (num < 10 ? `0${num}` : num);

//What will happen when the countdown ends is now decided
//That is, if the current time is more than the time when the countdown is over
     if (endTime < todayTime) {
       clearInterval(i);
       document.querySelector(
         ".countdown"
       ).innerHTML = `<h1>Countdown Has Expired</h1>`;
     } 

else {
//Now the total countdown time has been converted to days, hours, minutes, and seconds
//The Math. floor() function returns the largest integer less than or equal to a given number.
       let daysLeft = Math.floor(remainingTime / oneDay);
       let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
       let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
       let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

//Arrangements have now been made to display the time values in the webpage
//"textContent" helps to display any content within a webpage
       dayBox.textContent = addZeroes(daysLeft);
       hrBox.textContent = addZeroes(hrsLeft);
       minBox.textContent = addZeroes(minsLeft);
       secBox.textContent = addZeroes(secsLeft);
     }
   }
//Now with the help of "setInterval" the above calculations are arranged to be updated every second.
//As you can see, all of the above calculations are stored in a function called 'countdown'.
//Now that function has been updated every 1000 milliseconds or 1 second.
   let i = setInterval(countdown, 1000);
   countdown();