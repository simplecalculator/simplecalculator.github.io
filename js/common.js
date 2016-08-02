
// Показывает скрытые блоки
    var titleBlockA = document.querySelector('.calculator');
    var contentBlockA = document.querySelector('.calculator-hidden');

    titleBlockA.addEventListener('click', function () {
        if ('none' == contentBlockA.style.display) {
            contentBlockA.style.display = 'block';
            titleBlockA.style.marginBottom = '0';
            titleBlockA.style.borderRadius = '10px 10px 0 0';
            }
    
        else {
        	contentBlockA.style.display = 'none';
            titleBlockA.style.marginBottom = '7px';
            titleBlockA.style.borderRadius = '10px';
        	
        }
    });

    var titleBlockB = document.querySelector('.numberSystem');
    var contentBlockB = document.querySelector('.numberSystemBlock');

    titleBlockB.addEventListener('click', function () {
        if ('none' == contentBlockB.style.display) {
            contentBlockB.style.display = 'block';
            titleBlockB.style.marginBottom = '0';
            titleBlockB.style.borderRadius = '10px 10px 0 0';
            }
    
        else {
          contentBlockB.style.display = 'none';
            titleBlockB.style.marginBottom = '7px';
            titleBlockB.style.borderRadius = '10px';
          
        }
    });

    var titleBlockC = document.querySelector('.percentHeader');
    var contentBlockC = document.querySelector('.percentBlock');

    titleBlockC.addEventListener('click', function () {
        if ('none' == contentBlockC.style.display) {
            contentBlockC.style.display = 'block';
            titleBlockC.style.marginBottom = '0';
            titleBlockC.style.borderRadius = '10px 10px 0 0';
            }
    
        else {
          contentBlockC.style.display = 'none';
            titleBlockC.style.marginBottom = '7px';
            titleBlockC.style.borderRadius = '10px';
          
        }
    });

    var titleBlockD = document.querySelector('.powerHeader');
    var contentBlockD = document.querySelector('.powerBlock');

    titleBlockD.addEventListener('click', function () {
        if ('none' == contentBlockD.style.display) {
            contentBlockD.style.display = 'block';
            titleBlockD.style.marginBottom = '0';
            titleBlockD.style.borderRadius = '10px 10px 0 0';
            }
    
        else {
          contentBlockD.style.display = 'none';
            titleBlockD.style.marginBottom = '7px';
            titleBlockD.style.borderRadius = '10px';
          
        }
    });

    var titleBlockE = document.querySelector('.depositHeader');
    var contentBlockE = document.querySelector('.depositBlock');

    titleBlockE.addEventListener('click', function () {
        if ('none' == contentBlockE.style.display) {
            contentBlockE.style.display = 'block';
            titleBlockE.style.marginBottom = '0';
            titleBlockE.style.borderRadius = '10px 10px 0 0';
            }
    
        else {
          contentBlockE.style.display = 'none';
            titleBlockE.style.marginBottom = '7px';
            titleBlockE.style.borderRadius = '10px';
          
        }
    });








//Калькулятор
//Ввод чисел и расчет
  button0.onclick = function() {
    cakculateInput.value += '0';
 };
  button1.onclick = function() {
    cakculateInput.value += '1';
 };
   button2.onclick = function() {
    cakculateInput.value += '2';
 };
   button3.onclick = function() {
    cakculateInput.value += '3';
 };
   button4.onclick = function() {
    cakculateInput.value += '4';
 };
   button5.onclick = function() {
    cakculateInput.value += '5';
 };
   button6.onclick = function() {
    cakculateInput.value += '6';
 };
   button7.onclick = function() {
    cakculateInput.value += '7';
 };
    button8.onclick = function() {
    cakculateInput.value += '8';
 };
    button9.onclick = function() {
    cakculateInput.value += '9';
 };
    dot.onclick = function() {
      var calckScreen = document.getElementById('cakculateInput').value;
      if ( calckScreen == '') {
        cakculateInput.value += '0.'
      }
      else {
    cakculateInput.value += '.';
  }
 };
    bktLeft.onclick = function() {
    cakculateInput.value += '(';
 };
    bktRight.onclick = function() {
    cakculateInput.value += ')';
 };
    plus.onclick = function() {
    cakculateInput.value += '+';
 };
    multiply.onclick = function() {
    cakculateInput.value += '*';
 };
    minus.onclick = function() {
    cakculateInput.value += '-';
 };
    divided.onclick = function() {
    cakculateInput.value += '/';
 };

clear.onclick = function() {
   cakculateInput.value = '';
}

equally.onclick = function() {
  var calckScreen = document.getElementById('cakculateInput').value;
  var results =  eval(calckScreen);
  if (results == Infinity) {
    cakculateInput.value = 'Нельзя делить на ноль';
      }
      else {
        cakculateInput.value = results;    
    }
}

