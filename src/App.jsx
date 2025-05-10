import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Welcome from './components/welcome'
import Login from './components/Login'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Helloclass from './components/helloclass'
import { Home } from './components/Home'
import Datafetch from './components/Datafetch'
// import Flexdemo from './components/Flexdemo'
import React from 'react';
import CustomerForm from './components/CustomerForm';
import Home1 from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <CustomerForm /> */}
      <Home />
    </div>
  )
}

export default App
