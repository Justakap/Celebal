// src/App.js
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Auth from './components/Auth';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() =>
    onAuthStateChanged(auth, setUser), []
  );

  if (!user) return <Auth onAuthSuccess={() => setUser(auth.currentUser)} />;
  const isAdmin = user.email === 'admin@example.com';

  return (
    <div>
      <h1 className="text-center text-2xl my-4">Service Desk</h1>
      <TicketForm />
      <TicketList />
      {isAdmin && <AdminPanel />}
    </div>
  );
}
