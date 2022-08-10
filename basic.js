let num = 4.44;
let num2 = 4;
let string = "Hello";
let string2 = "JavaScript"
let string3 = string + string2
let interpalator = `Hello ${string2} i like coding`;
let longString = `Hello my name is Abdulaziz i from Uzbekistan`
let bool = true;
console.log(5 < 10) // true shunday qaytaradi
let undefined; // agar elon qilingan bolsa va qiymat berilmasa bu undefined boladi  
let donutHole = null; // nul bu bosh object qilinadi vaqtinchalik bosh bolishi uchun
let object = {
        a: 5,
        b: 'text',
        c: false,
        d: {
            d: 34,
            cd: 'text'
        },
        z: [1, 23, 32, 342, 3]
    }
    //ozgartira olamiz 
object.b = "Stroka";
// yangi obj qoshish
object.x = "abc";
// chiqarish yollari
console.log('tag', object.b)
console.log('tag', object.[z])

// massiv bunixam kulichi bor faqat key bu yerda key number
let array = ['a', 'b', 'c', { a: 5, t: 'text' }, true];
// chiqarish uchun 
const yu = 5;
// bu constant buni ozgartira olmaymiz
//chrome consoleda Number.MAX_SAFE_INTEGER shunga oxshash narsalarni korib max qancha raqam qabul qilishini bilib olsa boladi
// NUmbers -------------------------------------------
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1) // max integer chiqarish analog tepadagiga
console.log('tag', Number.NaN) // raqam emas Not A Number
console.log('tag', 2 / 0) // Infinite
console.log(typeof NaN) // number

let tort = '4';
let besh = '54,12'
console.log('tag', parseInt(tort));
console.log('tag', +tort)
console.log('tag', parseFloat(besh))
console.log('tag', 0.4 + 0.2) // 0.60000000001
console.log('tag', (1 / 6) + (1 / 5)) // 0.60000000001
console.log('tag', (0.4 + 0.2).toFixed(4)) // string qataradi
console.log('tag', +(0.4 + 0.2).toFixed(4)) // number qilish uchun oldiga + qoyamiz
console.log('tag', parseInt((0.4 + 0.2).toFixed(4))) // yoki shunday

// console.log(10n - 5) // error oxirida n bolsa bu bigInt
console.log(parseInt(10 n) - 5) // int ga ugirib olish kk 
console.log(10 n - BigInt(4)) // yoki intni BigInt ga ugirib olamiz chunki type birxil bolishi kk 
console.log(5 n - 2 n) // return 2n tak kak bu BigInt
let a = Math.PI;
let ryround = Math.round(4.4);
let mt2 = Math.round(4.6);
let stepen = Math.pow(8, 2); // kvadrad chislo qilib beradi
let kvadrat = Math.sqrt(64); // kvadrat korenini topib beradi
let test = Math.abs(-4.8) // musbat sonni musbat qilib beradi
let test3 = Math.ceil(10.1) // okrugleniya return 5
let test2 = Math.round(4.5); // return 5
let test4 = Math.floor(4.7); // return 4
let test5 = Math.sin(90 * Math.PI / 180)
let test6 = Math.cos(10 * Math.PI / 180);
let test43 = Math.min(12, 43, 5, 6, 1, 123);
let test44 = Math.max(12, 43, 5, 6, 1, 123);
let test46 = Math.random(test44);
let result = Math.floor(Math.random() * 11); // 0 - 10 gacha random qaytaradi
let result100 = Math.floor(Math.random() * 11); // 0 - 100 gacha random qaytaradi
console.log(Math.floor(Math.random() * 11)); // 

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log('tag', getRandomBetween(10, 42))
    // STring---------------------------
let name = "TAOBAO";
let age = 25;
let output = `This is name ${name} age ${age > 25 ? 'Old' : 'Molod' }`
console.log('output', output);

const result = `
      <div>This is div</div>
      <p>This is p</p>
      `
    // length 
console.log(name.length); //uzunligi
console.log(name.toUpperCase()); //verxniy reg
console.log(name.toLowerCase()); //kichik xarfga
console.log('tag', name.charAt(2));
console.log('tag', name.indexOf('B')) // nechinchi indexdaligini qaytarib beradi
console.log('tag', name.indexOf('!')) // yoq bolsa -1 qaytaradi
console.log('tag', name.startWith('tao')) // false chunki kotta xarfda yozilgan
console.log('tag', name.startWith('TAO')); // true
console.log('tag', name.endWith('O')) // oxiridagi xarf shu bn taugasa true
console.log('tag', name.repeat(3)) // 3 marta yozib beradi
const strng = '      pass        '
console.log('tag', strng.trim()) //probellarni olib beradi
console.log('tag', strng.trimLeft()) // chapdan
console.log('tag', strng.trimRight()) //o'ngdan


function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Sen xali tugilmading'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}


const personName = 'Tester';
const personAge = 34;
const personName2 = 'Budushiy';
const personAge2 = -34;

const outputs = logPerson `Ismi:${personName}, Age: ${personAge}!`
const outputs2 = logPerson `Ismi:${personName2}, Age: ${personAge2}!`
console.log("outputs", outputs)
console.log("outputs2", outputs2)
    // Function ----------------

//function decloration xoxlagan joydan chaqirsa boladi
function greet(name) {
    console.log("greet -> name", "Salom ---"
        name)
}
//Function expression tepada chaqirsa xato beradi
const greed2 = function greet(name) {
    console.log("greet2 -> name", "Salom ---"
        name)
}
const foo = async function() {
    // do something
}
const foo = async() => {
    // do something
}
console.log(typeof greet2); //Function  
console.dir(greet2) // raskrit function korishimiz mumkin bu xam object
    // consoleda otib __proto__ lar xaqida nimalari borligi xaqida gapiramiz 
    // Anonimniy function 
let counter = 0;
setInterval(function() {
        console.log('tag', ++counter)
    }, 1000)
    // birinchida function beriladi 2- da mm second beriladi

// interval qilib beradi
const interval = setInterval(function() {
    if (counter == 10) {
        clearInterval(interval)
    } else {

        console.log('interval', ++counter)
    }
}, 1000)

// bu zaderjka qilib beradi 
setTimeout(function() {
    console.log('tag', 'Goo...')
}, 5000)

const timer = setInterval(function() {
    if (counter == 10) {
        clearTimeout(timer)
    } else {

        console.log('interval', ++counter)
    }
}, 1000)

// strelochni function bu xam po suti function 

const arrow = (name, age) => {
    console.log("Privet -----", name, age)
}
arrow('Stiv');
// teoadagiga identichniy 1 ta param bersa () shart emas lekin berilmasa xam () bolishi kk 
const arrow2 = name => {
    console.log("Privet -----", name)
}
arrow2('Jobs');

const pow2 = num => {
    return num ** 2
}
console.log("pow2", pow2(5))
    // ------------------------
    // parametri po umolchaniya
const sum = (a, b) => a + b;
console.log("sum", sum(41, 1));
//defolt berib qoyish
const sum = (a = 34, b = 23) => a + b;
// birbiridan zavisit qilish 
const sum = (a = 34, b = a * 2) => a + b;
// universalniy function qancha bersa xam natija bor muammosiz 
function sumAll(...all) {
    console.log("sumAll -> all", all)
}
sumAll(1, 2, 3, 4, 6, 7, 8, 9);
// for yordamida barcha sonlarni yigindisini chiqaramiz
function sumAll(...all) {
    let result = 0;
    for (let i of all) {
        result += i
    }
    return result
}
const res = sumAll(1, 2, 3, 4, 6, 7, 8, 9);
console.log("res", res);
// ZAMIKANIYA
function createMember(name) {
    return function(lastname) {
        console.log('tag', name + lastname)
    }
}
// createMember
const logWithLastName = createMember('TAO'); // bizga funtion qaytaradi cl qilib korsatamiz 
// biz name berib qoyganmiz endi faqat lastname beramiz endi bizni const doim 1 ta param qabul qiladi va bu lastname ga tasir otkaza oladi 
console.log('tag', logWithLastName('BAO'));
console.log('tag', logWithLastName('Bingo'));

//MASSIVI
const cars = ['Mers', 'b', 's', 'sd']
const fib = [1, 1, 2, 3, 5, 8, 13, 21]
cars[0] = 'Laches' //ozgartirish
cars[5] = 'Laches21' //yangi qoshiladi index berish kk 
cars.push('Reno') // yangi qoshiladi oxiriga
cars.unshift('Reno') // yangi qoshiladi boshiga
console.log("cars", cars.length); // uzunligi
cars.shift() // xech narsa berilmaydi 1-ni uchiradi
const firstItem = cars.shift() // bu qaytaradi agar u bn ishlash kk bolsa 

cars.pop() // param olmaydi
const lasttItem = cars.pop() // bu qaytaradi agar u bn ishlash kk 
console.log('tag', cars.reverse()) // teskarisiga ugirib beradi

const text21 = 'Privet men is Moon'
    // arrayga ugiramiz 
const text21ar = test21.split(','); // bunga 2 ta itemlik massiv olamiz 
const textarray = test21.split(''); // bunga xarflarga bolingan arr xozil boladi shuni oxirga .reverse() qilsak ugrilib qoladi va .join('') qoshib teskari text boladi
const textarray = test21.split('').reverse().join('')
console.log("text21ar", text21ar)


