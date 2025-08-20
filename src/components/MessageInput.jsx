import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const v = text.trim();
        if (!v) return;
        onSend(v);
        setText("");
      }}
      className="border-t border-gray-200 bg-white px-3 py-2"
    >
      <div className="flex items-center gap-2">
        <input
          placeholder="Type a message…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-[15px] outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
        />
        <button
          type="submit"
          className="rounded-xl bg-sky-500 px-4 py-2 text-white disabled:opacity-50"
          disabled={!text.trim()}
        >
          Send
        </button>
      </div>
    </form>
  );
}
