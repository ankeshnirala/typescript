// primitive datatypes
// 1) number
// 2) string
// 3) boolean
// 4) null
// 5) undefined

const age: number = 22;
const _name: string = 'ankesh kumar';
const isMale: boolean = true;
const someValue: null = null;
const someOtherValue: undefined = undefined;
console.log(`
    name: ${_name}
    age: ${age},
    male: ${isMale}
    someValue: ${someValue}
    someOtherValue: ${someOtherValue}
`);


// others datatype
// 1) function
// 2) array
// 3) object

// array
const strArray: string[] = ['ankesh', 'govind']; 
const numArray: number[] = [56, 15, 96, 69];
const boolArray: boolean[] = [true, false];
const anyArray: any[] = ['ankesh', 22, true];

console.log(`
    **************

    ${strArray}
    ${numArray}
    ${boolArray}
    ${anyArray}
`);


// object
let person: {name: string, age: number, gender: string, phone: string} = {
    name: 'ankesh',
    age: 22,
    gender: 'male',
    phone: '8581933056'
};

console.log(`

    ****************

    Name:   ${person.name}
    Age:    ${person.age}
    Gender: ${person.gender}
    Phone:  ${person.phone}
`);
