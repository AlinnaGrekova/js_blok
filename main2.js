 // Домашнее задание 2
// Условия
// Пример 1
// В переменной minute лежит число от 0 до 59. 
// Определите в какую четверть часа попадает это число 
// (в первую, вторую, третью или четвертую).

let minute=77;
if (minute>=0 && minute<=15)
    {
        console.log("число поподает в первую четверть часа" );
    }
    else if (minute>15 && minute<=30)
    {
        console.log("число поподает во вторую четверть часа" );
    }
    else if (minute>30 && minute<=45)
    {
        console.log("число поподает в третюю четверть часа" );
    }
    else if (minute>45 && minute<=59)
    {
        console.log("число поподает в четвертую четверть часа" );
    }
    else
    {
        console.log("Нет такого времени");
    }
// Пример 2
// Переменная lang может принимать 2 значения: 'ru' 'en'. 
// Если она имеет значение 'ru', то в переменную arr 
// запишем массив дней недели на русском языке, 
// а если имеет значение 'en' – то на английском. 
// для ru - arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// для en - arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

let lang="en";
if (lang=="ru")
{
let arr= ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
console.log(arr);
}
else if (lang=="en")
{
arr= ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
console.log(arr);
}
else{
    console.log('Error');
}


// Пример 3 
// Напишите код, который предлагает пользователю ввести целое 
// число. Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. Например, 
// "Число " + num + " однозначное положительное". 
// Достаточно будет определить, является ли число однозначным, 
// двузначным или трехзначным и более.

// let input =prompt("Введи целое число", 10);
// if(input<10 && input>-10)
// {

//     if (input >=0) 
//     {
//         alert(input +' '+'Положительное и однозначное число')

//     }
//     else{
//         (input +' '+'Отриательное и однозначное число')
//     }
// }
// else if(input<100 && input>-100)
// {
//     if (input >=0) 
//     {
//         alert(input +' '+'Положительное и двузначное число')

//     }
//     else{
//         (input +' '+'Отриательное и двузначное число')
//     }
// }
// else
// { if (input >=0) 
//     {
//         alert(input +' '+'Положительное и трехзначное число')

//     }
//     else{
//         (input +' '+'Отриательное и трехзначное число')
//     }
// }

// Пример 4
// Создаются переменные red и yellow для красного и 
// жёлтого сигналов светофора соответственно.
// В том случае, если переменным red или yellow присвоены 
// значения "нет", горит зелёный сигнал светофора и 
// выводиться сообщение, разрешающее переходить дорогу.
let red=false;
let yellow=false;
if(red==false && yellow==false)
{
console.log("горит зеленый, можно переходить дорогу!");
}
else
{
    console.log(" нельзя переходить дорогу!");
}

// Циклы
// Пример 5
// Выведите столбец чисел от 1 до 12.


// let i=1;
// while(i<13)
// {
// console.log(i);
// i++
// }

// Пример 6
// Выведите столбец чисел от 5 до 13.

let j=5;
while(j<14)
{
console.log(j);
j++
}


// Пример 7
// Выведите столбец четных чисел в промежутке от 0 до 16.
let p=0;
while(p<16)
{
    p++
    if(p%2===0)
    {
        console.log(p);
    }
}

// Пример 8 
// С помощью цикла найдите сумму чисел arr = [2,5,8,3,6]

let result1 = 0;
let array = [2, 5, 8, 3, 6];
for(let i = 0; i < array.length; i++){
    result1 = result1 + array[i];
}
console.log(result1);