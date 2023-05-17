
// Below is the way creating and editing HTML element with the help of javascript.

// const  heading = document.createElement("h1");
// heading.innerHTML = "Welcome Home";
// const root = document.getElementById("root");
// root.appendChild(heading);

//Below is with the help of React and cdn.

// const heading = React.createElement("h1" , {} , "Namaste React By Akshay Saini");
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(heading);

// suppose you want to show this in root element.
// <div id="container" > 
//    <h1 id="title">Heading 1 </h1> 
//    <h1 id="title">Heading 2 </h1> 
// </div/>  


const heading1 = React.createElement("h1" , {id:"title"} , "Heading 1");
const heading2 = React.createElement("h1" , {id:"title"} , "Heading 2");
const container = React.createElement("div" , {id:"container"} , [heading1 , heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);