// src/components/MessageItem.jsx
function timeStr(iso) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
      timeZoneName: "short",
    }).format(new Date(iso));
  } catch { return ""; }
}

export default function MessageItem({ msg, isMine, replyTo }) {
  // Wrapper item full-width, bubble nempel kanan/kiri via self-*
  const base = "w-full flex flex-col gap-1";
  const side = isMine ? "items-end text-right" : "items-start";

  // HAPUS vw. Biar bubble mengikuti parent (90%) dan tidak overflow
  const bubbleBase =
    "w-fit max-w-[90%] sm:max-w-[520px] break-words rounded-2xl px-3 py-2 shadow-sm ring-1 ring-black/5 text-[15px]";
  const bubbleTone = isMine ? "bg-sky-100" : "bg-white";
  const bubbleAlign = isMine ? "self-end" : "self-start";

  const hasMedia = !!msg?.media;

  const bubble = (() => {
    if (msg.type === "text") return <p>{msg.message}</p>;

    if (msg.type === "image") {
      const src = hasMedia ? (msg.media.thumb_url || msg.media.url) : null;
      return (
        <>
          {src ? (
            <img
              src={src}
              alt={msg.caption || `Image from ${msg.sender}`}
              className="mb-1 w-full max-w-full sm:max-w-[360px] rounded-xl"
            />
          ) : (
            <div className="mb-1 w-full max-w-full sm:max-w-[360px] rounded-xl border border-dashed px-3 py-4 text-center text-sm text-gray-500">
              Image unavailable
            </div>
          )}
          {msg.caption && <p className="text-[13px] text-gray-600">{msg.caption}</p>}
        </>
      );
    }

    if (msg.type === "video") {
      const url = hasMedia ? msg.media.url : null;
      const poster = hasMedia ? msg.media.thumb_url : null;
      return (
        <>
          {url ? (
            <video
              controls
              src={url}
              poster={poster || undefined}
              className="mb-1 w-full max-w-full sm:max-w-[360px] rounded-xl"
            />
          ) : (
            <div className="mb-1 w-full max-w-full sm:max-w-[360px] rounded-xl border border-dashed px-3 py-4 text-center text-sm text-gray-500">
              Video unavailable
            </div>
          )}
          {msg.caption && <p className="text-[13px] text-gray-600">{msg.caption}</p>}
        </>
      );
    }

    if (msg.type === "pdf") {
      const url = hasMedia ? msg.media.url : null;
      const filename = (hasMedia && msg.media.filename) || "Document.pdf";
      const thumb = hasMedia ? msg.media.thumb_url : null;
      const linkEnabled = Boolean(url);
      const linkClass = linkEnabled
        ? "text-sm text-sky-600 hover:underline break-words"
        : "text-sm text-gray-400 pointer-events-none break-words";

      return (
        <div className="flex items-center gap-3">
          {thumb ? (
            <img
              className="h-[70px] w-[56px] rounded-md border border-gray-200 object-cover"
              src={thumb}
              alt={`Preview of ${filename}`}
            />
          ) : (
            <div
              aria-hidden
              className="h-[70px] w-[56px] rounded-md border border-dashed border-gray-300 bg-gray-50 grid place-items-center text-[11px] text-gray-400"
            >
              PDF
            </div>
          )}
          <div className="min-w-0">
            <div className="truncate font-medium">{filename}</div>
            <a
              href={url || "#"}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!linkEnabled}
              className={linkClass}
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
        {msg.edited && <span className="ml-1 text-xs italic text-gray-500">(edited)</span>}
      </div>

      {replyTo && (
        <div className={`w-fit max-w-[90%] ${isMine ? "self-end" : "self-start"} rounded-md border-l-4 border-gray-300 bg-gray-50 px-3 py-1 text-[13px] text-gray-700`}>
          <b>Reply to</b>: {replyTo.type === "text" ? replyTo.message : `[${replyTo.type}]`}
        </div>
      )}

      <div className={`${bubbleBase} ${bubbleTone} ${bubbleAlign}`}>{bubble}</div>
    </div>
  );
}
