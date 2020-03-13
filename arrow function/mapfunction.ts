const numberToString = (n: number) => { return n.toString() }
const stringedNumbers = [1,4,6,10].map((i)=>numberToString(i))
const stringedNumbersT = [1,4,6,10].map(numberToString)

interface AnyObjectButMustHaveName {
    name:string
    [key: string] : any
}
const printFormattedName = (input: AnyObjectButMustHaveName) => {}
printFormattedName({name: "joey"})
printFormattedName({name: "joey", age:23})
const boolOrNumberFunction = (input: boolean | number) => {}
boolOrNumberFunction(true)
boolOrNumberFunction(23)