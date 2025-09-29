import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import ForgotPassword from './components/ForgotPassword'
import NewPassword from './components/NewPassword'
import Verification from './components/Verification'
import ResetComplete from './components/ResetComplete'


function App() {

  return (
    <>
    {/* Nav */}
    <Routes>
      {/* Login and Reg */}
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      
      {/* forgot password */}
      <Route path='/password/forgot' element={<ForgotPassword/>}/>
      <Route path='/password/update' element={<NewPassword/>}/>
      <Route path='/verification' element={<Verification/>}/>
      <Route path='/password/complete' element={<ResetComplete/>}/>

      {/* Tasks */}
      {/* <Route path='/home' element={<Dashboard/>}/> */}
      
      {/*Other*/}
      {/* <Route path='/termsOfService' element={<TermsOfService/>}/> */}
      {/* <Route path='*' element={<NotFound/>}/> */}

    </Routes>
    </>
  )
}

export default App
