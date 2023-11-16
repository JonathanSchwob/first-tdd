import { useState } from "react";

const NewMessageForm = () => {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(event.target.value);
  };

  const handleSend = () => {
    setMessages([messageText, ...messages]);
    setMessageText("");
  };

  return (
    <>
      <input
        value={messageText}
        onChange={handleChange}
        type="text"
        data-testid="messageText"
      />
      <button onClick={handleSend} data-testid="sendButton">
        send
      </button>
      {messageText}
    </>
  );
};

export default NewMessageForm;
