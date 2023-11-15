import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <main className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
