function Hello({ content: message, name = "Thành" }) {
  return (
    <div>
      {message} {name}
    </div>
  );
}

export default Hello;
