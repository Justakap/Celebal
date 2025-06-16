import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';

export function Navbar({ toggleSidebar }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <button onClick={toggleSidebar} className="text-xl">
        <FiMenu />
      </button>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-xl">
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>
    </header>
  );
}
