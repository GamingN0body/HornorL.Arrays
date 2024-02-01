let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn Kubernetes'];
newYearsResolutions[0] = 'Learn from my mistakes' //changes the index
newYearsResolutions[1] = 'Get in good shape'
newYearsResolutions[2] = 'Get good grades'
console.log(newYearsResolutions.length);
console.log(newYearsResolutions.length -1);

const hobbies = [`martial art`, `football`, `fencing`] // use const to define not let or var
console.log(hobbies);
listItem = hobbies[0];
listItem = hobbies[1];
listItem = hobbies[2];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

let seasons= ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn'
console.log(seasons);
/*
Arrrays: stores information
        used to make lists, JS
            can store data types, the list will be ordered
        can store any data
        index
            number in array
            first item = 0
        elements
            strings
            number
            boolian
                to call an element
                    hoobies[0]
    Array Literal: 
        directly define the items
        ['element', element, element]
            if same element no need ,


*/

// next unit

let condiments = ['Ketchup', 'Mustard', 'Relish'] 
condiments[0] = "Mayo"
console.log(condiments);
console.log(condiments.length);

const utensils = ['fork','spoon','knife']
utensils[2] = 'Spork'
console.log(utensils);

const chores=[]
chores.push('dishes','walking the dog')
chores.pop()
console.log(chores);


/*
    var declared with let can be reassigned
    var declared by const can't be reassigned
    elements in array declared with const reamin mutable 
        change the contents but can't reassgin a new array
    .length is built into arrays
    push: .push()
        takes the name of the array followed by push 
        then u write the items you want in () 
            if myple things (,,,)
        changes the itemTracker
            known as "destructive array method"
    pop: .p()
        no arguments are taken
        returns the value of last element
        changes the intitail array
        when u need to mutate an array use this
    unshift()
        adds the first element
        returns the added element
    shift() 
        removes the first element
        returns the removed element
*/

//next unit

function range(){
    let rangeArray = ['1', '10']
}
console.log(range)
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]