import React from 'react'
import '../App1.css';

const Introduction = () => {
  return (
    <div>
  <p>
    This React tutorial will help beginners understand React concepts and how to implement them to build a performant React application.

    <h4>Prerequisites</h4>
    
    To follow this course, we expect you to be familiar with the following topics:
    <ul>
    <li>HTML and CSS</li>
    <li>JavaScript fundamentals like the object, arrays, conditionals, and so on</li>
    <li>JavaScript ES6 features like the arrow functions, object destructuring, etc.</li>
    </ul>
    <h4>What is React?</h4>

    React (sometimes called React js) is a JavaScript library that originated at Facebook for building interactive user interfaces or UIs. It lets developers create sizeable web apps or complex UIs by integrating a small, isolated code snippet.

    <h4>Getting Started with React</h4>

<h5>Installation and Environment Setup</h5>

Before embarking on your React journey, ensure you have a suitable development environment set up. <br></br>

Here’s a roadmap to get you started: <br></br>

<ul>
<li><b>Node.js and npm:</b> Download and install Node.js as it provides the runtime environment for JavaScript code execution. </li>
<li><b>npm (Node Package Manager)</b> is bundled with Node.js and is used to manage project dependencies.</li>
<li><b>Create React App (CRA):</b> Using Create React App (CRA) to establish a new React project with minimal configuration. 
<br></br>
Run 
<blockquote>
  <b>npx create-react-app</b> <br>
  </br><b>my-react-app </b>
</blockquote>
in your terminal, replacing my-react-app with your desired project name.</li>
</ul>
</p>
    </div>
  )
}

export default Introduction
