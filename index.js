const container = document.querySelector('.employees');

const renderEmployees = async() =>{
    let uri = 'http://localhost:3000/employees';
    const res = await fetch(uri);
    const employe = await res.json();
    console.log(employe);

    let template = '';
    employe.forEach(employee => { 
        template += 
        `<div class="employees bg-gray-100 rounded-3xl my-5 py-5 pl-5 pr-5 shadow-2xl flex flex-col">
        <h3 class="text-2xl bg-black text-white rounded-lg py-2 pl-2 pr-72 font-semibold">${employee.fname} ${employee.lname}</h3>
        <p class="mt-4">${employee.age} years old</p>
        <p> <span class="font-bold">Email address: </span>${employee.email}</p>
        <p class="mb-10"> <span class="font-bold"> Work as: </span>${employee.job}</p>
        <a class="text-white bg-black px-7 py-4 rounded-xl self-start" href="/edit.html?id=${employee.id}">EDIT</a>
        </div>`
    })

    container.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', () => renderEmployees());