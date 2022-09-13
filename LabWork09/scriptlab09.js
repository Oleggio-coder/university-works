alert("Загружена 9-я лабораторная работа");

function hasNumber(str) {
  return /\d/.test(str);
}
//export {hasNumber}

let group;
let surname;

group = prompt("Введите Вашу группу(длина - 7 символов): ");
while(group.length != 7){
  group = prompt("Пожалуйста, проверьте вводимые данные и повторите попытку. Введите Вашу группу: ");
}

surname = prompt("Введите Вашу фамилию: ");
while(hasNumber(surname) || (surname.length <= 2 || surname.length >= 15)){
  surname = prompt("Проверьте правильность ввода и повторите попытку. Введите Вашу фамилию: ");
}



function checkingAnswers() {
  let first = document.test.first.value;
  let second = document.test.second.value;
  let third = document.test.third.value;
  let fourth = document.test.fourth.value;

  let result;
  result = 0;
  
  if (first == "yes") result = result + 1;
  if (second == "yes") result = result + 1;
  if (third == "yes") result = result + 1;
  if (fourth == "yes") result = result + 1;

  confirm("\nСтудент: " + surname + "." + "\n" + "\nГруппа: " + group + "." + "\n" + "\nРезультат: " + result + " из 4" + "\n");
}

