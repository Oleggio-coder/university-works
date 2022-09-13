alert("Загружена 11-я лабораторная работа");

function move(){
  document.getElementById("change").style.color = 'green';
  document.getElementById("change").style.fontSize = '24px';
  document.getElementById("change").style.fontFamily = 'Verdana';
}

function dbclick(){
  document.getElementById("change").style.color = 'black';
  document.getElementById("change").style.fontSize = '14px';
  document.getElementById("change").style.fontFamily = 'TimesNewRoman';
  document.getElementById("change").style.fontWeight = 'bold';
}

function wheelmouseone(){
  document.getElementById("wheel1").style.color = 'red';
}

function wheelmousetwo(){
  document.getElementById("wheel2").style.color = 'red';
}

function wheelmousethree(){
  document.getElementById("wheel3").style.color = 'red';
}



window.onerror = function(message, file, line, column, errorObj){
  if(errorObj !== undefined){
    alert('При загрузке Web-страницы произошла ошибка:\n' + 'Причина: ' + message + '\n' + 'Скрипт: ' + file + '\n'+
      'Строка: ' + line + '\n' + 'Номер символа: '+ column + '\n' + 'Ошибка: ' + errorObj.stack);
  }
}

function err(){
  document.getElementById("bbb").style.color = 'orange';
  document.getElementById("bbb").style.fontSize = '36px';
  document.getElementById("bbb").style.fontWeight = 'bold';
}

