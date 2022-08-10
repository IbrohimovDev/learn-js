//      var member = "Programmer"; //data type string
// 		var age = 34;              //data type number
// 		var isMarried = true;      // data type boolean


// 		  ////////////////////////\
// 		 /   below is object    /  \
// 		////////////////////////----\
// 		 |  	 |            |     |\
// 		 |		 |   +--+--+  | ----|
// 		 |		 |   |  |  |  | |-|-|
// 		 |		\ /  +--+--+  | |  ~|
//       |////   v  ///////////=---`

// 		let programmer = {
// 			name: 'Muhammadyusuf',
// 			age: 17,
// 			job: 'programmer',
// 			skills:'web developer , web designer, UI & UX designer , app developer , graphic designer',
// 			country:'Uzbekistan',			
// 		}

// 		//ma'lumotlarni yangilash yoki o'zgartitish uchun


// 		programmer.name = "Muhammadyusuf";
// 		programmer.job = "IT specialist";
// 		programmer['age'] = `18+`;
// 		console.log(programmer);

// 		////////////////////
// 		//// Massivlar /////
// 		//// Arrays ////////
// 		////////////////////

// 		let selectedColors =['white ', 'grey'];
// 		selectedColors[2] = '+'+998330072003;
// 		console.log(selectedColors[2]);
// 		console.log(selectedColors.length) ;   


// 		/////////////////////
// 		///function////////
// 		////////////////

// function greet(){

// }


// 		console.log(member)
// 								   //////////////////////////////////////////////////
// 								  ////// # RULE #                                  /
// 								 /////////////////////                            /
//                              /                                                /
// 		    				   //   2 ta stringni ,                             /
//                            //  string va numberni"+" orqali bog'lansa 	   /
//                           //  ular shunchaki yonma-yon qilib ko'rsatiladi ,/
//                          //   Qo'shilmaydi                                /
//                         //                                               /
//                        ////////////////////////////////////////////////// 		


// var isJoined =true;
// var customer = (isJoined) ?'you have 20% sale' : 'you have 5% sale';
// console.log(customer);
//=======================================================================
// let defaultColor = 'black';
// let currentColor = 'blue';
// let selected = currentColor||defaultColor;
// console.log(selected);
//=======================================================================
// let person = {
// 	name:'Abdulloh',
// 	age:22,
// }
// console.log(person.job || 'ishsiz');
//===========================================================================

//    isOpen = false;
//    !!isOpen = //// isOpen to'g'r emasligi to'g'ri emasmi? degani bu;

//======================================================================
// let a;
// let b = null;
// let c = undefined;
// let d = 4;
// let e = 'five';
// let f = a||b||c||d||e;   
// console.log(f);
//=============================================================
// let color1 ="oq";
// let color2 = "qora";
// let smth = color1;
// color1 =color2;
// color2=smth;
// console.log(color1);
// console.log(color2);
//===============================================================
// for(let i=1;i<=10;i++){
// 	if(i%2===1)console.log(i+" -toq son hisoblanadi ");
// }
////================================================================
// const person = {
// 	name:'johnson',
// 	age:27,
// 	job:'any work'                          //////////////////////////////////
// }									   /     person objeyekning         /
// for(let x in person){				  / ichidagi xossalarini log qiladi/
// 	console.log(x);						 //////////////////////////////////
// }
/////////////////////////////////////////////////////
// const someone={
// 	first:'black',
// 	second:'lightblue',					////////////////////////////////////
// 	third:'yellow'					   /  obyekt ichidagi xossalarini     /
// }								  /    value lari  bn .log qiladi    /
// for(let x in someone){			 ////////////////////////////////////
// 	console.log(x, someone[x]);
// }
/////////////////////////////////////////////////////////////////////////////////////
// function getMax(a,b){

// 	return(a>b)? a:b;
// }
// console.log(getMax(8.1,8));
////////////////////////////////////////////////////////////////////////////////////
// console.log(isLandscape(900,500));
// function isLandscape(width,height){
// 	return(width>height);

