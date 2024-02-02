import { useState } from 'react'

function App() {

  const [message, setMessage] = useState("Let's learn more about testing in React");

  const handleChangeMessage = () => {
    setMessage('New Message')
  }

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <button onClick={handleChangeMessage}>Change message</button>
    </div>
  );
}

export default App;
