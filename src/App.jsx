
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'


import RootLayout from './layouts/RootLayout'
import Dashboard, { tasksLoader } from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import TeacherProfile from './pages/TeacherProfile'
import StudentProfile from './pages/StudentProfile'
import Academics from './pages/Academics'


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route index element={<Dashboard />} loader={tasksLoader}/> */}
      <Route path="create" element={<Create />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="TeacherProfile" element={<TeacherProfile />} />
      <Route path="StudentProfile" element={<StudentProfile />} />
      <Route path="Academics" element={<Academics />} />
      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router= {router} />
  )
}



export default App