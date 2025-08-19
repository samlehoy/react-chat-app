// src/components/MessageList.jsx
import MessageItem from "./MessageItem";

export default function MessageList({ messages, currentUserId, indexById }) {
  return (
    <div className="messages">
      {messages.map(m => (
        <MessageItem
          key={m.id}
          msg={m}
          isMine={m.sender === currentUserId}
          replyTo={m.reply_to ? indexById[m.reply_to] : null}
        />
      ))}
    </div>
  );
}
