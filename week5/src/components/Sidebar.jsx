import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-60 bg-gray-900 text-white p-5">
    <h1 className="text-2xl font-bold mb-6">Spotify 2.0</h1>
    <nav>
      <Link to="/" className="block py-2 hover:text-green-400">Home</Link>
      <Link to="/search" className="block py-2 hover:text-green-400">Search</Link>
      <Link to="/library" className="block py-2 hover:text-green-400">Library</Link>
    </nav>
  </div>
);

export default Sidebar;
