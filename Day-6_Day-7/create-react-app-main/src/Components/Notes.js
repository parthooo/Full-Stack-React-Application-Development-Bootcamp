import React from 'react';

const Notes = () => {
    return (
        <div>
          <h1>React Philosophy:</h1>
          <ul>
            <li>Composition: We develop a project composing multiple small components</li>
            <li>Declarative Code: We use map instead of loop-"Step by step copd"</li>
            <li>Unidirectional Data flow: Data will flow on a single direction</li>
            <li>Just javascript</li>
          </ul>

          <h1>Must be remembered for JSX:- javaScript Syntex Extension </h1>
          <ul>
            <li>Must have parent element</li>
            <li>Must have closing tag inside JSX</li >
            <li>Must be careful of reserved javascript keyword for html/ for classname . Reserved keyword can not be used</li>
            <li>Dynamic value(expression) must be written within { }</li>
            <li>We can add Dynamic value / js expression inside curly braces { }</li>
            <li>We can not add statement function inside curly braces { }</li>
          </ul>

          <h1>Usestate</h1>
          <ul>
            <li>If we need to Track or change or update any value/data regularly, then we should use <b>usestate</b></li>
          </ul>

          <h1>When a component rerandering?</h1>
          <ul>
            <li>at the time of state update</li>
            <li>at the time of Force update</li>
          </ul>
        </div>
    );
};

export default Notes;