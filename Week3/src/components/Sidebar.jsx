import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiColumns, FiTable } from 'react-icons/fi';

const links = [
  { name: 'Dashboard', path: '/', icon: <FiHome /> },
  { name: 'Kanban', path: '/kanban', icon: <FiColumns /> },
  { name: 'Calendar', path: '/calendar', icon: <FiCalendar /> },
  { name: 'Table', path: '/table', icon: <FiTable /> },
];

export function Sidebar({ isOpen, toggle }) {
  return (
    <aside className={`bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} h-screen`}>
      <div className="p-4 text-xl font-bold text-center cursor-pointer" onClick={toggle}>
        DashBoard
      </div>
      <nav className="flex flex-col">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
                isActive ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''
              }`
            }
          >
            <span className="text-xl mr-4">{link.icon}</span>
            {isOpen && link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