const people = [
        { name: 'Texas', proifit: 4000 },
        { name: 'Texas', proifit: 1000 },
        { name: 'Texas', proifit: 2000 }
    ]
    // findIndex bu for ga oxshagan index qaytaradi 
    // function keladi u functionga itemlarni bervoramiz va u yerdan bor bolsa index qaytadi 
const indexx = people.findIndex(fundtion(person) {
        console.log('tag', person)
        return person.proifit === 4000
    })
    // index ni log qilamiz 
console.log('indexx ni koramiz nechi qaytganini', indexx)
    // endi shu index boyicha arraydan chiqaramiz 
    //-------------------
    //bu object qaytaradi
console.log('Result: ', people[indexx])
const result2 = people.find(elem => {
        return elem.proifit === 4000
    })
    //shunday qilib qisqartirsaxam boladi  lamda function xam deyiladi bu podxodni 
const result3 = people.find(person => person.proifit === 4000)
console.log("result2", result2)
    // bu qanday ishlitganini for da koramiz shu tariqa ishlaydi 
let resulInFor;
for (person of people) {
    if (person.proifit === 4000) {
        resulInFor = person
    }
}

console.log("person", person)
    // --------------------------------
console.log('tag', cars.includes('Mers')) // bor bolsa true qaytaradi 

// Misol uchun arraylar ichidagi carslar name ni uppercase qilishimiz kk 
// method map xamisha bizga yangi array qayradi 
const newCarsUpperCase = cars.map(car => car.toUpperCase())
    // yana bita mison map ishlatish xaqida 
const pow2Fib = fib.map(num => num ** 2)
console.log("pow2", pow2Fib)
    /// biz functionga ishlatsak boladi 
const pow2 = num => num ** 2
    // functionga berovarim xar bir elemni array ichidagi
const powFib = fib.map(pow2)
console.log("powFib", powFib)
    // yana bir yoli 
const sqrt = num => Math.sqrt(num);
const pow3Fib = fib.map(pow2).map(sqrt) // yoki .map(Math.sqrt) qilib ishlatsakxam boladi  
    /// method filter u xan map va findIndex larga oxshab ishlaydi va yangi array qaytaradi shunu unitmaslik kk 
const filteredNumbers = pow2Fib.filter(num => num > 20)
console.log("filteredNumbers", filteredNumbers)
    // map bu array aytimlarini ozgartirish uchun kk boladi filter esa filtirlab olish uchun kk boladi findIndex esa index sini topish uchun find esa object topish uchun reduce esa barchasini qiymatini olish uchun kk boladi 
    //---------------------
    // REDUCE 3 ta param qabul qiladi 1- acc bu acmulator 2 - paran  person  bizni misolda 3 - boshlangich raqam yani qayerdan boshlasi 

const allProfit = people.reduce((acc, person) => {
    if (person.profit > 2000) {
        acc += person.proifit
    }
    return acc
}, 0)

console.log("allProfit", allProfit)
    // bunda 1- filterlab olamiz keyn reduce ga berib yuboramiz 
const allProfit2 = people.filter(person => person.proifit > 2000).reduce((acc, person) => {
    acc += person.proifit
    return acc
}, 0)

console.log("allProfit2", allProfit2)

const displatFilter = people.filter(person => person.name.contains('Aziz')) // bu shu people names ichida shu ismliklar bor bolsa qaytaradi 
    // indexOf ishlatsak !== -1 ga qilamiz indexOf ishlatsaxam boladi 
    // ARRAY tugadi 
    // ==================
    // OBJECTS bn ishlaymiz endi 
const person = {
        name: 'DAO',
        age: 28,
        isProgrammer: true,
        lang: ['ru', 'en', 'tr', 'uz'],
        'complex key': 'complex value', // agar key sozi 2 tadan ortqi bolsa shunda bersa boladi 
        [Date.now()]: 'today', // nimadir vichislyat qilsak yana bir misol [3+4]  ['key_' + (3+4)]
        greet: function() {
            // ES5 da shundy elon qilingan 
            console.log('greed is person')
        },
        greed2() { // ES6 da shunday elon qilsa boladi 
            console.log('greed is person')
        },
        info() {
            // contex xaqida tushintirgandagina buni ishlatamiz 
            console.log('Bu userning ismi:', person.name)
                // this bu personga teng chunki biz person object ichida ishlatdik this sozirni shunga this ssilatsa qiladi personga 
            console.log('this', this) // shuni korsatib tushintiramiz 
            console.log('Bu userning ismi:', this.name)
        }
    }
    // qanday ishlata olamiz object valuelarni 
console.log(person.name)
console.log(person['name'])
console.log('tag', person['complex key'])
console.log('tag', person.key_4) // chunki shunday key xosil bolgan
person.age++
    person.lang.push('zh')
person['key_4'] = undefined
console.log(person)
delete person['key_4'] //delete item
    // olish yollari 
const name = person.name;
const ageKey = age
const agePerson = person[ageKey];
const languges = person.lang;
console.log('tag', name, age, languges)
    // ES6 dagi yangi imkoniyati bn qandya olsa boladi 
const { name, age, language } = person // shunda 3 tasi olinadi 
const { name: personName, age: personAge, lang: personLang } = person; // personName shular yangi variable boladi 
const { name: personName, age: personAge = 10, lang: personLang = 'ru' } = person; // agar undifined bolsa default shuni oladi 
// biz array bilan qilgan ishlarimiz object bilan qila olmaymiz chunki ne itererumiy object 

for (let key in person) {
    console.log('Key', key)
    console.log('Value:', person[key])
}
// objectni uzini methodlari bor shunda for qilganda muammo bolishi mumkin shuning uchun shuni tekshirib qoyishimiz kk
for (let key in person) {
    if (person.hasOwnProporty(key)) {
        console.log('Key', key)
        console.log('Value:', person[key])

    }
}

// yangicha usuli bor objectni ichidan keylar olish uchun 
const keys = Object.keys(person) // bu bizga keylardan iborat array qaytaradi 
keys.forEach((key) => {
        console.log('Key', key)
        console.log('Value:', person[key])
    })
    // hasOwnProperty bu yerda yozmaganimiz sababi Object.keys prototyplar bilan aylanmaydi shunga yozilmaydi

// yana qisqaroq usuli 
Object.keys(person).forEach((key) => {
    console.log('Key', key)
    console.log('Value:', person[key])
})

// CONTEXT THIS 
person.info(); // context ga kelganda ishlatamiz 
// new feache 

const logger = {
    keys(obj) {
        console.log('tag', Object.keys(obj))
    }
}
logger.keys(person);
// endi this qanday ishlashini koramiz  buning uchun methodni methodidan foydalanamiz 
const logger = {
    keys() {
        console.log('tag', Object.keys(this))
    },
    // 1- yechim 
    //shuni qilib koringlar sizlarga praktiga boladi yani key oldik endi value ni olish kk
    keysAndValue() {
        Object.keys(this).forEach(key => {
                console.log(`"${key}": ${this[key]}`)

            })
            // 2- yechim
            // const self = this;
            // agar biz => ishlatmasag this ozgarib ketadi shunga self ga ugirib olamiz chnki function uzini contextini yaratadi shunda bizda muammo boladi 
            // Object.keys(this).forEach(function(key) {
            //   console.log(`"${key}": ${this[key]}`) 
            // 3-yechim
            // yana bir yechim bind bervorish kk 
            // })
            // Object.keys(this).forEach(function(key) {
            //   console.log(`"${key}": ${this[key]}`) 

        // }.bind(this))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('---------Start-begin-----', )
        }
        // uchta param qabul qilsa item, index, array biz buni kerak bolsa berib olib shundan foydalansak boladi 
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('---------Between-begin-----', )
            }
        })
        if (bottom) {
            console.log('---------Between-begin-----', )
        }
    }
}

const bount = logger.keys.bind(person) // function qaytaradi va person loggerga qoshilib this personga mujat qiladi 

bount(); // shuni chaqirsak logda person keylari chiqadi bind birlashtiradi va function qaytaradi

logger.keys.call(person) // bu srazi chaqiriladi bind dan farqli olaroq 

logger.keysAndValue.call(person); // key va value olish uchun shuni chaqiramiz 

logger.keysAndValue.call({ a: 1, c: 5 }); // object berib test qilib korsakxam boladi 

logger.withParams.call(person, true, true, true) // shu ketma ketlikda bervorilad 

logger.withParams.apply(person, [true, true, true]); // call dan farqi callda biz xoxlaganimizcha param beramiz buni farqi objectdan keyngi paramlar array qilib berilishi kk 

//------------------
//ASINXRONNOSTI================
// setTimeout bu bir marta ishlab beradi asinxronnost deyiladi bu toxtatsa boladi clearTimeout qilib 
setTimeout(() => {
    console.log('After two second')
}, 2000)

const timeout = setTimeout(() => {
    clearTimeout(timeout); // clear yani tozalash degani shuni ichida yozish kk agar tashqarida yozsak u umuman ishlamaydi chunki tozalab yuboradi clearTimeot
    console.log('Timeout', '')
})