// }
///////////////////////////////////////////////////////
// let input = fizzBuzz(7)
// console.log(input);
// function fizzBuzz(input){
// if(typeof input !== 'number'){
// 		return NaN;
// 	}else if (input%5===0&&input%3===0){
// 		return 'fizzBuzz';
// 	}else if (input%5===0){
// 		return 'fizz';
// 	}else if(input%3===0){
// 		return'Buzz';
// 	}else{
// 		return input;
// 	}
//}
////////////////////////////////////////////////////////////
// const LIMIT= 70;
// const MAX_POINT = 12;
// const KM_PER_POINT = 5;
// const point = 5;
// checkSpeed(125);
// function checkSpeed(speed){
// 	if(speed<LIMIT+point)
// 		console.log('okiee,dokiee');
// 	else{
// 		const points = Math.floor((speed-LIMIT)/KM_PER_POINT); 
// 		if(points >= MAX_POINT){
// 			console.log('Document will be taken');
// 		}else {
// 			console.log(points)
// 		}
// 	}
// }
//////////////////////////////////////////////////////////////////////////////////
// console.log(sum(12));

// function sum(limit){
// 	let sum = 0;

// 	for(let i=0;i<=limit;i++ ){
// 		if((i%3===0)||(i%5===0))
// 			sum+=i;
// 	}

// 	return sum;
// }

////////////////////////////////////////////////////////////////////////////////////
// let car = {
// 	name:'Chevrolet Camaro',
// 	year:'2019',
// 	probeg:10000,
// 	price:70000,
// }
// function showProperties(obj){
// 	for(let x in car){
// 		if(typeof car[x] ==='string'){
// 		console.log(x, car[x]);
// 	    }
// 	}
// }
// console.log(showProperties(car));
/////////////////////////////////////////////////////////////////////////////////



// var something = [50,60,70];
// var anotherthing = something[0];
// console.log(anotherthing);
//
//                                 ////////////////////////////////////\
//                                /                                  /  \     
//                               /  bu holatda birinchi 'index'ni   /    \     
//                              /   console'ga 50'ni log' qiladi   /      \          
//                             /                                  /        \     
//                            ////////////////////////////////////          \          	
//
/////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////\
//             /                                    /  \			
//		      /    array'ga index qo'shish uchun   /    \  
//           /     '.push()dan foydalanamiz'      /      \
//          /
//        ------------------------------------
//        /                                
//       /  bu xolata '.push()' array'ni oxiriga
//      /  element qoshadi     
//     /                                    /         \       
//    //////////////////////////////////////          \       

// var array = ['john',123 , 'heart'];
// var addToArray = array.push('something'); 
//  console =  ['john',123 , 'heart','something'];

//////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////      /\
//             /                                         /  \			
//		      /    array'ga index qo'shish uchun        /    \  
//           /     '.unshift()dan foydalansa ham'      /      \
//          /        bo'ladi
//          /
//        ------------------------------------
//        /                                
//       /  bu xolata '.unshift()' array'ni boshiga
//      /  element qoshadi     
//     /                                    /         \       
//    //////////////////////////////////////          \       

// var array = ['john',123 , 'heart'];
// var addToArray = array.unshift('something'); 

//  console =  [something','john',123 , 'heart'];

//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////\
//           /                                    /  \        
//          /   array'dan bror narsani o'chirib  /    \        
//         /    uchun '.pop()'dan foydalanamiz  /      \
//        /                                    /        \          
//       / -------------------------------------         \
//      /                                    /            \       
//     /    bu holatada .pop()funksiyasi    /              \          
//    /    oxirgi elementni olib tashlaydi /                \          
//   /                                    /                  \        
//  //////////////////////////////////////--------------------\


// var array = ['john',123,'apple'];
// var remove = array.pop();
// console.log(array);


