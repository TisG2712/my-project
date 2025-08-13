export default function Message() {
    const handleClick = () => {
        console.log("Hello ae");
    }
  return (
    <div>
      <button onClick={() => handleClick()}>Click</button>
    </div>
  );
}