const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}
delay(() => {
    console.log('After two second', '')
}, 2000)

// Interval bn xam shuday qila olamiz bu interva
const interval = setInterval(() => {
        console.log('This is interval ')
    }, 1000)
    // PROMISE 

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve()// bu successda ishlatiladi resolve promis qaytaradi then da qabul qilib olish kk 
            reject('Chto to poshlo ne tak ') // error qaytarish uchun bu cacht ga tushadi
        }, wait)
    })
    return promise
}

delay(2500)
    .then(() => {
        console.log('After then 2 second', '')
    }) //  success response 
    .catch(err => console.log('Error message:', err)) // error response 
    .finally(() => console.log('Finally')) // oxirida finally v lyubom sluchay


const getData = () => new Promise(resolve([
    1, 1, 2, 3, 5, 8, 13
]))

getData().then(data => console.log('data', data));
// yangi imkoniyatlari 

async function asyncExample() {
    await delay(3000) // bu tugashini kutib keyn getData ishga tushadi
    const data = getData()
    console.log("asyncExample -> data", data)
}
asyncExample(); // endi bu function ni ishga tushiramiz

// error bolsa biz qanday tutamiz endi bizfa try catch bor 
const getData = () => new Promise(resolve => reject([
    1, 1, 2, 3, 5, 8, 13
]))
async function asyncExample() {
    try {
        await delay(3000) // bu tugashini kutib keyn getData ishga tushadi
        const data = getData()
        console.log("asyncExample -> data", data)
    } catch (e) {
        console.log("asyncExample -> e", e)
    } finally {
        console.log("asyncExample -> finally")
    }
}

asyncExample();

/// RABOTA S DOM ELEMENTAMI 
//document  shuni consolga yozib tushintiramiz API interface bor js shu dom dereva bn boglanib foydalanadi
// documnt bu globalniy web element shu jami narsani ushlab turgan 
// window xam globalniy object uni ichida juda kop narsalar bor 
// biz akert ishlatganimizda biz odatda windowga murojat qilamiz chunki alert window ichidagi functionlar xisoblanadi ili method 
window.alert('salom');
window.prompt('Kak tebe zovut', 10);
window.confirm('Ti iz nashe clan ?');
// window brouserga tegishli 
const heading = document.getElementsById('hello'); // eng keng tarqalgan usul

console.log("heading", heading) // bu bizga tag va value sini olib beradi 

console.dir(heading); // shu bilan ochamiz ichida qanday methodlari bor shunda koraolamiz

console.log('tag', heading.id) // id sini kora olamiz

console.log('tag', heading.textContent) // textni olamiz

heading.textContent = 'Biz yangi sozlar kiritamiz' // yangi zoz kiritish 

heading.style.color = 'red' // shu style deb xoxlagan style ishlata olamiz

// heading bn console ga otib xar xil style lar qanday ishlashinikorsatamiz
//-------------------------------------------------------------------------
heading.style.backgroundColor = 'black';
heading.style.padding = '2rem';
heading.style.texAlign = 'center';
// endi biz bu yerda js da organgan narsalamizni ishlatsak xam bolari misol uchun 

setTimeout(() => {
    heading.style.backgroundColor = 'black';
    heading.style.padding = '2rem';
    heading.style.texAlign = 'center';
}, 2000);

// endi addStyleTo degan function yaratamiz universalniy qilib nima bersak shunga shu style qabul bolib qoladi 
setTimeout(() => {
    addStyleTo(heading)
}, 2000);

function addStyleTo(node) {
    nodestyle.backgroundColor = 'black';
    nodestyle.padding = '2rem';
    nodestyle.texAlign = 'center';
}

// id si yoq bolsa 
// endi biz tag name boyicha olamiz 
const heading2 = document.getElementsByTagName('h2'); // s ga etibor bering agar dom derevada 1 tadan kop h2 bolsa xammasini oladi  agar kop bolsa bizga array qaytaradi
const heading3 = document.getElementsByClassName('header-two')[0] // 0 chini oladi agar kop bolsa 1 tadan

// biz koraganlarimiz eskicha usul uni ustiga sekin 

const heading4 = document.quertSelector('.header-two'); // id bolsa # class bolsa . qoyilishi SHART
const heading4 = document.quertSelector('#two'); // id bolsa # class bolsa . qoyilishi SHART
const heading55 = document.querySelector('h1') // tag olish
    // Bu xamisha birinchi duch kelgan id yoki classni qaytaradi 

// agar 3 ta h1 bor bolsa 3-da class id berilmagan shuni olmoqchi bolsak 
// console.dir(headeing55) qilib nextElementSibling ni topamiz shu undan keyn keladigon tagni topib beradi

const lastH1 = heading55.nextElementSibling
console.log("lastH1", lastH1);
// agar boshqa yol bn topamiz desak 
const headingAll = document.querySelectorAll('h1'); // array qaytaradi
// bizni vazifammiz oxirgisini topish edi 
const lasth = headingAll[1] // yoki [heading.length -1] desak xam oxirgi elem chiqadi

// endi yana 1 ta param bervoramiz text berib koramiz 
setTimeout(() => {
    addStyleTo(heading, 'JavaScript')
}, 2000);

function addStyleTo(node, text) {
    node.textContent = text;
    node.style.backgroundColor = 'black';
    node.style.padding = '2rem';
    node.style.texAlign = 'center';
}
// yana param beramiz misol uchun color 
setTimeout(() => {
    addStyleTo(heading, 'JavaScript', 'red')
}, 2000);

function addStyleTo(node, text, color = 'red') {
    node.textContent = text;
    node.style.color = color;
    node.style.backgroundColor = 'black';
    node.style.padding = '2rem';
    node.style.texAlign = 'center';
}
// yana param beramiz misol uchun fontSize 
setTimeout(() => {
    addStyleTo(heading, 'JavaScript', 'red', '2rem')
}, 2000);
// default bermaymiz 
function addStyleTo(node, text, color = 'red', fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.backgroundColor = 'black';
    node.style.padding = '2rem';
    node.style.texAlign = 'center';
    // tekshirib olamiz kelgani kelmaganini
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}
// sobityalar xaqida xam otamiz 

// . bilan sobitiya nomini kirtamiz 
heading.onClick = () => {
    console.log('Click')
}
heading.onClick = () => {
        if (heading.style.color === 'red') {
            heading.style.color = '#fff',
                heading.style.backgroundColor = 'black'
        } else {
            heading.style.color = '#000',
                heading.style.backgroundColor = '#fff'
        }
    }
    // heading.ondlckick

// addEventListener xaqida  2 ta obyazatelniy parametrlar bor 1- sobitya 2- function 
heading.addEventListener('dblclick', () => {
    console.log('Click......', )
})

/// bu boshqa tema
const headignGoogle = document.querySelector('#google');
const link = headignGoogle.querySelector('a');
const leni2 = headignGoogle.children[0] // buxam a tagni oladi
    /*
    <h2 id="google"><a href="https://google.com"></a></h2>
    */
    // event.preventDefault sobitya otmenit qiladi 
link.addEventListener('click', (event) {
    event.preventDefault() // shuni qoymasak otib ketadi
    console.log('tag', event) // nimlar borligini koramiz logdan 
    console.log('tag', event.target) // a tag ni linkni oladi 
    console.log('tag', event.targer.getAttribute['href']) // url ni oldik endi
        // loacation ni shunga togirlab qoyamiz 
    const url = event.targer.getAttribute['href'];
    window.location = url;
})

// PROTOTYPE________ PRODVINUTE CRASH COURSE

const person = new Object({
        name: 'Maxim',
        age: 35,
        greet() {
            console.log('greet')
        },
        week: function() {
            console.log('week')
        }
    })
    // biz shuni yaratamiz yangi prototype function create qilamiz 
Object.prototype.sayHello = function() {
        console.log('siHello function')
    }
    // consoldan person.siHello() qilsak edni natija chiqadi chunki shuni prototypega qoshilib qolgan 
const person2 = Object.create(person);
// log da protolarga qarash kk shunda xammasi tushinarli boladi 
person2.name = 'Fernando';
person2.age = 34;

const str = 'prosta text' // bunda siHello ni topa olmaymiz
const str2 = new String('I im string'); // new String xam Object xisoblanadi
// endi shuni protosini qarasak ichidan siHello() ni topa olamiz Object eng asosiysi xisoblanadi shunga xamma yerdan ishlatsa boladi endi objectlarda
/// CONTEXT XAQIDA YANA 

const person = {
    name: 'Maxim',
    age: 35,
    logInfo() {
        console.log(`Name is ${this.name}`)
        console.log(`Name is ${this.age}`)
    }
}
person.logInfo() // bunda person usernaem va age chiqadi 
    // endi boshqa user yaratib unda person logInfo dan foydalana olamizmi 

const member = {
    name: 'Jon',
    age: 32
}
person.logInfo.bind(member)(); // bu function qaytarar edi shunga uzini chaqiramiz ()

// endi uni yanada kuchaytirib koramiz qoshimcha paramlar berib koramiz 
const person = {
    name: 'Maxim',
    age: 35,
    logInfo(job, phone) { // bu yerda yangi paramlar qabul qilamiz
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()

    }
}
const member = {
    name: 'Jon',
    age: 32,
    job: undefined,
    phone: undefined
}
const fnMemberInfo = person.logInfo.bind(member)
fnMemberInfo('Frontend', '99891-364-66-33')
person.logInfo.bind(member, 'Frontend', '99891-364-66-33')()

