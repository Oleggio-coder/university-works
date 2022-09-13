alert("Загружена 14-я лабораторная работа");



const taskone = () => {

  let now = new Date();
  let time_arr = [now.getMonth(), now.getDate(), now.getDay()]; // Месяц, Дата, День недели: 4, 20, 5
  let day;
  let month;

  if(time_arr[0] == 4){
    month = 'Мая';
  }

  if(time_arr[2] == 5){
    day = 'Пятница';
  }
  confirm("Сегодня " + time_arr[1] + '-е ' + month + '.' + '\n\n' + "День недели: " + day + '.');

  //confirm(now.getDay() + ' ' + now.getDate() + ' ' + now.getMonth());

  /*let time_array = [];
  
  for(let i = 0; i <= 3; i++){
    time_array.push(now.setDate(now.getDate() + i));
  }
  confirm(time_array);*/
}



const tasktwo = () => {

  const start = new Date().getTime();
  const y = Math.pow(Math.round(Math.cos(Math.PI / 5)), 2) + Math.pow(Math.round(Math.sin(Math.PI / 7)), 3) + Math.SQRT2;
  const end = new Date().getTime();

  let time = end - start;

  confirm("Посчитать: y = cos(π/5)² + sin(π/7)³ + √2" + '\n\n' + "Результат подсчёта: " + y + '\n\n' + "Время выполнения: " + time);
}

