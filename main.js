// let person={
//     name: 'mari',
//     surname: 'japaridze',
//     age: 35,

//     talk:function(){
//         return `my name is ${this.name}`
//     },

//     learning:{
//         html: 'good',
//         css: 'average'
//     }
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// person.hobby ='swimming';
// delete person.surname;

// // console.log(person.name);
// // console.log(person['age']);

// console.log(person.talk());

//////////////////////////////////////////
/////////////////////////////////////////
// სავარჯიშო 8:

// ჯავასკრიპტში ობიექტი არის ჩვეულებრივი ცვლადი, რომელიც შედგება თვისებებისა და მეთოდებისგან. ობიექტში ინახება key და value წყვილი. მასში ასევე შესაძლებელია ფუნქციის, ობიექტის, მასივის შენახვაც. ობიექტი მოქცეულია ფიგურულ ფრჩხილებში;

// 1.	შექმენით ცარიელი ობიექტი სახელად rectangle;

let rectangle ={};

// 2.	პირველ დავალებაში შექმნილ ცარიელ ობიექტში ჩასვით (გამოაცხადეთ) მართკუთხედის სიგრძისა და სიგანის თვისებების key-ები და მიანიჭეთ შესაბამისი მნიშვნელობები (value) სურვილისამებრ; კონსოლში დაბეჭდეთ ობიექტის სახელი;

rectangle.width=30;
rectangle.height=40;

console.log(rectangle);

// 3.	შექმენით ობიექტი, სახელად person, რომელსაც აქვს firstName, lastName, age ველები შესაბამისი მნიშვნელობებით. შემდეგ კონსოლის საშუალებით დაბეჭდეთ მხოლოდ მნიშვნელობები; 

let person={
    firstName:'saxeli',
    lastName: 'gvari',
    age: 30
}

console.log(Object.values(person));

// 4.	ზემოთ შექმნილ person ობიექტში ჩაამატეთ კიდევ ერთი property სახელად city;

person.city='qalaqi';

// 5.	შექმენით ცარიელი ობიექტი frontEndDeveloper, რომლის property-ები იქნება -  name: „Tom”, surname: “Cruise”, age: 50 და skills: [“HTML”, “CSS”, “JAVASCRIPT”]. შემდეგ, შეცვალეთ name-ს და surname-ს value-ები საკუთარი სახელით და გვარით. ბოლოს, წაშალეთ age;

let frontEndDeveloper={
    name: 'Tom',
    surname: 'Cruise',
    age: 50,
    skills: ['HTML', 'CSS', 'JAVASCRIPT']
}

frontEndDeveloper.name='David';
frontEndDeveloper.surname='Japaridze';
delete frontEndDeveloper.age;

console.log(frontEndDeveloper);

// 6.	შექმენით ობიექტი salaries, რომელშიც key იქნება სამი ადამიანის სახელი, ხოლო value ხელფასის რაოდენობა (მაგ.: nana: 1500;). ამავე ობიექტში ჩაამატეთ ფუნქცია salariesSum (მანამდე შეამოწმეთ აქვს თუ არა ეს მეთოდი ობიექტს), რომელიც გამოითვლის სამივე ადამიანის ხელფასების ჯამს. ჯამი შეამოწმეთ კონსოლის საშუალებით;

let salaries = {
    gio: 1500,
    nana: 2000,
    revaz: 1200,

    salariesSum: function(){
        return this.gio+this.nana+this.revaz
    }
}

console.log(salaries.salariesSum());

// 7.	შექმენით ობიექტი student და განუსაზღვრეთ თვისებები: სახელი, გვარი, ფაკულტეტი, კურსი. შემდეგ, კონსოლში გამოიტანეთ მათი მნიშვნელობები ჩანაწერის ორივე ფორმით (წერტილის ნოტაციისა და მასივის ფრჩხილების გამოყენებით); 

let student ={
    name: 'saxeli',
    surname: 'gvari',
    faculty: 'fakulteti',
    course: 'kursi'
}

console.log(student.name);
console.log(student['faculty']);

