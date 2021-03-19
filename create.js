const form = document.querySelector('form');


const createEmployee = async (e) => {
    e.preventDefault();

    const doc = { 
        fname: form.fname.value,
        lname: form.lname.value,
        email: form.email.value,
        age: form.age.value,
        job: form.job.value
    }

    await fetch('http://localhost:3000/employees', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json'}
    });
    window.location.replace('/index.html');
}
form.addEventListener('submit', createEmployee);