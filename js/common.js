
// window.onload = function () {

//     // Обработчик клика по табам
//     var newsTabMoscow = document.querySelector('.mainTag');

//     var newsListMoscow = document.querySelector('.taghidden');

//     newsTabMoscow.addEventListener('click', function () {
//         if ('none' == newsListMoscow.style.display) {
//             newsListMoscow.style.display = 'block';
//             newsTabMoscow.style.marginBottom = '0';
//             newsTabMoscow.style.borderRadius = '10px 10px 0 0';
//             }
    
//         else {
//         	newsListMoscow.style.display = 'none';
//             newsTabMoscow.style.marginBottom = '7px';
//             newsTabMoscow.style.borderRadius = '10px';
        	
//         }
//     });
// };


// changeSystem.onclick = function() {
//   var a = parseInt(document.querySelector('.countAcd').value);
//   var b = parseInt(document.querySelector('.countBcd').value);
//   var results;
//     results = (a.toString(b));

// document.getElementById('res1').innerHTML = a;
// document.getElementById('res12').innerHTML = b;
// document.getElementById('res123').innerHTML = results;

// document.getElementById('resultChange').style.display = "block";

// }




// функция возведения в степень.
raisedPower.onclick = function() {
  var a = parseInt(document.querySelector('.raisPowA').value);
  var b = parseInt(document.querySelector('.raisPowB').value);
  var results;
    results = Math.pow(a, b);

document.getElementById('raisPowA').innerHTML = a;
document.getElementById('raisPowB').innerHTML = b;
document.getElementById('resultRaisedPower').innerHTML = results;

document.getElementById('showResultRaisPow').style.display = "block";

}

// функция вычисления корня.
calculateRoot.onclick = function() {
  var a = parseInt(document.querySelector('.calcRootA').value);
  var b = parseInt(document.querySelector('.calcRootB').value);
  var results;
    results = (Math.pow(Math.abs(b), 1/a)).toFixed(5);

document.getElementById('rootA').innerHTML = a;
document.getElementById('rootB').innerHTML = b;
document.getElementById('resultRoot').innerHTML = results;

document.getElementById('showResultCalcRoot').style.display = "block";

}




// выичсление размера депозита с 
//месячной капитализацией с пополнением раз в три месяца
countDeposit.onclick = function() {
  var a = parseInt(document.getElementById('deposit').value);
  var b = parseInt(document.getElementById('percent').value);
  var c = parseInt(document.getElementById('term').value);
  var d = parseInt(document.getElementById('refill').value);
  var e = parseInt(document.getElementById('sumReplenish').value);
  var f = parseInt(document.getElementById('currency').value);
  var reinvest = document.getElementById('reinvestment').checked;  
  var results, curr;

//   if (d == 1) {
//   for (var i = 0; i < (c*12); i++) {
//       var y = ((a/100*b)/12);

//       a += y

//   }
// } else {
//     if (d == 2) {
//       for (var i = 0; i < (c*12); i++) {
//       var y = ((a/100*b)/12);

//       a = a + y+e;

// }
// }

if (d == 3) {
          for (var i = 0; i < (c*12); i++) {
      var y = ((a/100*b)/12);

      if ((i%3) == 0) {
        a = a + y + e;
      }
        else {
          a = a + y;
}

 
}
}



if (d == 6) {
          for (var i = 0; i < (c*12); i++) {
      var y = ((a/100*b)/12);

      if ((i%6) == 0) {
        a = a + y + e;
      }
        else {
          a = a + y;
}

 
}
}

if ( f == 1) {
    curr = '  руб.'; 
}

else if ( f == 2) {
    curr = ' $'; 
}
else if ( f == 3) {
    curr = ' €'; 
}
else if ( f == 4) {
    curr = ' £'; 
}
else if ( f == 5) {
    curr = ' ¥'; 
}




    results = a;


document.getElementById('result').innerHTML = results + curr;


}





if ( == '' &&  == '' &&  == '' &&  == '' && )

    