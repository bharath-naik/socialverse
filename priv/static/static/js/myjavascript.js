// auto credentila policy interceptor
let loggedIn= -1;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let loginTry=5;

let add_loader = () => {
    var loader = '<div style="z-index:99999; height:100vh; width:100vw; background-color:white; margin:0; position:fixed; top:0; left:0"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif" style="margin:0; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); height:100px; width:100px"></div>';
    const loaderContainer = document.createElement('div');
    loaderContainer.setAttribute('id','loginLoader');
    loaderContainer.innerHTML = loader;
    document.body.appendChild(loaderContainer);
}
// REMOVE LOADER FUNCTION

let remove_loader = () => {
if(!document.getElementById('loginLoader')){
return
}
document.getElementById('loginLoader').remove();
}

window.onload = () => urlParams.has('username') && urlParams.has('password') &&  add_loader();

function clickLogin(){
if(document.querySelectorAll("button[type=submit]")[0] || document.getElementsByClassName('user-name')[0]){
 if(document.querySelectorAll("button[type=submit]")[0]) {
	document.querySelectorAll("button[type=submit]")[0].click();
	console.log('login button clicked');
	}else {remove_loader();}
} else if(loginTry > -1) {
loginTry = loginTry - 1;
setTimeout( ()=> clickLogin(), 500);
}else {remove_loader();}
}
function login(){
const constantMock = window.fetch;
 window.fetch = function() {
     // Get the parameter in {arguments}
     // Intercept the parameter here
	if ((arguments[0]).endsWith('/oauth/token') && urlParams.has('username') && urlParams.has('password')){
	const username = urlParams.get('username');
  	const password = urlParams.get('password');
	loginData = arguments[1].body;
	loginData.set('username',username);
	loginData.set('password',password);
	arguments[1].body = loginData;
}
    return constantMock.apply(this, arguments)
}
const fetch = window.fetch;
window.fetch = (...args) => (async(args) => {
    var result = await fetch(...args);
	if(result.url.endsWith('/oauth/token'))
	{
	loggedIn = loggedIn + 1;
	loggedIn && remove_loader();
	};
    return result;
})(args);
}

login();
clickLogin();

