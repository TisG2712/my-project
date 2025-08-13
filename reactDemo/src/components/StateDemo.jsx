import React,{useState} from 'react'

function StateDemo() {
  const [count, setCount] = useState(1);
  // initial state là giá trị khởi tạo ban đầu sẽ được gán cho biến count

  // const handleCount = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  // console.log("re-render");

  const handleCount = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }
  // khi dùng hàm callback với tham số là 'prev' cho hàm setCount thì giá trị của prev mỗi lần reload sẽ là giá trị trước của nó 
  // như ví dụ trên thì prev ở dòng 16 đang là giá trị ban đầu + 1 = 2 thì khi sang dòng 17 giá trị của prev sẽ là 2, do vậy khi nhấn vào nút thì sẽ cộng lên 2 đơn vị 

  console.log("reload page");
  /* dùng console.log để test xem useState hoạt động như nào => khi chạy chương trình lần đầu tiên sẽ in ra dòng reload page trong Console, 
  khi click tiếp vào nút sẽ tăng giá trị biến count lên và sẽ reload lại toàn bộ function component nên nó sẽ tiếp tục in ra nội dung con trong tab Console */
  

  // 2 cách ở trên đang làm giảm hiệu năng của web khi cứ phải render lại liên tục và in ra nên ta mới có cách dùng khác là sử dụng hàm callback
  return (
    <div>
      <h2>Ví dụ về useState</h2>
      <div>
      <div>Count: {count}</div>
      <button onClick={handleCount}>Click me</button>
      </div>
    </div>
  );
}

export default StateDemo;