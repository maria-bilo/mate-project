ReactDom.render(<h1>Hello, React!</h1>, document.getElementById("root"))

ReactDom.render(<p>Hi, my name is Maria</p>, document.getElementById("root"))

/*we are creating a container in html to render the data from here into there*/

ReactDom.render(<ul>
    <li>Thing 1</li>
    <li>Thing 2</li>
    <li>Thing 3</li>
</ul>, document.getElementById("root"))

function MainContent() {
    return (
        <h2>I am learning React</h2>
    )
}

/*
ReactDom.render(<div>
    <Navbar />
    <MainContent/>     //example of containability
</div>, document.getElementById("root"))

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)  */

//JSX - Javascript Xml

//React requires to put one childinto single container, not a number of sibling in a line

/*We just need to wrap them into a container*/
/*
ReactDom.render(
    page, 
    document.getElementById("root")
)

//We can also create the variable containing the list of HTML elements:

const page = (
    <div>
    <hi className="header">This is JSX</hi><p>This is a paragraph</p>
    </div>
)

*/

//STATIC HTML PAGE
/*
const page = (
    <div>
    <h1>Page 1</h1>
    <h2>Page 2</h2>
    </div>
)

ReactDom.render(document.getElementById("root"))
*/

import React from "react"
import ReactDom from "react-dom"

/*
const page = (
    <div>
        <img src="./react-logo.png"></img>
    </div>
)

ReactDom.render(page, document.getElementById("root")) */

function Page() {
    return (
        <div>
        <ol>
        <li></li>
        <li></li>
        </ol>
        </div>
    )
}