/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////\
//            /                                    /  \        
//           /   array'dan bror narsani o'chirib  /    \        
//          /    uchun '.shift()'dan ham foyda-  /      \
//         /   sa bo'ladi
//        /                                    /         \          
//       / -------------------------------------          \
//      /                                    /             \       
//     /  bu holatada .shift()funksiyasi    /               \          
//    /  birinchi elementni olib tashlaydi /                 \          
//   /                                    /                   \        
//  //////////////////////////////////////--------------- -----\


// var array = ['john',123,'apple'];
// var remove = array.pop();
// console.log(array);
////////////////////////////////////////////////////////////////////////////////////////


// var array = ['somthing',120,'johnson'];
// array.shift();    // boshidagi 'something' elementini olib tashladi
// array.unshift('muhammadyusuf'); // boshiga 'muhammadyusuf' elementini qo'shdi
// console.log(array);

////////////////////////////////////////////////////////////////////////////////////////////

// var shopping = [['milk',3],['egg',10],['bread',3]];

//   this is shopping list using nested array

//////////////////////////////////////////////////////////////////////////////////////

/////////////////  THE DIFFERENCES BETWEEN GLOBAL AND FUNCTION SCOPES /////////////////////



/////////////////////////////////////////////////////////\
//              /                                                       /  \
//             /  function scope'da 'var' kalitiSIZ o'zgaruvchi e'lon  /    \
//            /  qilinsa u AVTOMATIK tarzda Global scope'ga aylanib   /      \
//           /   qoladi                                              /        \
//          /                                                       /          \
//         //////////////////////////////////////////////////////////-----------\



//////////////////////////////////////////////////////////////////////////////////////

/////////  tub sonlarni qaytarb beruvchi funksiya  ///////////////////

// console.log(showPrimeNumbers(20));
// function showPrimeNumbers(limit){
// 	for(var number = 2;number<=limit;number++){
// 		var isPrime=true;
// 		for(var factory =2;factory<number;factory++){
// 			if(number%factory===0){
// 				isPrime=false;
//               break;
// 			}
// 		}if (isPrime)console.log(number);
// 	}
// }

///////////////////////////////////////////////////////////////////////////


// const circle = {
// 	radius: 1,
// 	draw(){
// 		console.log('doira');
// 	}
// }

// for(let key in circle){
// 	console.log(key , circle[key]);
// }

///////////////////////////////////////////////////////////////////////////////////


// for(let ans of Object.keys(circle)){   ////////////////////////////////////
// 	console.log(ans);                    /                                  /
// }                                    /  for of loopida xossalarini .log /
//                                     /  uchun Object.keys(argument)     /
//                                    /    metodidan foydalaniladi       /
//                                   /                                  /
//                                  ////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

// for(let entry of Object.entries(circle)){
// 	console.log(entry);                      ////////////////////////////////////////////
// }                                        /                                          /
//                                         /   Obejct.entries esa key value peer      /
//                                        /   ko'rinshidagi massivni qaytaradi       /
//                                       /                                          /
//                                      ////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

// if ('xossa' in object)console.log('there is');

//                              ////////////////////////////////////////////////////////
//                             /                                                      /
//                            /    'in' dan object ichida shunday xossa bor yoki     / 
//                           /          yo'qligini tekshirsa bo'ladi                /
//                          /                                                      /
//                         ////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////


///////////////////--------------OBJECTLARDAN CLON OLISH-------------////////////////////////

// let circle = {
// 	radius: 1,
// 	draw(){
// 		console.log('doira');
// 	}
// }


// for(let key in cirle){
// 	console.log()
// }


















//var x = 1,                 
// 		    y = 2;
// 		var z = x + y;

// 		console.log(z)

// 		var muhammadyusufWeight = 50;
// 		var muhammadyusufHeight = 1.72;
// 		var muhammadyusufBmi = muhammadyusufWeight / (muhammadyusufHeight * muhammadyusufHeight)

// 		console.log(muhammadyusufBmi)



// 		var voterAge = 14;
// 		var votingAge = 18;

// 		if ( voterAge  > votingAge ){
// 			console.log("You can vote!")
// 		}else{
// 			 console.log("Go home!")
// 		}

