"use strict;"

var output = document.getElementById("output");
var button = document.getElementById("button");


button.addEventListener("click", function FizzBuzz(){

      for (var i = 1; i <= 100; i++) {
      	 var op = document.createElement('div');
          var f = i % 3 == 0;
          var b = i % 5 == 0;
          op.innerHTML = `<p>${(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i)}</p>`;
          output.append(op);
      }
  });





