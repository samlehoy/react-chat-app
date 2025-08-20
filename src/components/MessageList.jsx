// src/components/MessageList.jsx
import MessageItem from "./MessageItem";

export default function MessageList({ messages, currentUserId, indexById }) {
  return (
    <div
      className="
        overflow-y-auto overflow-x-hidden bg-gray-50
        px-3 py-3 sm:px-4 sm:py-4
        flex flex-col gap-3
        scroll-smooth
        snap-y snap-mandatory
        h-[calc(100vh-160px)]
      "
    >
      {messages.map((m) => (
        <div key={m.id} className="snap-start w-full">
          <MessageItem
            msg={m}
            isMine={m.sender === currentUserId}
            replyTo={m.reply_to ? indexById[m.reply_to] : null}
          />
        </div>
      ))}
    </div>
  );
}
