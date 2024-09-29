import React from 'react'
import '../App1.css';

const ReactHome = () => {
  return (
    <div>
  <p>
  <h4>    1. JSX (JavaScript Syntax Extension): </h4>
    <ul>
    <li>JSX combines HTML and JavaScript, allowing you to embed JavaScript objects within HTML elements.</li>
    <li>It enhances code readability and simplifies UI development.</li>
    </ul>
    
    <h4> Example: </h4>
    <code>
    const title = "GeekforGeeks"; <br></br>
    const ele = Welcome to `title`;

    </code>

    <h4>2. Virtual DOM (Document Object Model):</h4>
    <ul>
    <li>React uses a virtual DOM, which is an exact copy of the real DOM.</li>
    <li>When there are modifications in the web application, React updates the virtual DOM first and then computes the differences between the real DOM and the virtual DOM.</li>
    <li>This approach minimises unnecessary re-rendering and improves performance.</li>
    </ul>

    <h4>3. One-way Data Binding:</h4>
    <ul>
    <li>React follows one-way data binding, where data flows from parent components to child components.</li>
    <li>Child components cannot directly return data to their parent components, but they can communicate with parents to modify states based on provided inputs.</li>
    </ul>

    <h4>4. Performance:</h4>
    <ul>
    <li>React’s virtual DOM and component-based architecture contribute to better performance.</li>
    <li>Separate components allow efficient rendering and faster execution.</li>
    </ul>
    
    <h4>5. Extension:</h4>
    <ul>
    <li>React has a rich ecosystem and supports various extensions.</li>
    <li>Explore tools like Flux, Redux, and React Native for mobile app development and server-side rendering.</li>
    </ul>
    
    <h4>6. Conditional Statements in JSX:</h4>
    <ul>
    <li>JSX allows writing conditional statements directly.</li>
    <li>Display data in the browser based on provided conditions.</li>
    </ul>
  
    <h4>Example:</h4>
    <code>
        const age = 12; <br></br>
        if (age &gt;= 10) <br></br>
        {
         `return <p>Greater than {age}</p>;`
        } <br></br>
        else <br></br>
        {
        `return <p>{age}</p>;`
        }<br></br>
    </code>
    
    <h4>7. Components:</h4>
    <ul>
    <li>React divides web pages into reusable and immutable components.</li>
    <li>Component-based development simplifies code organisation and maintenance.</li>
    </ul>
    
    <h4>Core React Concepts</h4>

    Here are some essential concepts to learn:
    
    <ul>
    <b>Props:</b> Components can receive data from parent components through props, enabling you to pass information and customize component behavior.<br></br>
    <b>State:</b> Components can manage their internal state using the useState hook. This state dictates the component’s appearance and behavior, and updates trigger re-renders.<br></br>
    <b>Lifecycle Methods:</b> React provides lifecycle methods like componentDidMount and componentDidUpdate that allow you to perform actions at specific stages of a component’s lifecycle.<br></br>
    <b>Conditional Rendering:</b> Control what gets displayed on the screen based on certain conditions using conditional statements within JSX.<br></br>
    </ul>

</p></div>
  )}
  
  export default ReactHome
