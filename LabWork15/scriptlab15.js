
const go = () => {

  let group = document.getElementById("1-1");
  let name = document.getElementById("2-2");
  let number = document.getElementById("3-3");

  let click = document.getElementById("but");

  click.onclick = function(){
    if(group.value === null || group.value === "" || 
      name.value === null || name.value === "" || 
      number.value === null || number.value === "" || 
      group.value != "Гр. КН-920в факультет КИП" || 
      name.value != "Фамилия И.О. Середенко О.С." || 
      number.value != "Номер тел. 123456"){
      alert("Пожалуйста, проверьте правильность ввода или заполните все поля!");
    }
    else{
      let newWin = window.open("about:blank", "Перенаправление ...", "width=400,height=600");
      newWin.document.write("Вы успешно зарегистрировались!");
    }
  }
}

