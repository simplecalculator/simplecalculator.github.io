
// Показывает скрытые блоки
// window.onload = function () {
//     var titleBlock = document.querySelector('.mainTag');
//     var contentBlock = document.querySelector('.hiddenBlock');

//     titleBlock.addEventListener('click', function () {
//         if ('none' == contentBlock.style.display) {
//             contentBlock.style.display = 'block';
//             titleBlock.style.marginBottom = '0';
//             titleBlock.style.borderRadius = '10px 10px 0 0';
//             }
    
//         else {
//         	contentBlock.style.display = 'none';
//             titleBlock.style.marginBottom = '7px';
//             titleBlock.style.borderRadius = '10px';
        	
//         }
//     });
// };

// window.onload = function () {
//     var spoiler_list = document.querySelectorAll('.mainTag');
    
//     for (var i in spoiler_list) {
//         // скрываем основное содержимое спойлера
//         spoiler_list[i].querySelector('.hiddenBlock').style.display = 'none';
        
//         // вешаем событие на каждый спойлер
//         spoiler_list[i].addEventListener('click', function (a) {
//             // стили текущего элемента
//             var elemstyle = a.currentTarget.querySelector('.hiddenBlock').style;
            
//             if ( 'none' == elemstyle.display ) {
//                 elemstyle.display = 'block';
//             }   else {
//                 elemstyle.display = 'none';
//             }
//         });
//     }
// };

















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

//капитализация процентов раз в год
  else {
      for (var i = 0; i < term; i++) {
      var y = (sumDeposit/100*percent);

      sumDeposit += y;
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

    results = sumDeposit + currSymbol;


document.getElementById('resultCountDeposit').innerHTML = results;
document.getElementById('resultDeposit').style.display = "block";


}
}





    