/*  var x = prompt("where does the pope live");
         if (x === "vatican") {
             alert("correct");
         }

         if (x !== "vatican") {
             alert("wrong answer");
         }*/

         
       /*    EX: 2


         var city = prompt("Please enter your city");
           console.log("User enter value: " + city);

           var cleanCities = ["cheyenne", "Senta Fe", "Tucson", "Great Falls",
            "Honolulu"];
           console.log(cleanCities);

           var cityFlag = false;
           console.log("Default cityFlag value: " + numCities);

           
           var numCities = cleanCities.length;
           console.log("How many object in my array?: " + numCities);

           console.log("For Loop Starting");

           for ( var i=0; i<numCities; i++) {
            console.log( i + ": Now Checking " + cleanCities[i]);

               if (city === cleanCities[i]) {

                   alert("Congratulation! you live in one of the cleanest cities!")
                   cityFlag = true;
                   console.log("Iteration " + i + " " + cityFlag);
                   break;

             
               }
           }
             
           console.log("For Loop Completed");

            if (cityFlag === false) {
                alert("Sorry, your city is not very clean")
            }
     
            console.log("What's the value of cityFlag at the end? " + cityFlag);

            */

           // EX : 03

         /*  console.log('hello');
           alert('this is farhan');

           var someNum = 283;
           console.log(someNum);

           var age = prompt("What is your age?");

           document.getElementById('someText').innerHTML ="Your age is: " + age; 

           */

           //EX : 04

           //  NUMBER in Javascript

     /*      var num1 = 20;

           // Increment num1 by 1

           num1++          
           console.log(num1);

           // Decrement by 1

           num1--;
           console.log(num1);
         
           console.log(50 / 4);

           num1 +=20;
           console.log(num1);

           */

           // EX : 05

           /* Funtions 
           1: create a funtion
           2: call the funtion
           */

           // Create

           function fun() {
               alert("this is the funtion");
           }

           // Call

           fun()

           function greeting() {
               var name = prompt("What is your name?");
               var result = ( "Hello " + name);
               console.log(result);
           }


           greeting()


           function sumNum(num1, num2) {
               var result = (num1 + num2);
               console.log(result);
           }


           sumNum(10, 23)



