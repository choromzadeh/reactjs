import React from 'react';
import ReactDom from 'react-dom';

// const message = <h2>hello world!</h2>

// ReactDom.render(message,document.getElementById("root"));

//.........................................................................................................

let User1 = {
    firstName : "mohammad",
    lastName : "choromzadeh"
}

let formatName = (User1) =>  {
    return `${User1.firstName} ${User1.lastName} `
}

let element = (
    <h1>hello, {formatName(User1)}</h1> 
);

ReactDom.render(element,document.getElementById("root"));