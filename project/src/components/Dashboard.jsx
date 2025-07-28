// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";
import AdminPanel from "./AdminPanel";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload(); 
  };

  const isAdmin = user?.email === "admin@example.com"; 

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🎟️ Service Desk Dashboard</h1>
        <div>
          <span className="mr-4 text-gray-600">Welcome, {user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Raise a New Ticket</h2>
        <TicketForm />
      </div>

      {/* Ticket List for current user */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Tickets</h2>
        <TicketList />
      </div>

      {/* Admin Panel (only for admin user) */}
      {isAdmin && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Admin Panel</h2>
          <AdminPanel />
        </div>
      )}
    </div>
  );
}
