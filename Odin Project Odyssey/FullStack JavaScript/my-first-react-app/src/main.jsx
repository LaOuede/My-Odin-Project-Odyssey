import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Marauder from './Greeting.jsx'
import Example from './Test.jsx'
import Example2 from './Test2.jsx'
import Example4 from './Test4.jsx'
import PropsExample from './Test3.jsx'
import Animals from './Test5.jsx'
import Clock from './effectTest.jsx'
import ClassInput from './TestClassComponent.jsx'
import CustomButton from './CustomButton.jsx'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Marauder />
    <ClassInput />
    <CustomButton />
  </React.StrictMode>,
);
