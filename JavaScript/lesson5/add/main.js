let users = [
    {id: 1, name: 'Dima', age: 36, phohe: +380672757648, state: 'Lviv', status: true},
    {id: 2, name: 'Marianna', age: 37, phohe: +380976708331, state: 'Lviv', status: true},
    {id: 3, name: 'Vitaliy', age: 8, phohe: +380977168442, state: 'Lviv', status: false},
    {id: 4, name: 'Jura', age: 4, phohe: null, state: 'Lviv', status: false},
];

// - створити функцію яка виводить масив
function arreyIterator(arrey) {
    for (const arreyElement of arrey) {
        console.log(arreyElement);
    }
}

arreyIterator(users)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка заповнює масив рандомними числами та виводить його.
function addArrey(number) {
    let arr = []
    for (let i = 0; i < number; i++) {
        arr[i] = Math.floor(Math.random() * 100)
        arr.push()
    }
    return console.log(arr)
}

addArrey(10)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
let num3 = [55, 11, 22, 33, 2];
console.log(num3);
console.log(`-------------------------------------------------------------------`)


function minNum(arr) {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        }
    }
    console.log(min)
    document.write(`<h4>найменше число з масиву ${min}</h4>`)
    return min;
}

minNum(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function maxNum(arr) {
    let max = arr[0]
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement
        }
    }
    console.log(max);
    document.write(`<h4>найбільше число з масиву ${max}</h4>`)
    return max;
}

maxNum(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function numMinMax(arr) {
    let min = arr[0];
    let max = arr[0]

    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        } else if (arrElement > max) {
            max = arrElement
        }
    }
    document.write(`<h4>виводимо найбільше число з масиву ${max}</h4>`);
    console.log(`повертаємо найменше ${min}`)
    return min
}

numMinMax(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка виводить масив
let iterator = (arr) => console.log(arr);
iterator(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка повертає найбільше число з масиву
let max = (arr) => {
    let max = arr[0]
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement
        }
    }
    console.log(max)
}
max(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка повертає найменьше число з масиву
let min = (arr) => {
    let min = arr[0]
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        }
    }
    console.log(min)
}
min(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function arreyMaker(arr) {
    let start = 0;
    for (const arrElement of arr) {
        start = start + arrElement
    }
    return start
}

console.log(arreyMaker(num3));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(arr) {
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        start = start + arrElement
    }
    return start / arr.length
}

console.log(arithmeticMean(num3));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let arrLenght = (arr) => console.log(arr.length);
arrLenght(num3)

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них






// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
let a = [1,2,3,4]
let b = [2,3,4,5]
// результат
//     [3,5,7,9]
function arrAddition (a,b) {
    for (const aElement of a) {
        
    }
}





// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"





// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]










// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
//
//
// /*
//   Вивести масив винахідників які народились в 1500-х роках.
//   Вивести масив тільки імен винахідників які народились в 1800-х роках
//   Вивести масив з імен та прізвищ винахідників (['Albert Einstein', ... ])
//   Відсортувати винахідників за кількістю прожитих років
//   Відсортувати людей але тільки за прізвищем
//   Перевірити чи є хоча б один винахідник народжений в 1878, якщо так то функція повертає true якщо ні то false
//   * Знайдіть суму років які прожили всі винахідники разом
//   * Знайти суму кожного типу транспорту, які є в масиві
// */
//
// const inventors = [
//  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
//  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
//  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
//  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
//  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
//  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
//  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
//  {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
//  {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
//  {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
//  {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
//  {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
// ];
//
// const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
//  'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
//  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
//  'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
//  'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
//  'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony',
//  'Blake, William'];
//
// const transport = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
//  'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
//
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
