const NewMessageForm = () => {
  return (
    <>
      <input type="text" data-testid="messageText" />
      <button data-testid="sendButton">send</button>
    </>
  );
};

export default NewMessageForm;