// bind uzigaxam bervorsak boladi qoshimcha paramlarni 
person.logInfo.bind(member, 'Frontend', '99891-364-66-33')() // boshqa funtion yatatish shart emas
person.logInfo.call(member, 'Frontend', '99891-364-66-33') // bu uzi srazi chaqiradi call
person.logInfo.apply(member, ['Frontend', '99891-364-66-33']) // buxam uzi chaqiradi 


let obj1 = {
    name: 'John'
}

let obj2 = {
    name: 'Django',
    age: 34
}

let obj3 = Object.assign({}, obj1, obj2) // objectlardan object yaratamiz 2 ta bir xil keylik kelib qolsa oxirdagisini oladi
    //==============================================================
const array = [1, 2, 4, 5, 6];

function multBy(arr, n) {
    return arr.map(function(i) {
        return i * n
    })
}
console.log(multBy(array, 15));

// PROTO oraqali xal qilsa boladi shu ni qoshib qoysak xamma arraylarga ishlatish imkoniyati boladi shunday qilib protolar yaratish imkoniyati yaraladi bizda

Array.prototype.mountBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log('PROTO_MOUNTBY', array.mountBy(2)); // PROTO ICHIDAGI METHOD ORQALI XAL QILSIH 
//================================================================
//ZAMIKANIYA FUNCTION
function createCalcfn(n) {
    return function() {
        return 1000 * n
    }
}
const calc = createCalcfn(42); // shu n orniga zamknuta bolib ornadi 
calc() // shuni chaqirsak 1000 * 42 chunki 42 zamknuta


function createIncrementor(n) {
    return function(num) {
        return num + n
    }
}
const addOne = createIncrementor(1); // 1 n ga zamknuta bolib qoldi 
const addTen = createIncrementor(10);
addOne(10); // return 11
addOne(33); // return 34
addTen(34); // return 44

function urlGenerator(dommain) {
    return function(url) {
        return `https://${url}.${damain}`
    }
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');
const uzUrl = urlGenerator('uz');

console.log('comUrl', comUrl('google'));
console.log('ruUrl', ruUrl('ok'));
console.log('uzUrl', uzUrl('anordao'));


// task =======================
function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}


function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}


const person33 = { name: 'Jon', age: 12, job: 'fn' }
const person34 = { name: 'Doe', age: 42, job: 'CEO' }


bind(person33, logPerson)();
bind(person34, logPerson)();

//EVENT LOOP

function timeoutTwoSec() {
    console.log('timeoutTwoSec')
}

setTimeout(timeoutTwoSec, 2000) // tepadagi gunction ihsga tusahdi 2s dan keyn 
setTimeout(() => {
    console.log('After three second')
}, 3000);
// wep api qanday ishlashini korsak boladi shu yerga kirib 
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
//shuyerda qanday ishlashini korsatib bera olamiz 
// qaysi korinishda chiqadi bizni loglar 
console.log('start')

setTimeout(() => {
    console.log('After three second')
}, 0);

console.log('end')
    // Web api ga tushishi xisobiga setTimeout oxiri bajariladi sec 0 bolishiga qaramay
    //PROMISE ===========================

console.log('Request sending.....');

setTimeout(() => {
        console.log('Preparing data .....')
        const backData = {
            server: 'zormo',
            port: 2000,
            status: 'ok'
        }
        setTimeout(() => {
            backData.modified = true
            console.log('Data received', backData)
        })

    }, 2000)
    // biz iskustvenno zaderjkalarni yaratdik lekin bu yerda vlojennosti kop 
const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data .....')
        const backData = {
            server: 'zormo',
            port: 2000,
            status: 'ok'
        }
        resolve()
    }, 2000)
})

p.then(() => {
        console.log('Promise resolved ...')
    })
    /// shuni boshqa yolini koramiz 
const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data .....')
        const backData = {
            server: 'zormo',
            port: 2000,
            status: 'ok'
        }
        resolve(backData)
    }, 2000)
})

p.then(data => {
        const p2 = new Promise((reject, resolve) => {
            data.modified = true
            resolve(data)
                // console.log('Data received', backData)
        })
        p2.then(clientData => {
            console.log('Data received', clientData)
        })
    })
    // bu yerdaxam callback kopayib ketdi deyishiz mumkin 
    // yana oson usuli 
p.then(data => {
        return new Promise((reject, resolve) => {
            data.modified = true
            resolve(data)
        })

    }).then(data => {
        data.fromInDatabase = true
        console.log('Data received', data)
        return data
    }).then(response => {
        console.log('data', data)
    })
    .catch(err => {
        console.error('Error: agar reject qaysa shunga tushadi', err)
    }).finally(() => console.error('Nima bolishidan qatiy nazar shu ishga tushadi: Finally ', ))

// PROMISE yana bir misol keltiramiz 
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
sleep(2000).then(() => console.error('After two second'));
sleep(3000).then(() => console.error('After three second'));
//PROMISE.all bor bu massiv qabul qilada va faqat berilgan promislar qachon tugatilsagina thenga tushadi 
Promise.all([sleep(3000), sleep(5000)]).then(() => {
        console.error('Barchasini bajarib bolib keyn natija qaytadi')
    })
    // Rromise race bor qaysidir biri birinchi bajarilsa shu kelib tuhsadi 
Promise.race([sleep(3000), sleep(5000)]).then(() => {
    console.error('Promise race .......')
})

// OBJECT gibkiy nastroyka 
//========================================================
// Object.create({},{}) example qanday foydalanish xaqida

const person = Object.create({
    // bu yerda function beriladi va bu proto bolib tushadi
    calculateAge() {
        console.log("Age:", new Date().getFullYear() - this.brithYear)
    }
}, {
    name: {
        value: Aziz,
        enumerable: true, // korinishi uchun shuni qoymasak korinmaydi for qilsak   
        writable: true,
        configurable: true // shuni qoshsak udalik qila olamiz  
    },
    brithYear: {
        value: 1992,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.brithYear
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set value:', value)
        }
    }
})

person.name = 'Max' // agar writable false bolsa ozgartira olmaymiz 

for (let key in person) {
    console.log('tag', key, person[key])
}
// CLASS ES6.............................
//========================================================
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }
    hide() {
        this.$el.style.display = 'none';
    }
    show() {
        this.$el.style.display = 'block';
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}
const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: 'red'

})
class Circle extends Box {
    constructor(options) {
        super(options.selector)
        this.$el.style.borderRadius = '50%'
    }
}

const box2 = new Circle({
        selector: "#box2",
        size: 100,
        color: 'red'
    })
    //ASYNC AWAIT .................................
    //=============================================
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

delay(2000).then(() => console.error('2 sec'));

const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos() {
    return delay(delay).then(() => {
        // fetch(url).then(response => response.json())
        // shuni orniga promise dan foydalansak boladi
        return fetch(url)
            // qisa qilib .then(() => fetch(url)) qaytarsak xam boladi 
    }).then(response => response.json())
}
// endi shu fn chaqiramiz u xech narsa qabul eilmaydi lekin promise qaytaradi 

fetchTodos()
    .then(data => {
        console.error('DATA', data)
    })
    .catch(err => console.error('ERROR: ', err))
    // async await ishlatamiz endi 
async function fetchAsyncTodos() {
    await delay(2000) // bu bajarilmaguncha pastga otmaymiz
    const response = await fetch(url) // bu bizga natija beradi shuning uchun kelgan datani nimadirga saqlab olishimiz kk boladi 
    const data = await response.json() // bu xam promise qaytargani uchun buni xan await da kutib turamiz
    console.error('Data', data)
}
// edni savol berishingiz mumkin qanday tutib olamiz error successni 
// bizda bu xolatda try catch finally bor 

async function fetchAsyncTodos() {
    console.error('Started  fetchAsyncTodos function')
    try {

        await delay(2000) // bu bajarilmaguncha pastga otmaymiz
        const response = await fetch(url) // bu bizga natija beradi shuning uchun kelgan datani nimadirga saqlab olishimiz kk boladi 
        const data = await response.json() // bu xam promise qaytargani uchun buni xan await da kutib turamiz
        console.error('Data', data)
    } catch (e) {
        console.error('Error', e)
    } finally {
        console.error('finally')
    }
}
fetchAsyncTodos();
// promise qaytaradi shuni bilib thendan foydalansak boladi
fetchAsyncTodos()
    .then(() => console.error('Success'))
    // PROXY object class function...........
    // ======================================
const pperson = {
    name: 'Aziz',
    age: 28,
    job: 'Developer'
}

const op = new Proxy(pperson, {
        get(target, prop) {
            if (!(prop in target)) {
                return prop
                    .split('_')
                    .map(p => target[p])
                    .join(' ')
                    // consolda edni op.name_age_job_age qilsakxam join qilib qaytaradi
            }
            console.error(`Getting prop ${prop}`)
            return target[prop]
        },
        set(target, prop, value) {
            if (prop in target) {
                target[prop] = value
            } else {
                trow new Error(`No ${prop} field in target`)
            }
        },
        has() {
            return ['name', 'age', 'hob'].includes(prop)
        }
        deleteProperty(target, prop) {
            console.error('Deleting....', prop)
            delet target[prop]
            return true
        }
    })
    // consolda  op.name vaxo kazo qilib test qilamiz delete change etc .....

