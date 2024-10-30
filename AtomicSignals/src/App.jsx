import { useState } from 'react'
import './index.css';
import './App.css';
import LoginPage from './pages/SignUp';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/Theme';
import Routers from './routers/Routers';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <div className='main'>
      <Routers/>
    </div>
    </ThemeProvider>
  )
}

export default App
