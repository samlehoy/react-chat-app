function timeStr(iso) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

export default function MessageItem({ msg, isMine, replyTo }) {
  const base = "max-w-[80%] grid gap-1";
  const side = isMine ? "ml-auto text-right" : "";
  const bubbleBase =
    "rounded-2xl px-3 py-2 shadow-sm ring-1 ring-black/5 inline-block text-[15px]";
  const bubbleTone = isMine ? "bg-sky-100" : "bg-white";

  const bubble = (() => {
    if (msg.type === "text") {
      return <p>{msg.message}</p>;
    }
    if (msg.type === "image") {
      const src = msg.media?.thumb_url || msg.media?.url;
      return (
        <>
          {src && (
            <img
              src={src}
              alt={msg.caption || "image"}
              className="mb-1 max-w-[70vw] sm:max-w-[360px] rounded-xl"
            />
          )}
          {msg.caption && <p className="text-[13px] text-gray-600">{msg.caption}</p>}
        </>
      );
    }
    if (msg.type === "video") {
      return (
        <>
          <video
            controls
            src={msg.media?.url}
            className="mb-1 w-[85vw] max-w-[360px] rounded-xl"
          />
          {msg.caption && <p className="text-[13px] text-gray-600">{msg.caption}</p>}
        </>
      );
    }
    if (msg.type === "pdf") {
      return (
        <div className="flex items-center gap-3">
          {msg.media?.thumb_url && (
            <img
              className="h-[70px] w-[56px] rounded-md border border-gray-200 object-cover"
              src={msg.media.thumb_url}
              alt="preview"
            />
          )}
          <div className="min-w-0">
            <div className="truncate font-medium">
              {msg.media?.filename || "Document.pdf"}
            </div>
            <a
              href={msg.media?.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-sky-600 hover:underline"
            >
              View / Download
            </a>
            {msg.caption && (
              <div className="text-[13px] text-gray-600">{msg.caption}</div>
            )}
          </div>
        </div>
      );
    }
    return <p className="italic text-gray-500">Unsupported type: {msg.type}</p>;
  })();

  return (
    <div className={`${base} ${side}`}>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="truncate">{msg.sender}</span>
        {msg.sent_at && <span>• {timeStr(msg.sent_at)}</span>}
        {msg.edited && <span className="italic">(edited)</span>}
      </div>

      {replyTo && (
        <div className="rounded-md border-l-4 border-gray-300 bg-gray-50 px-3 py-1 text-[13px] text-gray-700">
          <b>Reply to</b>: {replyTo.type === "text" ? replyTo.message : `[${replyTo.type}]`}
        </div>
      )}

      <div className={`${bubbleBase} ${bubbleTone}`}>{bubble}</div>
    </div>
  );
}