// 		var myScore = prompt("Enter your score");
// 		if (myScore >= 90 ) {
// 			alert("Barakalla  siz judayam eqillisiz!");
// 		}else if ( myScore < 90 && myScore >= 80 ){
// 			alert("Yaxshi  siz sal kam eqillisiz!");
// 		}else if ( myScore < 80 && myScore >=70 ){
// 			alert("Siz eqli pastsiz!");
// 		}else if ( myScore < 70 && myScore >=60 ){
// 			alert("Hom kalla!");
// 		}else{
// 			alert("Ukam san voshshem aqlin past!");
// 		} 


// var smth = 17;
// var x = 5;
// while( x < 17){
// 	console.log("Something");
// 	x++;
// 	console.log(x)
// }

// for(var i = 10; i >= 0; i--){
// 	console.log(i)
// } 
// for (var e = 0; e <= 10; e = e + 3) {
//     console.log(e)
// }
// for(var MrIm = 17; MrIm >= 0; MrIm--){
// 	console.log(MrIm)
// }

// var twenty = 20;
// var nole = 0;
// while(nole < 20){
// 	console.log('nole');
// 	nole=nole+2;
// 	console.log(nole)
// }

// for(var smth = 1; smth < 10; smth++){
// 	if(smth == 9){
// 		console.log("it's nine");
// 	break;
//     }
// 	if(smth == 7){
// 		console.log("Seven skipped");
// 	continue;
// 	}
// 	console.log(smth)
// }

//  let 
// for(var calendar = 1; calendar < 30; calendar++){
// 	if(myBirth == 10){
// 		console.log("14 days left for myBirthDay! :)")
// 		continue;
// 	}
// 	if(calendar==25){
// 		console.log("Today's myBirthDaaaaaay!!!!!!!!!!!!!")
// 		break;
// 	}
// 	console.log(calendar)
// }
//=====================================================================
// var bill = 10.25 + 3.99 + 7.15;
// var tip = bill * 0.15;
// var total = bill + tip;
// console.log(total.toFixed(2)+"$");

//=============================================================================
// var shirtWidth = 19;
// var shirtLength = 28;
// var shirtSleeve = 8.21;

// var size = "NA";


// /*
//  * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
//  * [18, 28, 8.13, 'S']
//  * [19.99, 28.99, 8.379, 'S']
// 	* [26, 33, 9.63, '2XL']
//  * [27.99, 33.99, 10.129, '2XL']
// */
// if((shirtWidth >= 18 && shirtWidth <20) && (shirtLength = 28 && shirtLength <29) &&(shirtSleeve >= 8.13 && shirtSleeve<8.38)){
// 	size = "S";
// }
// else if((shirtWidth>= 20 &&shirtWidth <22) && (shirtLength = 29 && shirtLength <30) && (shirtSleeve >=8.38 && shirtSleeve <8.63)){
// 	size = "M";
// }
// else if((shirtWidth>= 22 && shirtWidth<24) && (shirtLength=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88)){
// 	size = "L";
// }
// else if((shirtWidth>= 24 && shirtWidth<26) && (shirtLength=31 &&shirtLength<33) &&(shirtSleeve>=8.88 && shirtSleeve<9.63)){
// 	size = "XL";
// }
// else if((shirtWidth>= 26 && shirtWidth<28) && (shirtLength=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13)){
// 	size = "2XL";
// }
// else if((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve = 10.13)){
// 	size = "3XL";
// }
// else{
// 	size = "NA"
// }
// console.log(size);
//===========================================================================

// var isGoing = true;
// var color = isGoing ? ("green") : ("red");
// console.log(color);
//===========================================================================
// var eatsPlants = true;
// var eatsAnimals = true;

//  // * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
//  // * - (true, true, omnivore)
//  // * - (false, true, carnivore)
//  // * - (true, false, herbivore)
//  // * - (false, false, undefined)
// var category = (eatsPlants&&eatsAnimals)? 'omnivore':(!eatsPlants&&eatsAnimals)? 'carnivore' : (eatsPlants&&!eatsAnimals)? 'herbivore' : "undefined";
// 
// console.log(category);
//=============================================================================

