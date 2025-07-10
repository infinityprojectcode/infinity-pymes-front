import AuthProvider from '@lib/auth/authProvider/AuthProvider';
import { BrowserRouter } from 'react-router-dom'
import Router from '@routes/root';
import './App.css';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
