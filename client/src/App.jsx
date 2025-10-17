import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import ForgotPassword from './components/ForgotPassword'
import NewPassword from './components/NewPassword'
import Verification from './components/Verification'
import ResetComplete from './components/ResetComplete'
import Error from './views/Error'
import UserDashboard from './views/UserDashboard'
import CreateProject from './components/CreateProject'
import JoinProject from './components/JoinProject'
import ProjectDashboard from './views/ProjectDashboard'
import CreateMilestone from './components/CreateMilestone'

function App() {

  return (
    <>
    <Routes>
      {/* Login and Reg */}
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      
      {/* forgot password */}
      <Route path='/password/forgot' element={<ForgotPassword/>}/>
      <Route path='/password/update' element={<NewPassword/>}/>
      <Route path='/verification' element={<Verification/>}/>
      <Route path='/password/complete' element={<ResetComplete/>}/>

      {/* User Home */}
      <Route path='/user/dashboard' element={<UserDashboard/>}/>
      
      {/* Project */}
      <Route path='/project/create' element={<CreateProject/>}/>
      <Route path='/project/join' element={<JoinProject/>}/>
      <Route path='/project/:project_id/dashboard' element={<ProjectDashboard />}/>


      {/* Milestone (main task) */}
      <Route path='/project/:project_id/milestone/create' element={<CreateMilestone/>}/>
      {/* <Route path='/project/:project_id/milestone/:milestone_id' element={<MilestoneView/>}/> */}

      {/* Tasks (sub-task) */}
      {/* <Route path='/project/:project_id/milestone/:milestone_id/task/create' element={<CreateTask/>} /> */}
      {/* <Route path='/project/:project_id/milestone/:milestone_id/task/update/:task_id' element={<UpdateTask/>}/> */}
      {/* <Route path='/project/:project_id/milestone/:milestone_id/task/:task_id' element={<TaskDetails/>}/> */}

      {/*Other*/}
      {/* <Route path='/termsOfService' element={<TermsOfService/>}/> */}
      <Route path='*' element={<Error/>}/>

    </Routes>
    </>
  )
}

export default App
