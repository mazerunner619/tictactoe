let emoji = ["😆", "🤞", "🧐", "😪", "😬", "👌", "😎"];

export default function Reaction({ socket_descriptor, opponent }) {
  const sendEmoji = (emoji_index) => {
    console.log(emoji[emoji_index]);
    socket_descriptor.emit("react-emoji", {
      message: emoji[emoji_index],
      to: opponent.id,
    });
  };

  return (
    <div id="reaction">
      <div className="emoji" onMouseDown={() => sendEmoji(0)}>
        😆
      </div>
      <div className="emoji" onClick={() => sendEmoji(1)}>
        🤞
      </div>
      <div className="emoji" onClick={() => sendEmoji(2)}>
        🧐
      </div>
      <div className="emoji" onClick={() => sendEmoji(3)}>
        😪
      </div>
      <div className="emoji" onClick={() => sendEmoji(4)}>
        😬
      </div>
      <div className="emoji" onClick={() => sendEmoji(5)}>
        👌
      </div>
      <div className="emoji" onClick={() => sendEmoji(6)}>
        😎
      </div>
    </div>
  );
}
