import { Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/LoginPage'

function App() {
    

  return (
    <>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/siswa' element={<MainLayout />} >
        
      </Route>
    </Routes>
      
      
    </>
  )
}

export default App
