import { Navigate, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/LoginPage'

function App() {
    

  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to="/login" /> } />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<MainLayout />} />
        
    </Routes>
      
      
    </>
  )
}

export default App