// function 

const log = text => `Log ${text}`;
// proxy ga birinchisi target beramiz u objectxam bolishi mumkin yoki fn 
const fnProxy = new Proxy(log, {
    apply(target, thisArg, args) {
        console.error('Calling fn....')

        return target.apply(thisArg, args).toUpperCase()
    }
});

//CLASS .....................

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const PersonProxy = new Proxy(Person, {
    cunstruct(target, args) {
        console.error('PersonProxy.... working')
            // return new target(...args) 
            // buni ichidaxam proxy ishlatsak boladi 
        return new Proxy(new target(...args), {
            get(t, prop) {
                console.error(`Getting prop "${prop}"`)
                return t[prop]
            }
        })
    }
})

// PROXY primineniyasi ................
//======================================

const withDefaultValue = (target, defaultvalue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultvalue)
    })
}

const position = withDefaultValue({
    x: 34,
    y: 34
}, 0)
console.error('position', position)
    // bu bizga proxy qaytaradi uzida yoq narsani bersak xam xatolik bermaydi doim 0 qataradi

//Hidden proporties 
// Reflect ga object bersak shu arr qaytaradi keylardan iborat
// void 0 underfined qaytaradi 

const widthHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
    })
}
const data = widthHiddenProps({
    name: 'Aziz',
    age: 28,
    _uid: '2321312'
})
console.error('DATA', data.name)
console.error('DATA', data.age)
console.error('DATA', data._uid) // shu undefined qaytaradi 

Object.keys(data) // bundaxam key korinmaydi _uid 

function quesion(job) {
    const jobObj = {
        developer: "nima uzi java script",
        teacher: "JavaScript bu live"
    }
    return function(name) {
        return `${name}  ${jobObj[job]} ?`
    }
}
const developerQuestion = quesion('developer');
console.log(developerQuestion('Darxan'));
const teacherQuestion = quesion('teacher');
console.log(teacherQuestion('teacher'))
    // Optimization 
const userData = [
        { id: 1, name: 'Aziz', age: 34, job: 'Fr' },
        { id: 2, name: 'ledger', age: 24, job: 'Back' },
        { id: 3, name: 'Tezor', age: 31, job: 'UI/UX' },
        { id: 4, name: 'TezorX', age: 12, job: 'Sience' }
    ]
    // misol uchun bizda zadacha bor shuni n id lik userni qidirmoqdamiz 
    // agar ularni soni 100mln bolsachi bu juda zatradno 
userData.find(user => user.id === 2) // buni proxy yordamida xal qilsak boladi 
const index = {}
userData.forEach(i => (index[i.id] = i))
    // object create userlar id si key roliga otadi edni 

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => index[item.id] = item)
        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch () {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findByid':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})
const users = new IndexedArray([
    { id: 11, name: 'Aziz', age: 34, job: 'Fr' },
    { id: 2, name: 'ledger', age: 24, job: 'Back' },
    { id: 3, name: 'Tezor', age: 31, job: 'UI/UX' },
    { id: 4, name: 'TezorX', age: 12, job: 'Sience' }
])


// endi bizda barcha arraylarda findById() method yaratildi shunda id bersak kk bolgan userni qaytaradi
//GENERATOR.............................................
//======================================================
// * qoysak shu generatorligini aniqlab beradi 

function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}
const str = strGenerator() // consoleda chiqaramiz str ni 
    // endi hello chiqarish uchun biz 
str.next() // ni ishga tushiramiz bu bizga H qaytaradi
    // yana bir example 

function* numGenerator(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numGenerator(17);

// endi uzimizni generatorni yaratamiz bu tepadaginga analog boladi 

const iterator = {
    gen(n = 10) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
}


const itr = iterator;
itr.gen(12);
itr.next() // shuni true kelmaguncha chaqiraveramiz 

// yangi Symbol.iterator bor shu stringda arrayda _proto_ sida bor shunga for of ishlay oladi shu type lar bn 

for (let k of 'hello') {
    console.error('key', k)
}

for (let j of[1, 1, 2, 3, 5, 8, 13]) {
    console.error('Jey', j)
}
// endi biz uzimiz yaratgan generatorga symbol.iterator qoshib qoyamiz shunda ishlaydi 
const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
}

for (let k of iterator) {
    console.error('key', k)
}
// [Symbol.iterator] qoshganimiz uchun endi for of qilib chiqarsak boldi itemlarni
//==============================================
// fn* [Symbol.iterator] default borligi sababli biz buni for of qila olamiz example 
function* itr(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (let t of itr(12)) {
    console.error('item', t)
}
//======================================================
// (FOREACH, MAP, FILTER, REDUCE, FIND,FINDINDEX)..........................
// MASSIVLAR BILAN QANDAY ISHLASAK BOLADI 
const users = [
        { id: 11, name: 'Aziz', age: 34, job: 'Fr', budget: 3300 },
        { id: 2, name: 'ledger', age: 24, job: 'Back', budget: 3300 },
        { id: 3, name: 'Tezor', age: 31, job: 'UI/UX', budget: 3300 },
        { id: 4, name: 'TezorX', age: 12, job: 'Sience', budget: 3300 }
    ]
    // 1-FOR
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}
// 2- FOR OF
for (let person of users) {
    console.log(person)
}
// ForEach.............................................

// ForEach 3 param qabul qiladi
// 1- object misol uchun users ichidagi 1 object 
// 2- index arr lenth ga oxshab ishlaydi 
// array qabul qiladi bizdagi xolatda users
users.forEach(function(person, index, uArr) {
        console.log(person) // bu object 
        console.log(index) // bu index 
        console.log(uArr) // bu array 
    })
    // yangicha usuli ES6
users.forEach(user => console.log(user)) // ES6 

/// map xam Foreachga oxshab ishlaydi faqat bu yangi arr qaytaradi 

const newUsers = users.map(person => {
    return person // person.name or person.job nima kk bolsa shuni yatatib olamiz 
})

console.log("newUsers", newUsers)

const newUsers2 = users.map(person => `${person.name} (${person.age})`);

const ageCube = users.map(person => person.age ** 2);
console.log("newUsers2", newUsers2)

//FILTER 

// yoshi 18 dan kottalarni chiqarish uchun 
const adults = []
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        adults.push(users[i])
    }
}

console.log("adults", adults)
    // tepadagi user filterga analog faqat bu yerda filter methodni ishlatdik 
const adults2 = users.filter(person => {
    if (person.age >= 18) {
        return true
    }
})

//REDUCE 
// userlarni budgetini yigindisi ni chiqardik 
let allsum = 0
for (let i = o; i < users.length; i++) {
    allsum += users[i].budget
}
// tepadaginga analog
const amount = users.reduce((total, person) => total + person.budget, 0);
console.log("amount", amount)


//reduce yordamida obj yaratamiz obj key user id boladi 

const newObject = users.reduce((acc, person) => {
    acc[person.id] = person
    return acc;
})
console.log("newObject", newObject)

// SORTlar bn ishlaymiz 


const musers = ['Job', 'django', 'alex']
musers.sort()

console.log("musers.sort() ", musers.sort())

// numberlar bn sort qilamiz 
// bu raqamlar sort bolmaguncha 2 ta raqam olib solishtirib chiqadi prev va next ayradi 0 dan kotta chiqsa joyini almashtiradi 
const numbers = [3, 4, 12, 1, 23, 2, 21, 12, 123, 213, 21, 1]
numbers.sort((prev, next) => prev - next)
console.log(numbers)

// OBJECTLAR BN ishlaymiz 

users.sort((prevPerson, nextPerson) => prevPerson.age - nextPerson.age)

// FInd 
const secondUser = users.find(person => person.id === 2 && person.name === 'ledger');

console.log("secondUser", secondUser)

// some tru or false qaytaradi bu birorta bor bolsa xam shuni true qilib qaytaradi
const secondUser2 = users.some(person => person.age > 19)
console.log("secondUser2-> ", secondUser2)


// every misol uchun xammasini uchun tasir qiladi bizdagi xolatda userlar yoshi 18 da kotta bolsa true qaytaradi 
const secondUser3 = users.every(person => person.age > 18) // treu or false
console.log("secondUser3-> ", secondUser3)


const secondUserIndex = users.findIndex(person => person.name === 'ledger'); // bizga indexni qaytaradi 
console.log("secondUserIndex", secondUserIndex)
console.log("secondUserIndex", users[secondUserIndex])


// Qanday qilib chain ishlatishni koramiz 

// userslarni yoshi 25 dan katta bolganlarni yoshi ismi va budgetidan iborat new arr xosil qildik 

const seniors = users
    .filter(person => person.age >= 25)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: $ { person.budget }
        }
    })
    // userlardan oyligi 1000 dan katta bolaglarini oyligini total summasini chiqarib oldik 

console.log("seniors", seniors)
const amount = users
    .filter(person => person.budget > 1000)
    .reduce((total, person) => total + person.budget, 0)

