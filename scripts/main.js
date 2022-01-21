let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name. Blank names are not allowed!');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to Jason+ ' + 's' + ' website, ' + myName + '.'
      + 'If you would like to change your name, please hit the change name button below.';
    }
}

myButton.onclick = function() {
    setUserName();
}