// 8.	მეშვიდე დავალებაში შექმნილი ობიექტიდან კონსოლში გამოიტანეთ ცალ-ცალკე value და key მასივების სახით. შემდეგ კი დაბეჭდეთ თითოეული წყვილი (value და key) მასივის სახით;

console.log(Object.keys(student));
console.log(Object.values(student));

// 9.	შეამოწმეთ, არის თუ არა იმავე student ობიექტში ჩანაწერი მისი ფაკულტეტის შესახებ (ანუ შეიცავს თუ არა ობიექტი სიტყვა „ფაკულტეტს“) და თუ არის, კონსოლში გამოიტანეთ შეტყობინება: „შეიცავს/არ შეიცავს“;
if(Object.keys(student).includes('faculty')){
    console.log('Sheicavs')
    }else{
        console.log('ar sheicavs');
    };
if(student.faculty){
    console.log("arsebobs")
}
// 10.	შეამოწმეთ, არის თუ არა student ობიექტის აღწერისას მის მნიშვნელობებს (value) შორის ჩანაწერი „მოცეკვავე“ და გამოიტანეთ შესაბამისი შეტყობინება;

if(Object.values(student).indexOf('mocekvave')>=0){
    console.log('sheicavs mocekvaves');
}else{
    console.log('ar sheicavs mocekvaves');
};

// 11.	const unknown = {
//                profession: “dancer”, 
//                country: “Georgia”
//         }
// შექმენით ფუნქცია, რომელსაც ჩაამატებთ მოცემული ობიექტის მეთოდად და რომელიც დაგიბრუნებთ შემდეგ წინადადებას: „I am dancer and I live in Georgia”.

const unknown = {
                   profession: 'dancer', 
                   country: 'Georgia',

                   talk: function(){
                    return `I am a ${this.profession} and i live in ${this.country}`
                   }
            }

// 12.	var country = {
// cities: [
//          {name: “ქუთაისი“},
//          {name: “მცხეთა“},
//          {name: “ბათუმი“}
//          ]
// მოცემული მასივიდან for ციკლის საშუალებით გამოიტანეთ ქალაქები და კონსოლში დაბეჭდეთ წინადადება: „საქართველოს ქალაქებია: ქუთაისი, მცხეთა, ბათუმი“. 

country = {
    cities: [
             {name: 'ქუთაისი'},
             {name: 'მცხეთა'},
             {name: 'ბათუმი'}
             ]
            }

    let qalaqebi=[];

    for(let i=0; i<country.cities.length; i++){
        qalaqebi.push(Object.values(country.cities[i]));
    }
    console.log(`saqartvelos qalaqebia: ${qalaqebi}`);

// 13.	
var user = {
names:"Tom",
age: 26
}

// მოცემული ობიექტიდან კონსოლში დაბეჭდეთ წყვილებად (key, value) for in () მეთოდის გამოყენებით;

for(elem in user){
    console.log(elem, user[elem]);
}

// 14.	

let arrayObjects = [
    {
        name: "eka",
        age: 20
    },
    {
        name: "dato",
        age: 30
    },
    {
        name: "taso",
        age: 15
    }
];

// შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (ანუ იმას, რომლის age value არის უმცირესი);

// let axalgazrda = function (obj){
//     let young = 10000;
//     for(let i=0; i<Object.keys(obj).length; i++){
//        if(young>arrayObjects[i].age){
//         young=arrayObjects[i]
//        }
//     }console.log(young);
// }
let axalgazrda = function (array){
    let young = 10000;
    let answer;
    for(let i=0; i<array.length; i++){
       if(young>array[i].age){
        young=array[i].age;
        answer=array[i];
       }
    }console.log(answer);
}

axalgazrda(arrayObjects);

// 15.	შექმენით ობიექტი, რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName, lastName, monthlyIncome (რიცხვითი მნიშვნელობა) და getAnnualIncome (მეთოდი, რომელიც აბრუნებს წლიურ შემოსავალს);

let ragac={
    firstName:'saxeli',
    lastName: 'gvari',
    monthlyIncome: 1500,

    getAnnualIncome: function(){
        return this.monthlyIncome*12;
    }
}

console.log(ragac.getAnnualIncome());