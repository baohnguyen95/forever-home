import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(res => setData(res.message))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
