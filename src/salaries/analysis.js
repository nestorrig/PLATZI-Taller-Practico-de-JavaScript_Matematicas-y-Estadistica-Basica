// import { salaries } from "./salaries.js";

function findPerson(personId) {
    return salaries.find(person => person.id === personId);
}
function findPersonByName(personName) {
    return salaries.find(person => person.name === personName);
}

function mediaPerPersone(personId) {
    const jobs = findPerson(personId).jobs;
    const salaryHistory = jobs.map(element => {
        return element.salary
    })
    const medianSalary = PlatziMath.mediana(salaryHistory)
    console.log(salaryHistory);
    return medianSalary
}