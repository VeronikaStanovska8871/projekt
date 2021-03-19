const id = new URLSearchParams(window.location.search).get('id');
const deleteBtn = document.querySelector('.delete')
const form = document.querySelector('form');


const editEmployee = async (e) => {
    e.preventDefault();

    const doc = { 
        fname: form.fname.value,
        lname: form.lname.value,
        email: form.email.value,
        age: form.age.value,
        job: form.job.value
    }

    await fetch('http://localhost:3000/employees/'+id, {
        method: 'PUT',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json'}
    });
    window.location.replace('/index.html');
}
form.addEventListener('submit', editEmployee);

deleteBtn.addEventListener('click', async (e) => { 
    const res = await fetch('http://localhost:3000/employees/'+id, { 
        method: 'DELETE'
    })
    window.location.replace('/index.html');
})

window.addEventListener('DOMContentLoaded', () => editEmployee());