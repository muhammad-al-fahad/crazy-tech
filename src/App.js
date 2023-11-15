import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <main className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