//перевод из одной системы счисления в другую
// проверка на пустые ячейки
changeNumbSystem.onclick = function() {
  var a = parseInt(document.querySelector('.numberSystA').value);
  var b = parseInt(document.querySelector('.numberSystB').value);
  var results;

  if ( isNaN(a) || isNaN(b)) {
  	document.getElementById('errorChangeNumbSystem').style.display = "block";
  }
  else {

    results = (a.toString(b));

  document.getElementById('changeNumbA').innerHTML = a;
  document.getElementById('changeNumbB').innerHTML = b;
  document.getElementById('changeNumbResult').innerHTML = results;
  document.getElementById('resultchangeNumbSystem').style.display = "block";

  }
}

//сколько процентов занимет число а от числа b
// проверка на пустые ячейки
// точность вычесления .00
percentVersionA.onclick = function() {
  var a = parseInt(document.querySelector('.countAA').value);
  var b = parseInt(document.querySelector('.countAB').value);
  var x, y, results;

  if ( isNaN(a) || isNaN(b)) {
  	document.getElementById('errorPercentVersionA').style.display = "block";
  }
  else {

	x = 100/(b/a);
	y = ((x - Math.floor(x)) < 0.01) ? 0 : 2;
	results = x.toFixed(y);

	document.getElementById('percentVerAA').innerHTML = a;
	document.getElementById('percentVerAB').innerHTML = b;
	document.getElementById('resultPercentVerA').innerHTML = results + '%';
	document.getElementById('resultVersionA').style.display = "block";
  }
}

// насколько процентов число a меньше числа b
// проверка на пустые ячейки 
// точность вычесления .00
percentVersionB.onclick = function() {
  var a = parseInt(document.querySelector('.countBA').value);
  var b = parseInt(document.querySelector('.countBB').value);
  var x, y, results;

  if ( isNaN(a) || isNaN(b)) {
  	document.getElementById('errorPercentVersionB').style.display = "block";
  }
  else {

	x = (b - a)/b*100;
	y = ((x - Math.floor(x)) < 0.01) ? 0 : 2;
	results = x.toFixed(y);

	document.getElementById('percentVerBA').innerHTML = a;
	document.getElementById('percentVerBB').innerHTML = b;
	document.getElementById('resultPercentVerB').innerHTML = results + '%';
	document.getElementById('resultVersionB').style.display = "block";
  }
}

// насколько процентов число a больше числа b
// проверка на пустые ячейки
// точность вычесления .00 
percentVersionC.onclick = function() {
  var a = parseInt(document.querySelector('.countCA').value);
  var b = parseInt(document.querySelector('.countCB').value);
  var x, y, results;

  if ( isNaN(a) || isNaN(b)) {
  	document.getElementById('errorPercentVersionC').style.display = "block";
  }
  else {

	x = (a - b)/b*100;
	y = ((x - Math.floor(x)) < 0.01) ? 0 : 2;
	results = x.toFixed(y);

	document.getElementById('percentVerCA').innerHTML = a;
	document.getElementById('percentVerCB').innerHTML = b;
	document.getElementById('resultPercentVerC').innerHTML = results + '%';
	document.getElementById('resultVersionC').style.display = "block";
  }
}

//чему будет равно число, если оно составляет a% от числа b
// проверка на пустые ячейки
// точность вычесления .0 
percentVersionD.onclick = function() {
  var a = parseInt(document.querySelector('.countDA').value);
  var b = parseInt(document.querySelector('.countDB').value);
  var x, y, results;

  if ( isNaN(a) || isNaN(b)) {
  	document.getElementById('errorPercentVersionD').style.display = "block";
  }
  else {

	x = a/100*b;
	y = ((x - Math.floor(x)) < 0.01) ? 0 : 1;
	results = x.toFixed(y);

	document.getElementById('percentVerDA').innerHTML = a;
	document.getElementById('percentVerDB').innerHTML = b;
	document.getElementById('resultPercentVerD').innerHTML = results;
	document.getElementById('resultVersionD').style.display = "block";
  }
}

// Найти число x если a % от этого числа равно b
// проверка на пустые ячейки
// точность вычесления .0 
percentVersionE.onclick = function() {
  var a = parseInt(document.querySelector('.countEA').value);
  var b = parseInt(document.querySelector('.countEB').value);
  var x, y, results;

  if ( isNaN(a) || isNaN(b)) {
  	document.getElementById('errorPercentVersionE').style.display = "block";
  }
  else {

	x = 100/a*b;
	y = ((x - Math.floor(x)) < 0.01) ? 0 : 1;
	results = x.toFixed(y);

	document.getElementById('percentVerEA').innerHTML = a;
	document.getElementById('percentVerEB').innerHTML = b;
	document.getElementById('resultPercentVerE').innerHTML = results;
	document.getElementById('resultVersionE').style.display = "block";
  }
}

// функция возведения в степень.
// проверка на знак степени (-)
// проверка на пустые ячейки
// точность вычесления .
raisedPower.onclick = function() {
  var a = parseInt(document.querySelector('.raisPowA').value);
  var b = parseInt(document.querySelector('.raisPowB').value);
  var results;

  if ( isNaN(a) || isNaN(b)) {
  	document.getElementById('errorRaisedPower').style.display = "block";
  }
  else if ( b < 0) {
  	document.getElementById('errorRaisedPowerB').style.display = "block";
  }

  else {
  	results = Math.pow(a, b);
	
  document.getElementById('raisPowA').innerHTML = a;
  document.getElementById('raisPowB').innerHTML = b;
  document.getElementById('resultRaisedPower').innerHTML = results;
  document.getElementById('showResultRaisPow').style.display = "block";
 }
}

