import { useEffect, useState } from "react";
import Chat from "./components/chat";
import "./index.css";

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

  if (!data) return <div className="grid h-screen place-items-center text-gray-500">Loading…</div>;
  if (data.error) return <div className="grid h-screen place-items-center text-red-600">Error: {data.error}</div>;

  const { room, comments } = data.results[0];
  const messages = [...comments].sort((a, b) => {
    const ta = a.sent_at || "";
    const tb = b.sent_at || "";
    if (ta && tb) return new Date(ta) - new Date(tb);
    return (a.id + "").localeCompare(b.id + "");
  });

  return <Chat room={room} messages={messages} currentUserId="agent@mail.com" />;
}
