// src/components/AdminPanel.jsx
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export default function AdminPanel() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const snapshot = await getDocs(collection(db, "tickets"));
      setTickets(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchAll();
  }, []);

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "tickets", id), { status });
    alert("Status updated");
  };

  return (
    <div className="p-4">
      <h2>Admin Panel</h2>
      {tickets.map(ticket => (
        <div key={ticket.id} className="border p-2 mb-2">
          <h3>{ticket.title} - {ticket.status}</h3>
          <button onClick={() => updateStatus(ticket.id, 'In Progress')}>Mark In Progress</button>
          <button onClick={() => updateStatus(ticket.id, 'Resolved')}>Mark Resolved</button>
        </div>
      ))}
    </div>
  );
}
