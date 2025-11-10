import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/inputFieldTest/InputFieldTest'
import ClickEvent from './components/clickEvent/ClickEvent'
import FunctionalComp from './components/functionalComp/FunctionalComp'
import UserEventComp from './components/userEvent/UserEvent'
import MockApiTest from './components/mockApiTest/mockApiTest'
import User from './components/userCrudWithApi/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <InputField /> */}
      {/* <ClickEvent /> */}
      {/* <FunctionalComp /> */}
      {/* <UserEventComp /> */}
      {/* <MockApiTest /> */}
      <User />
    </>
  )
}

export default App
