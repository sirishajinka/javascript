    
"use strict"


let e1={name:'sirisha'}
let e2={name:'madhu'}

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(`${this.name} teaching javascript..`)
        let learn = function () {
            console.log(`${this.name} learning javascript from ${tnr.name}`)
        }
        console.log(`teaching ends`)
        return learn;
    }
}
let learnFunc = tnr.doTeach();
learnFunc.call(e1)
learnFunc.call(e2)