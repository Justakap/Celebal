// src/components/TicketForm.jsx
import { useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function TicketForm() {
  const [form, setForm] = useState({ title: '', description: '', priority: 'Low', category: 'Bug' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    await addDoc(collection(db, "tickets"), {
      ...form,
      status: 'Open',
      userId: user.uid,
      createdAt: Timestamp.now(),
      comments: [],
    });
    alert("Ticket submitted!");
    setForm({ title: '', description: '', priority: 'Low', category: 'Bug' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
      <select onChange={(e) => setForm({ ...form, priority: e.target.value })} value={form.priority}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <select onChange={(e) => setForm({ ...form, category: e.target.value })} value={form.category}>
        <option>Bug</option><option>Feature</option><option>Query</option>
      </select>
      <button type="submit">Submit Ticket</button>
    </form>
  );
}
