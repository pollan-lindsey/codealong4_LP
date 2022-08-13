// Back to basics -- Forms in HTML
//1. submit a console.log('submitted')
//2. update our h2 on user input


// 1. DOM node (Form, input, etc)
let myForm = document.getElementById('myForm');
let userName = document.getElementById('name');
let header = document.getElementById('nameHeader');

// 2.handleChange()
let handleChange = (event) => {
  let updatedName = event.target.value; //gets whatever the user has entered
  header.innerText = `Welcome ${updatedName}`;
};

// handleSubmit('click')
let handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
}

// 3.addEventListener( )
myForm.addEventListener('submit', handleSubmit)
userName.addEventListener('input', handleChange); //(what it's listening for, how it will react to change)

// 4.event.preventDefault( )

// 5. What happens next?? YOU decide :D




















