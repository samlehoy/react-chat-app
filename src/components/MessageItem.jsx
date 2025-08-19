// src/components/MessageItem.jsx
export default function MessageItem({ msg, isMine, replyTo }) {
  const cls = "message " + (isMine ? "mine" : "theirs");

  const bubble = (() => {
    if (msg.type === "text") {
      return <p>{msg.message}</p>;
    }
    if (msg.type === "image") {
      return (
        <>
          {msg.media?.thumb_url ? (
            <img src={msg.media.thumb_url} alt={msg.caption || "image"} />
          ) : (
            <img src={msg.media?.url} alt={msg.caption || "image"} />
          )}
          {msg.caption && <p className="caption">{msg.caption}</p>}
        </>
      );
    }
    if (msg.type === "video") {
      return (
        <>
          <video controls src={msg.media?.url} />
          {msg.caption && <p className="caption">{msg.caption}</p>}
        </>
      );
    }
    if (msg.type === "pdf") {
      return (
        <div className="file">
          {msg.media?.thumb_url && (
            <img className="pdf-thumb" src={msg.media.thumb_url} alt="preview" />
          )}
          <div>
            <div className="filename">{msg.media?.filename || "Document.pdf"}</div>
            <a href={msg.media?.url} target="_blank" rel="noreferrer">View / Download</a>
            {msg.caption && <div className="caption">{msg.caption}</div>}
          </div>
        </div>
      );
    }
    return <p>Unsupported type: {msg.type}</p>;
  })();

  return (
    <div className={cls}>
      <div className="meta">
        <span className="sender">{msg.sender}</span>
        {msg.sent_at && <span className="time">{new Date(msg.sent_at).toLocaleString()}</span>}
        {msg.edited && <span className="edited">(edited)</span>}
      </div>
      {replyTo && (
        <div className="reply">
          <b>Reply to</b>: {replyTo.type === "text" ? replyTo.message : `[${replyTo.type}]`}
        </div>
      )}
      <div className="bubble">{bubble}</div>
    </div>
  );
}
