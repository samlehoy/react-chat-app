import MessageItem from "./MessageItem";

export default function MessageList({ messages, currentUserId, indexById }) {
  return (
    <div className="overflow-y-auto bg-gray-50 px-3 py-3 sm:px-4 sm:py-4 flex flex-col gap-3">
      {messages.map((m) => (
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
