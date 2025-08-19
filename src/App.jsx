// src/App.jsx
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/chat_room_extended.json")
      .then((r) => {
        if (!r.ok) throw new Error("JSON not found at /chat_room_extended.json");
        return r.json();
      })
      .then(setData)
      .catch((e) => {
        console.error(e);
        setData({ error: e.message });
      });
  }, []);

  if (!data) return <div className="center">Loading…</div>;
  if (data.error) return <div className="center">Error: {data.error}</div>;


  const { room, comments } = data.results[0];
  // urutkan berdasarkan sent_at jika ada, fallback by id
  const messages = [...comments].sort((a,b) => {
    const ta = a.sent_at || "";
    const tb = b.sent_at || "";
    if (ta && tb) return new Date(ta) - new Date(tb);
    return (a.id+"").localeCompare(b.id+"");
  });

  return <Chat room={room} messages={messages} currentUserId="agent@mail.com" />;
}