console.log("amount", amount)

// bunday yozishni chain deyiladi 
// bundan korishimiz mumkinki biz arraylarni qanday onson yol bn filter qilshimi tekshirishim yangi arraylar yaratishimiz mumkinligini bilib oldik 
// bu bilganlarimizni amalda qollasak bizga ish faoliyatimizda qanchalik osonliq keltirib chiqarishini xis qilgan bolsangiz kk 

// =====================================================
// MAP, SET, WEAKMAP, WEAKSET larda nimalar qilsa boladi

const person = {
    name: 'Test',
    age: 12,
    job: 'Freelancer'
}
const entries = [
        ['name', 'test'],
        ['age', 12],
        ['job', 'Freelancer']
    ]
    // Object.entries(obj) objectni array qilib beradi 
console.log(Object.entries(obj)) // korishimi mumkin obj array bolganini

// Object.fromEntries arrayni object qilib beradi 
console.log(Object.fromEntries(entries)) // obj boldi bizni array 
    // Map qanday yaratiladi biz tayyor array bersak boladi yoki uzimiz yaratsak boladi Map([['name', 'Test']]) example
const map = new Map(entries)

console.log("map", map) // key va valuelarni korishimiz mumkin obj oxshagan 
    // endi biz bularni valuesini bilmoqchi bolsak odatda user.job qilib olar edik lekin map da uzini yonalishi bor 
console.log(obj.job) // eski usul
console.log(map.get('job')) // shundat olinadi mapdan jobni oldik xozir
    // Map ni oddiy obj dan farqi biz key ga lyuboy narsa bera olamiz 
    // yangi key va value yaratib koramiz 1-key 2- value 

map
    .set('newField', 33)
    .set(obj, 'Value in obj')
    .set(NaN, 'Not a number')

// endi chiqarib koramiz qoshgan key va valuelarimizni 

console.log(map.get(NaN))
console.log(map.get(obj))
console.log(map.get('newField'))
    // endi qanday delete qila olamiz shuni koramiz 

map.delete(NaN) // bu bizga boolean qaytaradi true or false 
    // rostdanxam biz uchirdikmi shuni tekshirish uchun 

console.log(map.has(NaN)) // agar uchgan bolsa false qaytaradi 

// map cart da nechta key borligini bilishimiz uchun esa 
console.log(map.size);
// mapni tozalash uchun 
map.clear()
    // yana tekshirib koramiz uzunligini 
map.size // 0 chiqadi ochgan bolsa 
    // yana qanday imkoiniyatlari borligini bilib olamiz 

for (let entry of map.entries()) {
    console.log('tag', entry)
}
// entries berish shartemas chunki bu uzi boglangan default shunioladi 
for (let [key, value] of map) {
    console.log('tag', key, value)
}

// faqat value larni olsak xam boladi 
for (let value of map.values()) {
    console.log('tag', value)
}
// keys lar oladigon bolsak
for (let key of map.keys()) {
    console.log('tag', key)
}
// forEachxam ishlata olamiz 
map.forEach((val, key, map) => {
        console.log(key, val)
    })
    // map yani tarjimasi karta yordamida qanday osonlik bilan biz array yarata olamiz shuni korib chiqamiz 

const array = [...map]
console.log("array", array)
    // yana 1 yoli 
const array2 = Array.from(map);
console.log("array2", array2)
    // PO SUTI MAP QIYINLASHTIRILGAN OBJECT BIZ OBJECT QILA OLAMIZ MAPDAN 

// mapdan obj qilamiz endi
const mapObj = Object.fromEntries(map.entries())
console.log("mapObj", mapObj)
    // PRIMER KELTIRIB OTAMIZ MAP QANDAY FOYDALANSAK BOLISHINI 

const users = [
    { name: 'Alex' },
    { name: 'Alexandra' },
    { name: 'Alexjon' }
]

const visits = new Map()

visits
    .set(usesr[0], new Date())
    .set(usesr[1], new Date(new Date().getTime() + 1000 * 60))
    .set(usesr[2], new Date(new Date().getTime() + 5000 * 60))

// endi userlar kirgan vaqtini bilib turamiz 

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[1])); // qachon kirganini bilib turamiz

///SET 

const set = new Set([1, 2, 3, 3, 3, 3, 3, 3, 3, 34, 5, 5, 5, 5, 5, 5, 6])

// biz qanday bersakxam dublicat bolmaydi unique xolatda saqlanadi
console.log("set", set)
    // qanday methodlari bor set ni 

set.add(12) // 1 ta qoshadigon bolsak 

set.add(23).add(213).add(23).add(12) // kop qoshsak shuday qoshsaxam boladi 

// biror bir raqam borligini tekshirish uchun 
console.log("set", set.has(4)) // true or false qaytaradi
console.log("set", set.size) // uzunligini bilish uchun 
console.log("set", set.delete(1)) // delete uchun
console.log("set", set.size) // yana check qilib koramiz 
console.log("set", set.clear()) // polnistiy tozalab yuborish uchun 
console.log("set", set.size) // check 

console.log(set.values()) // valuelarni korish uchun 
console.log(set.keys()) // keylarni korish uchun birxil qaytaradi chunki key value bita narsa setda 
console.log('tag', set.entries()) // buyerda key va val dubliruetsya shu sabab bir key va values ishlatsak 1 xil natija olitdik 

for (let key of set) {
    console.log('set', key)
}

// ================ unique qaytaradigon fn yaratamiz 
function uniqueValues(arr) {
    return [...new Set(arr)] // or Array.from(new Set(arr))
}
console.log('tag', uniqueValues([1, 2, 3, 3, 3, 3, 3, 3, 3, 34, 5, 5, 5, 5, 5, 5, 6]));


//WEAKMAP.......................................
// bu zborshik musirlarga tegishli 
const obj = { name: 'weakmap' }
const arr = obj
obj = null
    // biz obj yaratib uni arr ga solib obj uchirib yubordik lekin u arr da qoldi
console.log('tag', arr[0])
    // agar biz obj yaratib uni uchirib yuborsak lekin uni arr ga solib qoyganimizga utechka memory boladi joy yoqotamiz 
    // WeakMap bizga shunday xolatlarda yordam bera oladi 

const map = new WeakMap([
        [obj, 'obj data']
    ])
    // Weakmapda key faqat obj bola oladi xalos bu muhim 
    // uni qanday methodlari bor: get, set, delete, has

// biz tekshirib koramiz obj keylik data bormi 

console.log(map.has(obj)) // true chunki bor
    // valuesini olib koramiz 
console.log(map.get(obj)) // value in obj key

obj = null

console.log(map.get(obj)) // endi undefined keladi obj null bervorsak 

//============
// ENDI PRIMER KELTIRIB KORAMIZ 

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}
let jon = { name: 'jon' }
let doe = { name: 'doe' }
cacheUser(jon) // userni fn ga berib yuboramiz 
cacheUser(doe) // userni fn ga berib yuboramiz 

console.log(cache.has(jon)) // true 
console.log(cache.has(doe)) // true 
    // endi faraz qiling 10 minta user bor bolsa va men jon ni udalit qilsam 

jon = null
console.log(cache.has(jon)) // false 
console.log(cache.has(doe)) // true 
    // xotya men cache ga tegmadim lekin auto uchirib yuborildi bu zor cacheda keraksiz malumot yoq bu esa app tezligini oshiradi 
    // WeakSet  WeakMap ga oxshaydi farqi key faqat obj bolishi mumkin xalos
    // obj ochsa cache tozalanib ketadi 

const users = [
    { name: 'Alex' },
    { name: 'Alexandra' },
    { name: 'Alexjon' }
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])
    // bunda faqat user bor yoki yoqligini bilish mumkin xalos 

console.log(visits.get(users[0])) // true
console.log(visits.get(users[1])) // true
    // endi biror 1 userni udalit qilib koramiz 
users.splice(1, 1) // 2 ta param 1-index 2-nechta delete bolishi kk 
    // visits uzi auto tozalab yuboradi 
console.log(visits.get(users[0])) // true
console.log(visits.get(users[1])) // false


// Zaprosi na server fetch XmlHttpRequest Ajax 
// xozir biz fonoviy rejimda zaproslar jonatib qabul qilib olamiz 
// biror bir page ochsak bu xammasi get zaprosi agar forma submit qilsa bu post zapros 
const requestURL = 'https://jsonplaceholder.typicode.com/todos';

const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)
    //buni berdik endi buni jonatish kk 
    // consoleda networkda korsatib tushintiramiz 
xhr.responseType = 'json'
    // sendan avval bolishi shart [xhr.onload]
xhr.onload = () => {
        if (xhr.status >= 400) {
            console.error(xhr.response)
        } else {
            console.log(xhr.resoponse)
        }
        // jsonga ugirish kk buni endi  yoki tepada response type berib qoyishimiz kk 
        // console.log(JSON.parse(xhr.resoponse))
    }
    // endi error lar bn ishlaymiz 
xhr.onerror = () => {
    console.log(xhr.response)
}
xhr.send()
    // endi universal fn yozamiz get va post uchun xam togri keladigon 
    // bunda biz Promise dan foydalanamiz 
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.resoponse)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send()
    })
}
// biz endi method url berib yubaramiz va va promis qaytarishini bilib endi then da datani kutib olamiz 
sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))


