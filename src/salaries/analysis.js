// import { salaries } from "./salaries.js";

function findPerson(personId) {
    return salaries.find(person => person.id === personId);
}
function findPersonByName(personName) {
    return salaries.find(person => person.name === personName);
}
function salaryHistory(personId) {
    const jobs = findPerson(personId).jobs;
    const salary= jobs.map(element => {
        return element.salary
    })
    return salary
}
function mediaPerPersone(personId) {
    // const jobs = findPerson(personId).jobs;
    const salary = salaryHistory(personId)
    const medianSalary = PlatziMath.mediana(salary)
    return medianSalary
}
function salaryProjetion(personId) {
    const jobs = findPerson(personId).jobs;
    const salary = jobs.map(element => {
        return element.salary
    })
    return increasesAndDecreases(salary)
}
function increasesAndDecreases(array) {
    const arrayb = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i > 0 ) {
            let differenceAbsolute = element - array[i-1]
            let differenceRelative = Math.ceil(( differenceAbsolute / array[i-1]) * 100)// esto me da el porcentaje
            arrayb.push(differenceRelative)
            console.log(differenceRelative)
        } 
    }
    let nextIncreaseOrDecrease = PlatziMath.average(arrayb)
    let newSalary = Math.ceil(array.at(-1) + (array.at(-1) * (nextIncreaseOrDecrease / 100)))
    console.log(array.at(-1), nextIncreaseOrDecrease);
    return newSalary
}