// var tier = "nsfw deck";
// var output = "You’ll receive "

// switch (tier) {
//   case "deck of legends":
//     output += "a custom card, ";
//   case "collector's deck":
//     output += "a signed version of the Exploding Kittens deck, ";
//   case "nsfw deck":
//     output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
//   default:
//     output += "one copy of the Exploding Kittens card game.";
// }

// console.log(output);

//====================================================================

// var time = 60;
// while(time>=0){
//     if(time === 50){
//         console.log("Orbiter transfers from ground to internal power");
//     }else if(time===31){
//         console.log("Ground launch sequencer is go for auto sequence start");
//     }else if(time===16){
//         console.log("Activate launch pad sound suppression system");
//     }else if(time===10){
//         console.log("Activate main engine hydrogen burnoff system");
//     }else if(time===6){
//         console.log("Main engine start");
//     }else if(time===0){
//         console.log("Solid rocket booster ignition and liftoff!");
//     }else{
//         console.log("T-"+ time +" seconds");
//     }time--;
// }

// var customer = false;
// var person = isJoined =true? 'you have 50 % discount' : 'you have 5 % discount' ;
// console.log(isJoined); 

// function getMax(a,b){
// 	if (a>b)
// 		return a;
// 	else 
// 		return b;
// }
// console.log(getMax(18 * 2,18 * 3));


// function getMax(a,b){
// 	return (a>b)? a : b;
// }
// console.log(getMax(3,5));



// console.log(isLandscape(12,7))
// function isLandscape(width , height){
// 	return (width>height);

// }

// speed limit -- 70km/soat
// 5 km/soat ------- 1point
// 12 point ---------- your driving certificate will be taken



//////////  SPEED TEST //////////////


// const LIMIT = 70;
// const EACH_POINT = 5;
// const MAX_POINT = 12;
// const points = 5;
// checkSpeed(130);
// function checkSpeed(speed){
// checkSpeed(55);
// function checkSpeed(){
// 	if(speed < LIMIT + point){
// 		console.log('You are a good driver!');
//      return;
// 	}
// 		const points = Math.floor((speed - LIMIT) / );
// 		if(points >= MAX_POINT ){
// 			console.log('Your driving document will be taken!');
// 		}else{
// 			console.log(points);
// 	}

// 
/////////////// SUCCESSFULLY !  (^_^) //////////////////// 

///////////// mini project /////////////
//  console.log(sum(10));
//  function sum(limit){
//  	let sum = 0;

// 	for(let i=0;i<=limit;i++){
// 		if((i%3==0)||(i%5===0))
// 			sum +=i;
// 	}
// 	return sum;
// }

///////////// successfully //////////////


///////////// Build a traingle //////////

// function makeLine(length) {
//     var line = "";
//     for (var j = 1; j <= length; j++) {
//         line += "* ";
//     }
//     return line + "\n";
// }

// function buildTriangle(x){
// 	var triangle = '';

// 	for(var t = 1 ; t <= x ; t++){
// 		triangle = makeLine(t)
// 	}
// 	return triangle;
// }
// console.log(buildTriangle(10));


/////////////// SUCCESSFULLY /////////////////////////


// var catSays = function(max) {
//   var catMessage = "";
//   for (var i = 0; i < max; i++) {
//     catMessage += "meow ";
//   }
//   return catMessage;
// };

// // helloCat funksiya e’loni qayta chaqiruvchiga murojaat qilmoqda
// function helloCat(callbackFunc) {
//   return "Hello " + callbackFunc(3);
// }
// // qayta chaqiruvchi funksiya sifatida catSays o‘tkazilmoqda

// console.log(helloCat(catSays));
//=================================================================











// let color1 = 'oq';
// let color2 = 'qora';
// let color3 = color1;
// color1 = color2;
// color2 = color3;
// console.log(color1);
// console.log(color2);

// function isLandscape(width, height) {
//     return (width > height)
// }
// console.log(isLandscape(500, 700))  // qavs true false qaytaradi



