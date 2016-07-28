

//   button0.onclick = function() {
//     deposit.value += 0;
//  };

//   button1.onclick = function() {
//     deposit.value += 1;
//  };
//    button2.onclick = function() {
//     deposit.value += 2;
//  };
//    button3.onclick = function() {
//     deposit.value += 3;
//  };
//    button4.onclick = function() {
//     deposit.value += 4;
//  };
//    button5.onclick = function() {
//     deposit.value += 5;
//  };
//    button6.onclick = function() {
//     deposit.value += 6;
//  };
//    button7.onclick = function() {
//     deposit.value += 7;
//  };
//     button8.onclick = function() {
//     deposit.value += 8;
//  };
//     button9.onclick = function() {
//     deposit.value += parseInt(document.getElementById('button9').value);
//  };

//     button20.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button20').value);
//  };
//      button21.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button21').value);
//  };
//      button22.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button22').value);
//  };
//      button23.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button23').value);
//  };
//      button24.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button24').value);
//  };
//      button25.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button25').value);
//  };
//      button26.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button26').value);
//  };
//      button27.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button27').value);
//  };
//       button28.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button28').value);
//  };
//       button29.onclick = function() {
//     deposit2.value += parseInt(document.getElementById('button29').value);
//  };





// button223.onclick = function(){
 
// if (parseInt(document.getElementById('term').value) == 333) {
//   results = parseInt(document.getElementById('deposit').value) + parseInt(document.getElementById('deposit2').value);
//   document.getElementById('result').innerHTML = results;
// }

// else if (parseInt(document.getElementById('term').value) == 444) {
//   results = parseInt(document.getElementById('deposit').value) - parseInt(document.getElementById('deposit2').value);
//   document.getElementById('result').innerHTML = results;
// }

// else if (parseInt(document.getElementById('term').value) == 555) {
//   results = parseInt(document.getElementById('deposit').value) / parseInt(document.getElementById('deposit2').value);
//   document.getElementById('result').innerHTML = results;
// }

// else if (parseInt(document.getElementById('term').value) == 777) {
//   results = parseInt(document.getElementById('deposit').value) * parseInt(document.getElementById('deposit2').value);
//   document.getElementById('result').innerHTML = results;
// }


// };




// buttonplus.onclick = function(){
//   results = parseInt(document.getElementById('deposit').value) + parseInt(document.getElementById('deposit2').value);
//   document.getElementById('result').innerHTML = results;
// };






// button223.onclick=function() {
// var number, results;

// term = parseInt(document.getElementById('percent').value);

//   number = parseInt(document.getElementById('deposit').value);
//   results = number *2;
//   document.getElementById('result').innerHTML = results;
    
// };





//   button0.onclick = function() {
//     deposit.value += 0;
//  };

//   button1.onclick = function() {
//     deposit.value += 1;
//  };
//    button2.onclick = function() {
//     deposit.value += 2;
//  };
//    button3.onclick = function() {
//     deposit.value += 3;
//  };
//    button4.onclick = function() {
//     deposit.value += 4;
//  };
//    button5.onclick = function() {
//     deposit.value += 5;
//  };
//    button6.onclick = function() {
//     deposit.value += 6;
//  };
//    button7.onclick = function() {
//     deposit.value += 7;
//  };
//     button8.onclick = function() {
//     deposit.value += 8;
//  };
//     button9.onclick = function() {
//     deposit.value += parseInt(document.getElementById('button9').value);
//  };



// plus.onclick = function(){
 
//  var firstfigure = parseInt(document.getElementById('deposit').value);

//   var div = document.createElement('div');
//   div.className = "success";
//   div.innerHTML = firstfigure;

// document.body.insertBefore(div, document.body.firstChild);
//    //document.getElementById('result').innerHTML = results;

// };

// itog.onclick = function(){
 
//  var secondfigure = parseInt(document.getElementById('deposit').value);
//  var firstfigure = parseInt(document.querySelector('.success'));

// var results = +firstfigure + secondfigure;

//   document.getElementById('result').innerHTML = results;

// };


//сколько процентов занимет число а от числа b
// percent.onclick = function() {
//   var a = parseInt(document.querySelector('.countA').value);
//   var b = parseInt(document.querySelector('.countB').value);
// var x, results;

//   x = 100/(b/a);
//   results=x;
// document.getElementById('result').innerHTML = results + '%';
// }


//Найти число x если a % от этого числа равны b

// percent.onclick = function() {
//   var a = parseInt(document.querySelector('.countA').value);
//   var b = parseInt(document.querySelector('.countB').value);
// var x, results;

//   x = 100/a*b;
//   results=x;
// document.getElementById('result').innerHTML = results;
// }


// вычисления процентов, чему будет равно число, если оно составляет a% от числа b

// percent.onclick = function() {
//   var a = parseInt(document.querySelector('.countA').value);
//   var b = parseInt(document.querySelector('.countB').value);
// var x, results;

//   x = a/100*b;
//   results=x;
// document.getElementById('result').innerHTML = results;
// }

// насколько процентов число a меньше числа b 

percent.onclick = function() {
  var a = parseInt(document.querySelector('.countA').value);
  var b = parseInt(document.querySelector('.countB').value);
var x, results;

  x = (b - a)/b*100;
  results=x;
document.getElementById('result').innerHTML = results;
}