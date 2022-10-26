import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './greetings';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;