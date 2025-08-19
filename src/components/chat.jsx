// src/components/Chat.jsx
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function Chat({ room, messages, currentUserId }) {
  return (
    <div className="chat-wrap">
      <header className="chat-header">
        <img src={room.image_url} alt={room.name} />
        <div>
          <h1>{room.name}</h1>
          <small>{room.participant.length} participants</small>
        </div>
      </header>

      <MessageList
        messages={messages}
        currentUserId={currentUserId}
        indexById={Object.fromEntries(messages.map(m => [m.id, m]))}
      />

      {/* Input dummy untuk tampilan; nanti disambungkan ke Firebase */}
      <MessageInput onSend={(text) => alert("Send (mock): " + text)} />
    </div>
  );
}
