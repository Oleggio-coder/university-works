alert("Загружена 13-я лабораторная работа");



window.addEventListener('keydown', (event) => {
  switch(event.key){
    case 'F1': {
      event.preventDefault();
        const message = 'Ф + 1 = Показать только первый слой\n' +
                        'Ф + 2 = Показать только второй слой\n' +
                        'Ф + 3 = Показать только третий слой\n' +
                        'Ф + 4 = Показать второй и третий слои\n' +
                        'Alt = Показать информацию про слой\n' + 
                        'Ctrl = Спрятать информацию про слой\n' + 
                        'F1 = Информация о комбинациях клавиш';
      alert(message);
      break;
      }
    }
})


window.addEventListener('keydown', (event) => {
  switch(event.key){
    case '1':{
      event.preventDefault();
      document.getElementById("layer1").style.visibility = 'visible';
      document.getElementById("layer2").style.visibility = 'hidden';
      document.getElementById("layer3").style.visibility = 'hidden';
      break;
    }
    case '2':{
      event.preventDefault();
      document.getElementById("layer1").style.visibility = 'hidden';
      document.getElementById("layer2").style.visibility = 'visible';
      document.getElementById("layer3").style.visibility = 'hidden';
      break;
    }
    case '3':{
      event.preventDefault();
      document.getElementById("layer1").style.visibility = 'hidden';
      document.getElementById("layer2").style.visibility = 'hidden';
      document.getElementById("layer3").style.visibility = 'visible';
      break;
    }
    case '4':{
      event.preventDefault();
      document.getElementById("layer1").style.visibility = 'hidden';
      document.getElementById("layer2").style.visibility = 'visible';
      document.getElementById("layer3").style.visibility = 'visible';
      break;
    }
    case '5':{
      event.preventDefault();
      document.getElementById("layer1").style.visibility = 'visible';
      document.getElementById("layer2").style.visibility = 'visible';
      document.getElementById("layer3").style.visibility = 'visible';
      break;
    }
    case '6':{
      event.preventDefault();
      document.getElementById("layer1").style.visibility = 'hidden';
      document.getElementById("layer2").style.visibility = 'hidden';
      document.getElementById("layer3").style.visibility = 'hidden';
      break;
    }
  }
})



window.addEventListener('keydown', (event) => {
  switch(event.key){
    case 'Alt':{
      event.preventDefault();
      if((document.getElementById("layer1").style.visibility = 'visible') && 
        (document.getElementById("layer2").style.visibility = 'hidden') && 
        (document.getElementById("layer3").style.visibility = 'hidden')){
          alert("Этот слой содержит два тега: P и U");
          break;
      }
      event.preventDefault();
      if((document.getElementById("layer2").style.visibility = 'visible') && 
        (document.getElementById("layer1").style.visibility = 'hidden') && 
        (document.getElementById("layer3").style.visibility = 'hidden')){
          alert("На этом слое картинка миньйон");
          break;
      }
      event.preventDefault();
      if((document.getElementById("layer3").style.visibility = 'visible') && 
        (document.getElementById("layer1").style.visibility = 'hidden') && 
        (document.getElementById("layer2").style.visibility = 'hidden')){
          alert("А на этом слое есть тег span и слово 'FONT'");
          break;
      }
      break;
    }
  }
})