// post qilib koramiz body qoshamiz default null qilib qoyamiz
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
            // bizga post qilganimizda response qaytishi uchun biz header qoshib qoyishimiz kk chunki bizda default xozri text/plain turgab 
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.resoponse)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}
const body = {
        name: 'test',
        age: 28
    }
    // endi bu boyni qanday berib yuboramiz oddiy send method ichiga bodyni bervoramiz
sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// endi consoleda status responselarni koramiz 
// xato borligini bilib biz oddiy text emas json qilishimiz kk sendga qaytamiz yana

// FETCH ni ishlatamiz 
// GET EXAMPle
function sendRequest2(method, url, body = null) {
    // fetch promise bn ishlaydi shugna biz then qilaolamiz
    return fetch(url).then(response => {
        return response.json()
    })
}

sendRequest2('GET', requestURL)
    .then(data => console.log(data))
    .cacht(err => console.log(err))

// POST EXAMPLE
function sendRequest2(method, url, body = null) {
    const header = {
            'Content-Type': 'application/json'
        }
        // fetch promise bn ishlaydi shugna biz then qilaolamiz
    return fetch(url, {
        method: method,
        body: JSON.stringgify(body),
        headers: header
    }).then(response => {
        if (response.ok) {
            return response.json()
        } // xatolik bolsachi degan joyiga 
        return response.json().then(error => {
            const e = new Error('Chto-to poshlo ne tak')
            e.data = error
            throw e
        })
    })
}

const body = {
        name: 'test',
        age: 28
    }
    // endi bu boyni qanday berib yuboramiz oddiy send method ichiga bodyni bervoramiz
sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))



// ==============================================
// REST AND SPREAD

const citiUzbekista = ['Toshkent', 'Andijon', 'Namangan', 'Fergana', 'Nukus', 'Qarshi', 'Buxoro']
const citiRussian = ['Moscow', 'Piter', 'Omsk', 'Sibir', 'Kiev', 'Sverlovskaya']

console.log(citiRussian);
// sorashingiz mumkin spreat nima deb bu aslida ... tadan iborat farqini koring
console.log(...citiRussian);

// sorashingiz mumkin bu menga nima beradi deb 

const newCities = [...citiRussian]
console.log(newCities)
    // 2 ta arr yordamida yangi arr yaratdik 
const arrall = [...citiRussian, ...citiUzbekista]

// orasiga yangi arr qoshvorsakxam boladi 
const arr32432 = [...citiUzbekista.
        "Dubai", ...citiRussian
    ]
    // avvallari qanday qilingan degan savol berishingiz mumkin 

const all3 = citiRussian.concat(citiUzbekista) // concatinirovat deyiladi

const citiRusObj = {
    Moscow: 40,
    Pitr: 30,
    Oms: 100
}
const citiRusObj2 = {
        Moscow: 440,
        Pitr: 340,
        Oms: 1400
    }
    //edni obj lar bilan ishlab koramiz 

console.log(...citiRusObj) // bunda bizda xato chiqadi chunki object solgani joy yoq bizda
console.log({...citiRussian })
    // concat qilish 
console.log({...citiRussian, ...citiRusObj2 })
    // buni merge xam deyilari yana bir nomi 
    // agar bir xil key li obj bolsa oxirdagi key xisoblani yani shu korinadi 

// Practies 


console.log(Math.max(5, 34, 12, 234)) // max topamiz
const numbers = [5, 34, 12, 234]
console.log(Math.max(numbers)) // error
console.log(Math.max.apply(null, numbers)) // old version 
console.log(Math.max(...numbers)) // speat
    // misol uchun bizda bir nechta div bor
    {
        /* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */
    }
const divs = document.querySelectorAll('div');
console.log(divs); // NODE list koramiz colection bu array emas 

const nodes = [...divs] // array ga aylantirib olamiz 
console.log(nodes)

// REST 
function sum(a, b) {
    return a + b
}
const numbers = [1, 2, 3, 4, 5]
console.log(sum(...numbers)) // 2 ta qabul qilganiga 1,2 tushadi
    // qolgan argumentlar tushmaydi 
    // REST
function sum(a, b, ...rest) {
    console.log(rest)
    return a + b
}

function sum(...rest) {
    console.log(rest) // xammasini olganini kora olamiz
        // return a + b
}

function sum(...rest) {
    console.log(...rest)
        // return a + b
}

function sum(...rest) {
    console.log(...rest)
    return a + b + rest.reduce((total, r) => total + r, 0)
}
// xammasini qabul qila olamiz reduce yordamida qolgan argumentalrni qoshib olamiz 

const a = numbers[0]
const b = numbers[1]
    // ES6 tepadiga analog identichno 
const [a, b] = numbers
const [a, b, ...other] = numbers // REST

const person = {
    name: 'Max',
    age: 20,
    city: 'MOSCOW',
    county: 'Russian'
}

const { name, age } = person; // birdaniga 2 ta item olamiz REST yordamida
console.log(name, age) // name va age degan variable yaraldi bizda 

const { name, age, ...address } = person; // qolgan itemlar addresga obj bolib tushadi 
console.log(name, age, address) // address obj boldi bizda
    //=============================================================
    // DESTRUKTRIZATSIYA

function calcValues(a, b) {
    return [
        a + b,
        a - b,
    ]
}

const result = calcValues(43, 12);
const sum = result[0]
const sub = result[1]
const [sum, sub] = result
// shuni oson olish yoli deskrutizatsiya
const [sum, sub] = result
// shunday qilib olsak xam boladi
const [sum, sub] = calcValues(42, 32);
// functionni kengaytiramiz endi
function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}
// misol uchun 1 va 3 javob kk bizga 
// , qoyib qoysak 1 step otib keyngisidan ishlaydi 
const [sum, , mult] = calcValues(42, 32);
const [sum, , mult, ...other] = calcValues(32, 65);

// 1 znacheniya misol uchun undefined 
function calcValues(a, b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}
const [a, b, s, d] = calcValues(43, 12) // b undefined 
    // biz shu xolatda default berib qoysak boladi
const [a, b = 'Ayrish yoq', s, d] = calcValues(43, 12)

/// OBJECT
const person = {
    name: 'Max',
    age: 20,
    address: {
        city: 'MOSCOW',
        country: 'Russian'
    }

}
const name = person.name
const { name, age } = person
// endi yoq narsani olib korsak 
const { name, age, car } = person
console.log(name, age, car) // car undefined
    // default berib qoysak boladi 
const { name, age, car = "No car" } = person
console.log(name, age, car) // No car
    // endi misol uchun bizda name variable bor shuni ishlata olmaymiz bunday xolatlarda
const { name: firtName, age, car = "No car" } = person // : qoyib siz yangi variable yaratib olsangiz bolaid 
console.log(firtName, age, car)
    // default berish 
const { name: firtName = 'No name', age, car = "No car" } = person
// vlojenniy xolatlarda qanday chiqaramiz 
const {
    name: firtName = 'No name',
    age,
    car = "No car",
    address: { city: homeTown, country }
} = person
console.log(firtName, age, car, homeTown, country)
const { name, ...info } = person
console.log(name, info);
//PRACTICES...................

function logPerson(per) {
    console.log(per.name, per.age)
}
logPerson(person)
    // DESk ishlatsak boladi
function logPerson({ name, age }) {
    console.log(name, age)
}

logPerson(person)

function logPerson({ name: firstName = "jon", age }) {
    console.log(firstName, age)
}

logPerson(person);
//================================================
// LOCAL STORAGE
// bu localniy xranilishi malumot saqlab tursa boladi bu yerda
const person = {
    name: 'Max',
    age: 20,
    address: {
        city: 'MOSCOW',
        country: 'Russian'
    }

}

const myNumber = 42;
// localS ga yozib qoyish 2 ta param beriladi 1- string bu key boladi 2- value yani nimani saqlamoqchimiz
localStorage.setItem('number', myNumber)
    // localS dan olish uchun getItem
const reer = localStorage.getItem('number')
console.log(reer) // null

// localS faqat string bn ishlashdi 42 xam bizda string xozir
// devtoolda korsatamiz qanday saqlangan i u faqat biz ishlitgan domenda ishlaydi bizdagi xolatda localhost:8080
// DELETE localS

localStorage.removeItem('number')
    // polnistiy tozalash localS

localStorage.clear()
    // nima foyda beradi localS bn bizga ishlash


localStorage.setItem('person', person)

//devtool person [object, object] nimaga chunki lS faqat string bn ishlaydi deb otgan edik 

// JSON.stringfy bu nima qilib beradi bu obj ni string qilib beradi
localStorage.setItem('person', JSON.stringify(person))


// endi olib koramiz obj lS dan 

const row = localStorage.getItem('person')

row.name = "Somsa"
    // odnako bu ozgarmadi chunki biz lS dan string oldik obj emas 
    // bunga ishonch xosil qilib korishimiz mumkin
console.log(typeof row)
    // endi orqaga qaytarish uchun biz Jparse qilishimiz kk 
console.log(JSON.parse(row)) // bizga kk xolatga keldi 
    // endi ozgartirib koramiz 
row.name = 'galati'

console.log(row)

