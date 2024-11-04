
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/login'

function App() {
  const code = new URLSearchParams(location.search).get("code")
  return code ? <Dashboard code={code} /> : <Login/>
}

export default App
