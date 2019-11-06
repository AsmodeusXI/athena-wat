import React from 'react'; // if you omit a filepath, it looks in node_modules
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // COOL.

ReactDOM.render(
    <App />, // JSX that's compiled down by Babel to React.createElement (which needs a single element)
    document.getElementById('root'),
);

// const element = React.createElement(
//     React.Fragment,
//     null,
//     React.createElement("h1", null, "Test"),
//     React.createElement("p", null, "Another Test")
// );

// ReactDOM.render(
//     element,    // You can do this without JSX but why...
//                 // Thinking differently about "separation of concerns" in React.
//                 // Separation of "user functionality" across multiple technologies (JS, HTML, CSS)
//     document.getElementById('root'),
// );