// PRACTIES 
// bu local storage nimadir ozgarsa bizga console qilib beradi 
// lekin bir sharti 2 ta page bor bolsa bitasida ozgartirilsa 2-da korinadi ozgartirilgan pageda undefined keladi
window.addEventListener('storage', (event) => {
    console.log(event)
})

// Agar yangi array qaytarishi kere bo'lsa mana: 
Array.prototype.upperCase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

Array.prototype.lowerCase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toLowerCase();
    }
};

let arr = ['UpPeR', 'UpPer2', 'UpPer3'];
let arr2 = ['LoWeR', 'LoWeR2', 'LoWeR3'];
arr.upperCase();
arr2.lowerCase();

const sumArr = (...args) => {
    this.newArr = Array();
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            for (let j = 0; j < args[i].length; j++) {
                newArr.push(args[i][j]);
            }
        } else {
            console.error(args[i], 'Arguments are not arrays');
            this.newArr = null;
        }
    }

    return newArr;
};

let sum = sumArr(arr, arr2);

console.log(sum)
    //======================================================================================================================
    //================================================ TYPESCRIPT ==========================================================

const name: string = 'SayHello'
const isLoggenin: boolean = true
const isAuth: boolean = false

const int: number = 42

const number: float = 4.2

const big: number = 3e10

const message: string = "Hello Ts"

const numberArr: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArr2: Array < number > = [1, 2, 2, 2, 4, 5]

const words = string: [] = ['hello', 'JavaScript']

// Tuple
const contact: [string, number] = ['User', 21312]
    // uneversalniy qilish uchun 
let universal: any = 42;
universal = 'This is string'
universal = []

//=== FUNCTION
// agar fn xech narsa qaytarmasa void qoshib qoyiladi
function sayNameUser(name: string) void {
    console.log(name)
}

sayNameUser('Tester');
//Never
// qachon faqat error tashaydigon fn bolsa never berib qoyiladi
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {
        console.log('never')
    }
}
// uzimizni type alias desaxam boladi yaratib olsak 

type Login = string

const login: Login = 'admin'
const login2: Login = 2 // error type 
    // example id number string bolishi mumkin 


type ID = number | string
const id1: ID = 121
const id2: ID = '1231'
const id: ID = true // error type 

type SomType = string | null | undefined

// INTERFACE TAYPESCRIPT
interface React {
    readonly id: string // faqat uqisa boladi 
    color ? : string // xali aniq bolmagan type
    size: {
        width: number
        height: number
    }
}

const react1: React = {
    id: '1',
    size: {
        width: 20,
        height: 20
    },
    color: '#ccc'
}

const react2: React = {
    id: '113',
    size: {
        width: 20,
        height: 5
    }
}
react2.color = 'black'


/////////////////////////////////////////////////////////////////////
ITEM BOTYDAN QANCHA PX MASOFADA TURGANINI OLIB BERADI
const wrap = document.querySelector('#wrap').getBoundingClientRect();

console.log(wrap.top, wrap.left)

/////////////////////////////////////////////////////////////////////


let current_price = document.querySelector('#product_price')
let result_sum = parseInt(e.options[e.selectedIndex].dataset.price)
current_price = current_price.dataset.price
document.getElementById('product_price').textContent = parseInt(current_price) + result_sum

var date = new Date('6/29/2011 4:52:48 PM UTC');
date.toString() // LOCAT TIMEDA KORSATADI

//"serve": "vue-cli-service serve --port 5000"  vue-cli change default port 8080

{
    /* <body>
        <div class="container">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
               style="background-color:#f3f5f9;
                      background-position:center center;
                      background-size:contain;
                      background-repeat:no-repeat;
                      width:100%;
                      padding: 3rem;">
            <tbody>
            <tr>
                <td align="center">
                    <img src="https://unishop.uz/static/assets/img/logo/logo4.jpg" style="width: 200px; height: auto" alt="logo">
                </td>
            </tr>
            <tr>
                <td align="center">
                    {% autoescape off %}
                        <h3 class="card-title">{% trans 'Hi' %} {{ user.username }},</h3>
                        <br>
                        {% trans 'Please click on the link to confirm your registration,' %}
                    {% endautoescape %}
                </td>
            </tr>
            <tr>
                <td align="center" style="padding-top: 2rem;">
                    https://{{ domain }}{% url 'controller:activate' uidb64=uid token=token %}
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </body> */
}


{ /* KILL PORT IF WORKING PORT BUSY */ }
// npx kill-port 3000
{ /* END KILL PORT */ }

{ /* FAQAT TRUE BO'LGANLARINI QAYTARADI */ }
const array = [1, 34, 'aber', undefined, null]
console.log(array.filter(Boolean)) // [1, 34, "aber"]

// NUXT JS 
nuxt linkga active - class = 'active'
beramiz active ligini belgilash uchun
home page doim / borligi uchun active turadi unga esa attribute exect berib qo 'yamiz shunda muammo xal boladi  <
nuxt - link exect no - prefetch active - class = "active" > Home < /nuxt-link>

endi xar bir aloxida chunk qilib yuklanishi uchun esa no - prefetch attribute beramiz shunda xar bir page aloxida yuklanadi serverga nagruzka qilmay

detail route create qilish uchun misol
pages ichida user folder create qilamiz uni ichida index.vue user detail uchun esa _id.vue qilib yaratilishi shart

validate({ params }) {
        return /^\d+$/.test(params.id)
    } // raqamligini tekshirib true false qaytaradi

xar bir page uchun aloxida layout ishlata olamiz uning uchun example: empty.vue degan layout page yaratamiz
va qaysi page da ishlatmoqchi bo 'lsak 
export default {
    layout: 'empty'
}
qilib berib qo 'yamiz

nuxt comunity awesome nuxt deb googledan qidiramiz

npm install @nuxtjs / axios
after
nuxt.config js ga kirib
modules: [
        '@nuxtjs/axios'
    ]
    // Global ishlashi uchun

Using....
this.$axios.$get('https://test.ru')

agar biz datani frontendda yuklasak bu htmlda inspect qilganda ko 'rinmaydi agar serverda yuklab olib keyn clientga bersak bunda xammasi ko'
rinadi
serverda data yuklab olish example
export default {
    async asyncData({ $axios }) { // beckend da this ga dostup yoq shuning uchun axios ni berib yuboramiz
        const users = await $axios.$get('https://test.uz')
            // bu data elon qilingan users modulday ishlaydi 
        return { users }
    },
    data: () => ({
        users: []
    }),
    async mounted() {
        // bu clientda yuklab olish usuli
        this.users = await this.$axios.$get('https://test.uz')
    }
}


// USER DETAILDAGI EXAMPLE 

export default {
    validate({ params }) {
        return /^\d+$/.test(params.id) // pasams bu router params
    },
    // endi shu user datalarini backenda ssr qilib olish uchun
    async asyncData({ $axios, params }) {
        const user = await $axios.$get('https://test.uz/', +params.id)
    }
    endi user.name vaxo kazo qilib ishlata olamiz

}

// NUXT VUEX
users.js
    // FAQAT STATE FUNCTION QILINADI
export const state = () => ({
        users: []
    })
    // MUTATION ACTION ULAR OBJECT QILIB ELON QILINADI
export const mutations = {
    setUser(state, users) {
        state.users = users
    }
}

export const actions = {
    async fetch({ commit }) {
        const users = await this.$axios.$get('api')
        commit('setUsers', users)
    }
}

export const getters = {
    users: s => s.users
}

/// SSR da vuex bilan ishlash uchun maxsuz method bor malumot olish uchun
component ichida ishlatish example

export default {
    async fetch({ store }) { //store ga serverda dostup yo'qligiga store ni berib yuboramiz
        if (store.getters['users/users'].length === 0) {
            await store.dispatch('users/fetch')
                // agar store da data yoq bolsa unda data olish uchun action chaqiramiz action oldiga module name qo'yish shart
        }
    },
    computed: {
        users() {
            return this.$store.getters['users/users']
        }
    }
}
// qanday qilib router ximoyalash usuli middleware ichida auth.js yaratamiz

export default function({ store, redirect }) {
    // token borligini tekshirish uchun store ni olamiz 
    // agar token yo'q bolsa login ga yonaltirish uchun redirectnixam olavolamiz
    if (!store.getters.hasToken) {
        redirect('/login?message="Place authorization')
    }
}
// endi buni pagelarda ishlatish uchun 
// Qaysi bir page da ishlashi uchun 
export default {
    middleware: ['auth', 'test1', 'test2'],
    // nima deb nomlagan bo'lsak shu nom bilan middlewareni chaqiramiz bu yerda bir nechta chaqirib tekshuruvlar dan o'tkazsak bo'ladi

}

// yana bir imkoniyat vuex nuxt da 
action ichinda

export const actions = {
    nuxtServerInit({ commit, dispatch }) {
        console.log("Build")
            // bu faqat bir marta ishlay user domen name ni bosib kirishga uringanda shunda kerakli malumotlarni shunga o'xshash ishlarini qilib olish imkonini beradi
    }
    async fetch({ commit }) {
        const users = await this.$axios.$get('api')
        commit('setUsers', users)
    }
}

// CLOSE CURRENT TAB PAGE IN BROUSER
window.top.close();