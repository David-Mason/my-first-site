let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/jack-hamilton-EP_OHkgn1JI-unsplash.jpg'){
        myImage.setAttribute('src','images/ed-van-duijn-7-bpTcGz5uM-unsplash.jpg');
    } else {
        myImage.setAttribute('src','images/jack-hamilton-EP_OHkgn1JI-unsplash.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeader.textContent = 'Welcome to frogtopia ' + myName; 
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeader.textContent = 'Welcome to frogtopia ' + storedName;
}

myButton.onclick= function() {
    setUserName();
}