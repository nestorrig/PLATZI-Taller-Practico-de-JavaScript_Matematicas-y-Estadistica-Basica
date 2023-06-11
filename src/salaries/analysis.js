// import { salaries } from "./salaries.js";

function findPerson(personId) {
    return salaries.find(person => person.id === personId);
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
function projectionPerPersone(personId) {
    const jobs = findPerson(personId).jobs;
    const salary = jobs.map(element => {
        return element.salary
    })
    return increasesAndDecreases(salary)
}
function increasesAndDecreases(array) {
    const upsAndDowns = [];
    for (let i = 1; i < array.length; i++) {
        const actualSalary = array[i];
        const pastSalary = array[i - 1]
        let increse = actualSalary - pastSalary;
        let percentage = ( increse / pastSalary)// esto me da el porcentaje
        upsAndDowns.push(percentage)
    }
    console.log(upsAndDowns)
    console.log(array);
    let nextIncrease = PlatziMath.average(upsAndDowns)
    let nextSalary = Math.ceil(array.at(-1) + (array.at(-1) * (nextIncrease)))
    console.log(array.at(-1), nextIncrease);
    return nextSalary
}