// функция вычисления корня.
// проверка на пустые ячейки
// проверка на знак корня; не равен (-)
// проверка на знак переменной при рассчете корня второго порядка
// точность вычесления .0000
calculateRoot.onclick = function() {
  var a = parseInt(document.querySelector('.calcRootA').value);
  var b = parseInt(document.querySelector('.calcRootB').value);
  var x, y, results;

  if ( isNaN(a) || isNaN(b)) {
  	document.getElementById('errorCalculateRoot').style.display = "block";
  }
  else if ( a < 0) {
  	document.getElementById('errorCalculateRootB').style.display = "block";
  }
  else if ( b < 0 && a % 2 == 0 ) {
  	document.getElementById('errorCalculateRootС').style.display = "block";
  }

  else {

	x = Math.pow(Math.abs(b), 1/a);
	y = ((x - Math.floor(x)) < 0.01) ? 0 : 4;
	results = x.toFixed(y);

  document.getElementById('rootA').innerHTML = a;
  document.getElementById('rootB').innerHTML = b;
  document.getElementById('resultRoot').innerHTML = results;
  document.getElementById('showResultCalcRoot').style.display = "block";
  }
}

// выичсление размера депозита с 
// расчет с капитализацией раз в месяц или раз в год

countDeposit.onclick = function() {
  var sumDeposit = parseInt(document.getElementById('deposit').value);
  var percent = parseInt(document.getElementById('percent').value);
  var term = parseInt(document.getElementById('term').value);
  var refill = parseInt(document.getElementById('replenish').value);
  var sumReplen = parseInt(document.getElementById('sumReplenish').value);
  var currency = parseInt(document.getElementById('currency').value);
  var reinvest = document.getElementById('reinvestment').checked;  
  var results, curr;
  
  if ( isNaN(sumDeposit) || isNaN(percent) || isNaN(term)) {
  	document.getElementById('errorCountDeposit').style.display = "block";
  }

//расчет с помесячной капитализацией
  else {
  if (reinvest) {

//проверка на пополнения, этот блок расчета без пополнения
  if (refill == 1) {
  	  for (var i = 0; i < (term*12); i++) {
      var y = ((sumDeposit/100*percent)/12);

      sumDeposit += y
  	}
  }

// этот блок расчета пополнения раз в месяц
  else if (refill == 2) {
      for (var i = 0; i < (term*12); i++) {
      var y = ((sumDeposit/100*percent)/12);

      sumDeposit += y + sumReplen;
	}
}

// этот блок расчета пополнения раз в три месяца
  else if (refill == 3) {
      for (var i = 0; i < (term*12); i++) {
      var y = ((sumDeposit/100*percent)/12);

      if ((i%3) == 0) {
        sumDeposit += y + sumReplen;
      }
        else {
          sumDeposit += y;
		}
	}
}

// этот блок расчета пополнения раз в пол года
  else if (refill == 4) {
      for (var i = 0; i < (term*12); i++) {
      var y = ((sumDeposit/100*percent)/12);

      if ((i%6) == 0) {
        sumDeposit += y + sumReplen;
      }
        else {
          sumDeposit += y;
		}
	}
}
}

//начисление процентов в конце периода
  else {
//проверка на пополнения, этот блок расчета без пополнения
  if (refill == 1) {
     var y = (sumDeposit/100*percent)*term;

      sumDeposit += y
    }
 

// этот блок расчета пополнения раз в месяц
  else if (refill == 2) {

    for (var i = 0; i < (term*12); i++) {
        sumDeposit += sumReplen;
  }
   var y = (sumDeposit/100*percent)*term;
  sumDeposit += y
}
// этот блок расчета пополнения раз в три месяца
  else if (refill == 3) {

    for (var i = 0; i < (term*4); i++) {
        sumDeposit += sumReplen;
  }
   var y = (sumDeposit/100*percent)*term;
  sumDeposit += y
}
// этот блок расчета пополнения раз в пол года
  else if (refill == 4) {

    for (var i = 0; i < (term*2); i++) {
        sumDeposit += sumReplen;
  }
   var y = (sumDeposit/100*percent)*term;
  sumDeposit += y
}
}
}

//выбор валюты
if ( currency == 1) {
    currSymbol = '  руб.'; 
}

else if ( currency == 2) {
    currSymbol = ' $'; 
}
else if ( currency == 3) {
    currSymbol = ' €'; 
}
else if ( currency == 4) {
    currSymbol = ' £'; 
}
else if ( currency == 5) {
    currSymbol = ' ¥'; 
}

    results = sumDeposit.toFixed(2) + currSymbol;


document.getElementById('resultCountDeposit').innerHTML = results;
document.getElementById('resultDeposit').style.display = "block";


}





    