// function fizzBuzz(input) {
//     if (typeof input !== 'number') {
//         return NaN
//     } else if (input % 3 === 0 && input % 5 === 0) {
//         return 'FizzBuzz'
//     } else if (input % 3 === 0) {
//         return 'Fizz'
//     } else if (input % 5 === 0) {
//         return 'buzz'
//     } else {
//         return input
//     }
// }
// console.log(fizzBuzz(13));





//

// const limit = 70;
// const point_per_km = 5;
// const max_point = 12;

// function checkSpeed(speed) {
//     if (speed < limit + point_per_km) {
//         console.log('you are good driver')
//         return; //bu holatda funksiyadan chiqib ketadi
//     }
//     const result = Math.floor((speed - limit) / point_per_km);
//     if (result >= max_point) {
//         console.log('your document will be taken')
//     } else {
//         console.log(result)
//     }

// }
// console.log(checkSpeed(130))





// console.log(sum(10))

// function sum(input) {
//     let sum = 0;

//     for (let i = 1; i <= input; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i
//         }
//     }

//     return sum

// }



// let car = {
//     name: 'Hundai',
//     model: 'VaxshiyModel',
//     year: 2020,
//     price: 10000
// }

// function showProperties(Object) {
//     for (let value in Object) {
//         if (typeof Object[value] === 'string') {
//             console.log(value, Object[value])
//         }
//     }
// }
// console.log(showProperties(car))





// const marks = [77, 94, 88, 68, 66];
// let avarageNum = 0;
// calculateAvr(marks)

// function calculateAvr(array) {
//     for (let i = 0; i < array.length; i++) {
//         avarageNum += array[i] / array.length
//     }
//     checkScore(avarageNum)
// }

// function checkScore(score) {
//     if (avarageNum <= 50) return 'F';
//     if (avarageNum > 51 && avarageNum <= 60) console.log('D')
//     if (avarageNum > 61 && avarageNum <= 70) console.log('C')
//     if (avarageNum > 71 && avarageNum <= 80) console.log('B')
//     else console.log('A')
//     return;
// }






// function showPrimeNums(num) {
//     for (let i = 2; i <= num; i++)
//         if (isPrime(i)) console.log(i)
// }

// function isPrime(i) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             return false;
//         }
//     }
//     return true
// }

// showPrimeNums(20)




///////////////// w yurib chiqish


// ######################### for in uslubi


// let ball = {
//     radius: 5,
//     drag: function() {
//         console.log('it is temporary disabed')
//     }
// }


// for (let each in ball) {
//     console.log(each, ball[each])
// }




////////////////// ########### for of uslubi



// for (let one of Object.entries(ball))
//     console.log(one)



//////////////////  If statement yordamida objectni tekshirish

// if ('radius' in ball) console.log('dookie')




////////////////////////////////// Objectlardan  'Clone' olish


//////////////////// ####### for in uslibi

// let ksero = {}
// for (let each in ball) {
//     ksero[each] = ball[each]
// }
// console.log(ksero)



///////////////////// ########## Object.assign (Obejct classining assign metodi)uslubi yordamida


// let raisBuva = Object.assign({}, ball)
// console.log(raisBuva)


/////////////////////// ##################  spread operator yordamida

// let paint = {...ball }
// console.log('yeah it\'s working ', paint)







// let laptop = {
//     name: 'Lenovo',
//     model: 'T490s',
//     processor: 'intel Core i9 9thGen',
//     RAM: '20GB DDR4',
//     storage: {
//         HDD: '1000',
//         SSD: '500'
//     },
//     display: 32,
//     onPower() {
//         console.log(`I'm strong Laptop!`)
//     }
// }
// console.log(laptop)
// 
// 
// 
// function createLaptop(name, model, processor, ram, storage, display) {
//     return {
//         name,
//         model,
//         processor,
//         ram,
//         storage,
//         display,
//         onPower() {
//             console.log('powerOn')
//         }
//     }
// }
// let laptop = createLaptop('Lenovo', 'ThinkPadBook', 'i9 9thGen', '32gbDDR4', '1TB', 32);
// console.log(laptop)

