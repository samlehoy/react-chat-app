// src/components/MessageInput.jsx
import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");
  return (
    <form
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSend(text.trim());
        setText("");
      }}
    >
      <input
        placeholder="Type a message…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
