// src/components/TicketList.jsx
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const q = query(collection(db, "tickets"), where("userId", "==", auth.currentUser.uid));
      const snapshot = await getDocs(q);
      setTickets(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchTickets();
  }, []);

  return (
    <div className="p-4">
      <h2>Your Tickets</h2>
      {tickets.map(ticket => (
        <div key={ticket.id} className="border p-2 mb-2">
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          <p>Status: {ticket.status}</p>
        </div>
      ))}
    </div>
  );
}
