const selectMedianItem = document.getElementById('Median--options');
const selectMedianYear = document.getElementById('Median--years');
const buttonMedian = document.getElementById('Median-salary--button');
const resultMedianSalary = document.getElementById('Median-salary-result');

const selectProjectionItem = document.getElementById('Projection--options');
const buttonProjection = document.getElementById('Projection-salary--button');
const resultProjection = document.getElementById('Projection-salary-result');

const spanTitle = document.getElementById('median-salary-title')
const spanCompanies = document.getElementsByClassName('company-span')
const spanIds = document.getElementsByClassName('id-span')

//COMPANIES

buttonCompanies.addEventListener('click', () => printProjectionsCompanies(selectMedianItem))
buttonCompanies.addEventListener('click', () => printProjectionsCompanies(selectProjectionItem))
function printProjectionsCompanies(selectTag) {
    selectTag.innerHTML = ''
    selectTag.name = 'company'

    const companiesKey = Object.keys(companies)
    for (const company of companiesKey) {
        let optionCompany = document.createElement('option')
        optionCompany.value = company
        optionCompany.innerText = company

        selectTag.append(optionCompany)
    }

    spanTitle.classList.remove('inactive')
    for (const span of spanIds) {
        span.classList.add('inactive')
    }
    for (const span of spanCompanies) {
        span.classList.remove('inactive')
    }
    
    selectMedianYear.style.display = 'inline-block'
    printYearsCompanies()

    resultMedianSalary.innerText = ''
    resultProjection.innerText = ''

    selectMedianItem.addEventListener('click', printYearsCompanies)
    buttonMedian.removeEventListener('click', medianEmployees)
    buttonProjection.removeEventListener('click', projectionEmployees)
    buttonMedian.addEventListener('click', medianCompanies)
    buttonProjection.addEventListener('click', projectionCompanies)
}
printProjectionsCompanies(selectMedianItem, selectMedianYear)
printProjectionsCompanies(selectProjectionItem)

function printYearsCompanies() {
    selectMedianYear.innerHTML = ''
    for (const option of selectMedianItem) {
        if(option.selected) {
            const yearsKey = Object.keys(companies[option.value])
            // console.log(yearsKey);
            for (const year of yearsKey) {
                optionYear = document.createElement('option');
                optionYear.value = year
                optionYear.innerText = year

                selectMedianYear.append(optionYear)
            }
        }
    }
}

function medianCompanies() {
    let company;
    let year;
    let result;

    for (const option of selectMedianItem) {
        if (option.selected) {
            company = option.value
        }
    }
    for (const option of selectMedianYear) {
        if (option.selected) {
            year = option.value
        }
    }
    console.log([company, year]);
    result = medianSalariesPerCompanieAndYear(company, year)
    resultMedianSalary.innerText = `The median salary of the company ${company} in ${year} was $${result}`
}
function projectionCompanies() {
    let company;
    let result;

    for (const option of selectProjectionItem) {
        if (option.selected) {
            company = option.value
        }
    }
    console.log([company]);
    result = projectionPerCompanie(company)
    resultProjection.innerText = `The median projected salary for the year 2024 of the company ${company} is $${result}`
}
//EMPLOYEES

buttonEmployees.addEventListener('click', () => printProjectionsEmployees(selectMedianItem))
buttonEmployees.addEventListener('click', () => printProjectionsEmployees(selectProjectionItem))
function printProjectionsEmployees(selectTag) {
    selectTag.innerHTML = ''
    selectTag.name = 'employee'

    for (const salarie of salaries) {
        let optionCompany = document.createElement('option')
        optionCompany.value = salarie.id
        optionCompany.innerText = salarie.id

        selectTag.append(optionCompany)
    }

    spanTitle.classList.add('inactive')
    for (const span of spanIds) {
        span.classList.remove('inactive')
    }
    for (const span of spanCompanies) {
        span.classList.add('inactive')
    }

    selectMedianYear.style.display = 'none'

    resultMedianSalary.innerText = ''
    resultProjection.innerText = ''

    selectMedianItem.removeEventListener('click', printYearsCompanies)
    buttonMedian.removeEventListener('click', medianCompanies)
    buttonProjection.removeEventListener('click', projectionCompanies)
    buttonMedian.addEventListener('click', medianEmployees)
    buttonProjection.addEventListener('click', projectionEmployees)
}

function medianEmployees() {
    let employeeID;
    let employeeName;
    let result;

    for (const option of selectMedianItem) {
        if (option.selected) {
            employeeID = parseInt(option.value)
        }
    }
    for (const salarie of salaries) {
        if (salarie.id === employeeID) {
            employeeName = salarie.name
        }
    }
    console.log([employeeID]);
    result = mediaPerPersone(employeeID)
    resultMedianSalary.innerText = `The median salary of the employee ${employeeName} is $${result}`
}

function projectionEmployees() {
    let employeeID;
    let employeeName;
    let result;

    for (const option of selectProjectionItem) {
        if (option.selected) {
            employeeID = parseInt(option.value)
        }
    }
    for (const salarie of salaries) {
        if (salarie.id === employeeID) {
            employeeName = salarie.name
        }
    }
    console.log([employeeID]);
    result = projectionPerPersone(employeeID)
    resultProjection.innerText = `The median projected salary for the year 2024 of the employee ${employeeName} is $${result}`
}