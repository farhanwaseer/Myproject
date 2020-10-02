function checkAddress(a) {
    var val = document.getElementById('email').value;

    if (val === "") {
        alert("Email address required.");
    }
}
 
 var val2 = document.getElementById('email').value;
 document.getElementById('demo2').innerHTML = val2;
 
 function changePic(){
    document.getElementById('image').src = "image1.jpg"
}

function fillCity(){
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered){
        case "60608" :
          cityName ="chicago"
          break;
          case "68114" :
              cityName = "omaha";
             break;
          case "53212" :
              cityName = "Miliwaukee";
        }
        document.getElementById("city").value = cityName;
}

 /*  console.log('hello');
     alert('this is farhan');

     var someNum = 283;
     console.log(someNum);

     var age = prompt("What is your age?");

     document.getElementById('someText').innerHTML = "Your age is: " + age;
*/
  /*   var pets = [];
     console.log(pets);

     pets[0] = "dog";
     pets[1] = "cat";
     pets[2] = "bird";
     pets[3] = "lizard";
     pets[4] = "fish";
     pets[5] = "snake";

     pets.pop();
     pets.pop();

     pets.push("fish", "ferret");
     pets.push("Cow", "Goat");
      
      pets.shift();
      pets.unshift();

      pets.splice(2, 0, "ox", "duck", "emu")

     var nopets = pets.slice(2, 4);
     console.log(nopets);
 */

     /// For Loop

   /*  var cleanestCities = ["cheyenne", "santa fe" , "tucson", "great falls", "honolulu", "sukkur"];
     console.log(cleanestCities);

     var citytoCheck = prompt("What is your city name?");
     console.log(citytoCheck);

     citytoCheck = citytoCheck.toLowerCase();
     console.log(citytoCheck);

     var firstChar = citytoCheck.slice(0, 1);
     firstChar = firstChar.toUpperCase();
     console.log(firstChar);


     var otherChar = citytoCheck.slice(1);
     otherChar = otherChar.toLowerCase();
     console.log(otherChar);

     citytoCheck = firstChar + otherChar;
     console.log(citytoCheck);
     
     var numCities = cleanestCities.length;
     console.log(numCities);


     for (var i=0; i <= numCities; i++){
         if (citytoCheck === cleanestCities[i]){
             document.getElementById('city').innerHTML = citytoCheck + ": It is one of the cleanest cities";
         }
         else(
             document.getElementById('city').innerHTML = citytoCheck + ": your city is not in list"
         )
     }

     document.getElementById('someText').innerHTML = pets;
  */  

  /*   
    var currentAge = prompt("Enter your age.");
    console.log(currentAge);
     
     var numAge = parseInt(currentAge) + 1;
     console.log(numAge);
     
     var integerString = "24";
     console.log(integerString);

     var num = Number(integerString);
     console.log(num);

     var number = 1234;
     console.log(number);
     var numberString = number.toString();
     console.log(numberString);
     
     
     var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     console.log(dayNames);
     var now = new Date();
     console.log(now);
     var theDay = now.getDay();
     console.log(theDay);
     var nameofDay = dayNames[theDay];
     console.log(nameofDay);
     
     var now2 = new Date();
     var theday2 = now.getDay();
     var name2day = dayNames[theday2];
     console.log(name2day);
     
     
     
      var today = new Date();
      console.log(today);

      var doomsDay = new Date("June 30, 2035");
      console.log("DoomsDay Date: " + doomsDay);

      var msToday = today.getTime();
      var msDoomsday = doomsDay.getTime();
      
      var msDiff = msDoomsday - msToday;

      var dDiff = msDiff / (1000 * 60 * 60 * 24);
      console.log("dDiff: " + dDiff);

      dDiff = Math.floor(dDiff);

      var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
      console.log("MsDiff: " + msDiff);
      var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
      var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
      console.log(daysTillDoom);
      

      var d = new Date("July 21, 1983 13:25:00");
      console.log(d);
      
*/
      
  

  /*
/// Function
  function tellTime(){
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  document.getElementById("demo").innerHTML = " F1 Is: Current Time: " + theHr + ":" + theMin;
  }

  tellTime();

  function greetingUser(greeting){
      alert(greeting);

  }
  
  greetingUser("Hello, there.");
 
  function calcuTot(merchTot){
      var orderTot;
  if (merchTot >= 100){
      orderTot = merchTot;
  }
  else if (merchTot < 50.01){
      orderTot = merchTot + 5;
  }
  else{
      orderTot = merchTot + 5 + (.03 * (merchTot - 50));
  }
  return orderTot;
  }
  */
  // Swirch statements

/*  var currDate = new Date();
  var currtDay = currDate.getDay();
  var dayofWk = currtDay ;
  console.log(dayofWk);
  
  

 /* if (dayofWk === "Sat" || dayofWk === "Sun") {
      alert("Whoopee!");

  }
  else if (dayofWk === "Fri") {
      alert("TGIF!");
  }
  else{
      alert("Shoot me now!");
  }*/

/*  switch(dayofWk){
      case "Sat" :
        alert("Whoopee");
        break;
      case "Sun" :
          alert("Whoopee");
          break;
      case "Fri" :
          alert("TGIF!");
          break;
      default :
         alert("Shoot me now!");   
  }*/
