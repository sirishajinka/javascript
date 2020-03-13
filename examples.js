//1.
// let compact = [0,1,false,2,'',3,NaN]
// let truthy = []
// for(let inc=0; inc<compact.length ; inc++){
//     if(compact[inc]!=false && compact[inc]!=0 && compact[inc]!='' && compact[inc]!=null && compact[inc]!='NaN' && compact[inc]!=undefined){
//          truthy.push(compact[inc])
//     }
// }
// console.log(truthy)

// falsy values are false , 0 , '' , null , NaN , undefined

// let out = compact.filter(ele => ele)
// console.log(out)

//functional style

//2.difference

let arr1 = [1,2]
let arr2 = [2,3]
let out = []
for( let inc =0 ; inc<arr1.length ; inc++){
    let n = arr1[inc]
    let isExists = arr2.includes(n)
    if(!isExists){
        out.push(n)
    }
}
console.log(out)

