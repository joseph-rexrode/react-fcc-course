import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
    href: "https://google.com",
    target: "_blank"
    },
    children: "Click me to visit Google"
}

// this is just HTML essentially

const AnotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

// this is what a react element actually looks like when it's passed through

const aReactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    "click to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
