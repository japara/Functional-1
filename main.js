let person={
    name: 'mari',
    surname: 'japaridze',
    age: 35,

    talk:function(){
        return `my name is ${this.name}`
    },

    learning:{
        html: 'good',
        css: 'average'
    }
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

person.hobby ='swimming';
delete person.surname;

// console.log(person.name);
// console.log(person['age']);

console.log(person.talk());