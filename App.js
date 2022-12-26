//Printing Namste World using JavaScript

const container = document.getElementById("container");

const heading2 = document.createElement("h2");

heading2.innerHTML = "Namaste World From JavaScript!";

container.appendChild(heading2);

//Printing Namste World using React

//creating two headers using React

const heading3 = React.createElement("h3", 
{
    id: "title",
}, 
"Namaste From React1!");

const heading4 = React.createElement("h4", 
{
    id: "title",
}, 
"Namaste From React2!");

//creating a div to enclose both headers using react

const container2 = React.createElement("div", 
{
    id: "container2",
}, 
[heading3, heading4]);

//creating root in React

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering container using React

root.render(container2);






