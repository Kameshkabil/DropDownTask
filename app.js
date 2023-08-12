const names = document.querySelectorAll('.names');
const selectOpt = document.getElementById('select');
const listItems = document.getElementById('list-items')
names.forEach((val) => {
    val.addEventListener('click', function () {
        selectOpt.innerHTML = `${val.textContent}<span><i class="fa fa-caret-down" id='icon' aria-hidden="true"></i></span>`
        if (selectOpt.textContent == 'kotteswaran') {
            val.parentElement.remove()
            createNamesRole('EmberJS Developer');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else if (selectOpt.textContent == 'kameshkabil') {
            val.parentElement.remove()
            createNamesRole('ReactJS Developer');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else if (selectOpt.textContent == 'vigneshwaran') {
            val.parentElement.remove()
            createNamesRole('Tester');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else if (selectOpt.textContent == 'vijayaraj') {
            val.parentElement.remove()
            createNamesRole('Android Developer');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else if (selectOpt.textContent == 'lokeshwarababu') {
            val.parentElement.remove()
            createNamesRole('Cloud Engineer');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else if (selectOpt.textContent == 'naveenkumar') {
            val.parentElement.remove()
            createNamesRole('UI/UX');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else if (selectOpt.textContent == 'nagaraj') {
            val.parentElement.remove()
            createNamesRole('TesterJava selenium');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else if (selectOpt.textContent == 'dillikumar') {
            val.parentElement.remove()
            createNamesRole('Project Manager');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else if (selectOpt.textContent == 'ganesh') {
            val.parentElement.remove()
            createNamesRole('Devops Engineer');
            localStorage.setItem('empName', selectOpt.textContent)
        }
        else {
            val.parentElement.remove()
            createNamesRole('BackEnd Developer');
            localStorage.setItem('empName', selectOpt.textContent)
        }

    })

})


let container = document.getElementById('container');
let ul = document.createElement('ul');

function createNamesRole(roles) {
    let li = document.createElement('li')
    li.innerHTML = roles;
    ul.appendChild(li)
    container.appendChild(ul)

    li.addEventListener('click', function () {
        window.location.href = './page2.html'
    })
    let dropDown = document.getElementById('icon');
    dropDown.addEventListener('click', function () {
        li.style.display = 'none'
    })
    dropDown.addEventListener('dblclick', function () {
        li.style.display = ''
    })
}



