const logonForm = document.querySelector('#logon-form');
const logonInput = document.querySelector('#logon-form input');
const greeting = document.querySelector('h2#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
  event.preventDefault();
  logonForm.classList.add(HIDDEN_CLASSNAME);
  const username = logonInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintGreeting(username);
}

function paintGreeting(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `안녕하세요 ${username}님`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  logonForm.classList.remove(HIDDEN_CLASSNAME);
  logonForm.addEventListener('submit',onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}