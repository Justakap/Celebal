import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <MusicPlayer />
    </Router>
  );
}

export default App;
