import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import React, {useState,  useContext} from 'react';
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
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
import TaskCreate from './components/TaskCreate';

function App() {
      const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <div className='flex h-screen'>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <div className='flex-col w-full h-full overflow-hidden'>
          <NavBar />
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
            <Route path='/project/:project_id/milestone/:milestone_id/task/create' element={<TaskCreate/>} />
            {/* <Route path='/project/:project_id/milestone/:milestone_id/task/update/:task_id' element={<UpdateTask/>}/> */}
            {/* <Route path='/project/:project_id/milestone/:milestone_id/task/:task_id' element={<TaskDetails/>}/> */}

            {/*Other*/}
            {/* <Route path='/termsOfService' element={<TermsOfService/>}/> */}

            {/* this allows the catch all route to still catch any bad routes, and for the nav and sidebar to not appear on the page. */}
            <Route path='*' element={<Navigate to='/error'/>}/>
            <Route path='/error' element={<Error/>}/>

          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
