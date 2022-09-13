alert("Загружена 10-я лабораторная работа");

let mylist = [34, 29.5, 16, 5.3, 4.2, 'Calculator', 'Apple', 'Bicycle','Wonder', 'Library'];
let revlist = [];

const list = () => {
  confirm(mylist.join(';\n'));
}

const relist = () => {
  revlist = mylist.reverse();
  confirm(revlist.join(';\n'));
}

const Types = () => {
  confirm(revlist.join(';\n') + '\n\n' + 
  typeof revlist[0] + ';\n' +
  typeof revlist[1] + ';\n' +
  typeof revlist[2] + ';\n' + 
  typeof revlist[3] + ';\n' +
  typeof revlist[4] + ';\n' +
  typeof revlist[5] + ';\n' +
  typeof revlist[6] + ';\n' +
  typeof revlist[7] + ';\n' +
  typeof revlist[8] + ';\n' +
  typeof revlist[9]);
}

let myliststr = [];

let lgth = 0;
let longest;

function longestWord(){
  for(let i = 0; i <= 9; i++){
    if(typeof mylist[i] == 'string'){
      myliststr.push(mylist[i]);
    }
  }
  for(let ii = 0; ii < myliststr.length; ii++){
    if(myliststr[ii].length > lgth){
      lgth = myliststr[ii].length;
      longest = myliststr[ii];
    }
  }
  confirm("Самое длинное слово в этом массиве: \n" + longest + ";" + "\nЕго длина: " + longest.length + " букв.");
}



let as_car = {0:"Ford",
              1:"Focus",
              2:"Blue",
              3:"Perfect",
              4:"No"};

function aslist(){
  console.log(as_car);
}

let car = [];

function lastkey(){
  for(let i = 0; i <= 4; i++){
    car.push(as_car[i]);
  }
  car = car.sort();
  console.log(car[car.length - 1]);
}



let as_matrix = {
  Fruits:{One:"Orange", Two:"Apple", Three:"Watermelon", Four:"Cherry", Five:"Lemon"},
  Vegetables:{One:"Onion", Two:"Cucumber", Three:"Tomato", Four:"Potato", Five:"Beetroot"},
  Fastfood:{One:"Burger", Two:"Naggets", Three:"Frenchfries", Four:"Cake", Five:"Icecream"},
  Drinks:{Cold:{One:"Cola", Two:"Fanta", Three:"Sprite", Four:"7UP", Five:"Mirinda"}, Hot:{One:"Tea", Two:"Coffee"}}
};

function showmatrix(){
  console.log(as_matrix);
}

function nameversion(){
  confirm(navigator.appVersion);
}