// function Factory(name, model, processor, ram, storage, display) {
//     this.name = name;
//     this.model = model;
//     this.processor = processor;
//     this.ram = ram;
//     this.storage = storage;
//     this.display = display;
//     this.draw = function() {
//         console.log('Hey!');
//     }
// }
// let consFunc = new Factory('Lenovo', 't420s', 'i9 9 thgen', '4ddr4', '1tb', 32)
// console.log(consFunc)





///////////////////////////////////// Numberdagi tartibsiz array itemlarini tartiblash


// let numbers = [2, 8, 5, 3, 6]
// let sorted = numbers.sort()
// console.log(sorted)


////////////////////////////////////  harflar bo'yicha tartiblash


// let courses = [
//     { id: 1, name: 'aAvaScript crash course' }, ////  PS. Nomlar atayin xato yozilgan
//     { id: 2, name: 'Jue.js and Nuxt.js crash course' },
//     { id: 3, name: 'Vython Django crash course' }
// ]

// courses.sort((upper, lower) => {
//     let upperName = upper.name.toLowerCase()
//     let lowerName = lower.name.toLowerCase()
//     if (upperName < lowerName) return -1
//     if (upperName > lowerName) return 1
//     return 0
// })
// console.log(courses)



/////////////////////////////////////////// Musbat sonlarni tekshiravuza !

//   every metodi 1 dona manfiy son bo'lsa hammasini FALSE qaytaradi


// let isAllPositive = [2, 6, 4, -3, 1]
// console.log(numbers.every(number => number >= 0))


// some metodi 1 dona musbat bo 'lsa hammasini true qaytaradi


// let atLeastOnePositive = [2, 6, 4, -3, 1]
// console.log(numbers.some(number => number >= 0))


// filter metodi Har qanday buyuruq bo'yicha filter qiladi
// In this case it's filtering only positive numbers , you can change anything you want! 

// let numbers = [2, 6, -4, -3, 1]
// console.log(numbers.filter(number => number >= 0))







// ////////////////////////////// example  starts ///////////////////////////////////


// const data = [' red ', ' yellow ', ' blue ', ' orange ', ' coral ', ' purple ', ' black ', ' white ', ' green ', ' gray ', ' brown ']
// const autocomplete = document.querySelector('#autocomplete')
// const resultsHtml = document.querySelector('.prediction')

// autocomplete.oninput = () => {
//     let userInput = autocomplete.value
//     let result = data.filter(item => item
//             .includes(userInput))
//         .map(item => `<li> ${item} </li>`)
//         .join('') // bu  method chainning usulini standart ko'rinishi

//     // let result = data.filter(item => item.includes(userInput)).map(item => `<li> ${item} </li>`).join('') // bu qisqaroq yo'li

//     // bu maydalangan yo'li
//     // let mapped = result.map(item=> `<li> ${item} </li>`)
//     // let removeComma = listItem.join('')
//     // resultsHtml.innerHTML = removeComma

//     resultsHtml.innerHTML = result
//     if (userInput === '') resultsHtml.innerHTML = ''
// }

// resultsHtml.onclick = function(event) {
//     let setValue = event.target.innerText
//     autocomplete.value = setValue
//     resultsHtml.innerHTML = ''
// }

////////////////////////// example ends ////////////////////////////////////


///////////////////// example starts ///////////////////////////////////////

// const users = [

//     {
//         name: 'Abdulla',
//         age: 17,
//         job: 'Full stack developer',
//         income: 1000
//     },
//     {
//         name: 'Eshmat',
//         age: 24,
//         job: 'Software Engineer',
//         income: 7000
//     },
//     {
//         name: 'Abdurahmon',
//         age: 39,
//         job: 'Data Scientist',
//         income: 15000

//     }
// ]

// function newFilter(array) {

