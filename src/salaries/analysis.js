// import { salaries } from "./salaries.js";
//? Analisis personal
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
    let lastSalary = array.at(-1);
    let nextIncrease = PlatziMath.mediana(upsAndDowns)
    let finalIncrease = lastSalary * nextIncrease;
    let nextSalary = Math.ceil(lastSalary + finalIncrease);
    console.log({
        array, upsAndDowns, lastSalary, nextIncrease,
    });
    return nextSalary
}
//? Analisis Empresarial
const companies = {}
for (const person of salaries) {
    for (const job of person.jobs) {
        if (!companies[job.company]) {
            companies[job.company] = {};
        }
        if(!companies[job.company][job.year]){
            companies[job.company][job.year] = [];
        }
        companies[job.company][job.year].push(job.salary)
    }
}
const enterprises = {}
salaries.map(person => {
    for (const job of person.jobs) {
        const company = job.company;
        const year = job.year;
        const salary = job.salary
        if (!enterprises[company]) enterprises[company] = {};
        if (!enterprises[company][year]) enterprises[company][year] = [];
        enterprises[company][year].push(salary)
    }
})
console.log({companies, enterprises});
function medianSalariesPerCompanieAndYear(companie, year) {
    if(!companies[companie]) {
        console.warn("La compañia no existe")
    }else if(!companies[companie][year]) {
        console.warn("La compañia no dio salarios ese año")
    }else {
        return PlatziMath.mediana(companies[companie][year])
    }
}
function projectionPerCompanie(companie) {
    if(!companies[companie]) {
        console.warn("La compañia no existe")
        return
    }
    const salaries = companies[companie];
    const medianSalaryByYear = [];
    for (const key in salaries) {
        let median = PlatziMath.mediana(salaries[key]);
        medianSalaryByYear.push(median)
    }
    return increasesAndDecreases(medianSalaryByYear)
}
//? Analisis general
function generalMedian(){
    const medianPerson = salaries.map(person => mediaPerPersone(person.id))
    // console.log(medianPerson);
    return PlatziMath.mediana(medianPerson)
}
function topTenMedian(){
    const medianPerson = salaries.map(person => mediaPerPersone(person.id));
    const orderedList = PlatziMath.ordenarLista(medianPerson);
    const topTenPeople = orderedList.length / 10;
    const limit = orderedList.length - topTenPeople;
    const medianTopTen = PlatziMath.mediana(orderedList.slice(limit, orderedList.length));
    return medianTopTen
}