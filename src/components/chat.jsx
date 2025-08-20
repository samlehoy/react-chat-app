import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function Chat({ room, messages, currentUserId }) {
  return (
    <div className="mx-auto h-screen max-w-3xl grid grid-rows-[auto,1fr,auto] bg-white shadow-sm sm:rounded-2xl sm:border sm:border-gray-200">
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-gray-200 px-4 py-3 bg-white/80 backdrop-blur">
        <img
          src={room.image_url}
          alt={room.name}
          className="h-10 w-10 rounded-xl object-cover"
        />
        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold">{room.name}</h1>
          <small className="text-gray-500">
            {room.participant.length} participants
          </small>
        </div>
      </header>

      <MessageList
        messages={messages}
        currentUserId={currentUserId}
        indexById={Object.fromEntries(messages.map((m) => [m.id, m]))}
      />

      {/* Input dummy untuk tampilan; nanti disambungkan ke websocket */}
      <MessageInput onSend={(text) => alert("Send (mock): " + text)} />
    </div>
  );
}