//     let currentUser = null
//     for (let i = 0; i < array.length; i++) {
//         if (i == 0) currentUser = array[i].income
//         if (i != 0) {
//             if (currentUser < array[i].income) currentUser = array[i].income
//         }
//     }
//     return currentUser

// }
// console.log(newFilter(users))


/// for example eng katta income'ni chiqarish kerak




/////////////////////////////// example ends /////////////////////////////////

///////////////////////////////////////////// arrayFromRange funksiyasi 1-parametridan 2-parametrigacha bo'lgan sonlarni qaytaradi 

// let number = arrayFromRange(1, 7)
// console.log(number)

// function arrayFromRange(min, max) {
//     let result = []
//     for (let i = min; i <= max; i++) {
//         result.push(i)
//     }
//     return result
// }


////////////////////////////////////////////// includes metodining qo'lbola usuli

// const numbers = [1, 2, 3, 4, 5]
// let exist = includes(numbers, 3)
// console.log(exist)

// function includes(array, elementToFind) {
//     for (let element of array) {
//         if (element === elementToFind)
//             return `
// yeah!there 's ${element} in ${array}`
//     }
//     return false
// }
//


////////////////////////////////////////////////////// move funksiyasi
// let numbers = [1, 2, 3, 4, 5]
// let output = move(numbers, 0, 1)
// console.log(output)umbers, 0, 1)
// console.log(output)umbers, 0, 1)
// console.log(output)umbers, 0, 1)
// console.log(output)




// let obj = ['e','b','b']
// let result = [obj[0]]

// obj.forEach(item => {
//    if(item){
//      result.every(elem => elem != item) ? result.push(item) : false
//    }
// })

// console.log(result)




// const vowels = ['b', 'c', 'd', 'f', 'g','h','j','k','l','m','n','q','p','r','s','t','v','w','x','z','y']
// function countVowels(string) {
//    let count = '';
//    for (let i of string) {
//       if (vowels.includes(i)) {
//          count+=i
//       }
//    }
//    console.log(count)
//    return count
// }
// countVowels('this is just a test')


// multplication table

// let first = +prompt('Enter number that you gonna know until it')
// let second = +prompt('How many times it should be multiplied')
// console.log('first :'+ first,"second :"+second)
// for(let i = 2 ; i <= first ;i++){
//    for(let j = 1 ; j <= second ; j++){
//       console.log(i+ '*'+ j +'=' +i *j )
//    }
// }



// multplication table ended  



// convert km to miles

// function kmToMiles(km) {
//    for(let i = 0 ; i < 1;i++){
//       if (isNaN(km) || km === 0) {
//          console.log('enter a integer or greater than 0')
//          kmToMiles(+prompt('Enter km for converting to mile'))
//          return
//       }
//    }
//       let miles = km / 1.609
//       console.log(km + "km is " + miles.toFixed(2) + "miles")
// }
// kmToMiles(+prompt('Enter km for converting to mile'))



// reverse array's items 

// let vowels = ['b', 'c', 'd', 'f', 'g','h','j','k','l','m','n','q','p','r','s','t','v','w','x','z','y']

// function reverseArr(arr) {
//    let newArr = []
//    for (let i = arr.length - 1; i >= 0; i--) {
//       newArr.push(arr[i])
//    }
//    return newArr
// }

// console.log(reverseArr(vowels))


// reverse array's items end 


///  NOT SOLVED

// let arr = [7, 1, 4, 2, 5, 3]
// let newArr = []

// function sortToLow(array){
//    for(let i = 0 ; i < array.length ; i++){
//       for(let k = array.length - 1 ; k>= 0;k--){
//          if(array[i] > array[k])
//          newArr.push(array[k])
//       }
//    }
// }
// console.log(sortToLow(arr))
// console.log(newArr)7


// let array = [2,5,-6,1,-2]
// let newArray = []

// function removeNegative(array){
//    for(let k = 0 ; k < array.length ; k++){
//       if(array[k] < 0){
//          array.splice(array[k],1)
//       }
//    }
// }

// removeNegative(array)
// console.log(array)