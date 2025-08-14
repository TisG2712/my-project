import Reac, {useState} from 'react'

function OneWayBinding() {

    const [userName, setUsername] = useState();

    const handleGetUsername = (e) => {
        setUsername(e.target.value)
    }
    
  return (
    <div>
        <div>Họ và tên: {userName}</div>
        <input type='text' onChange={(e) => handleGetUsername(e)}/>
    </div>
  )
}

export default OneWayBinding