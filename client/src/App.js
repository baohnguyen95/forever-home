import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const key = 'b2auhmGVt8lJw7s53pnOsTTPrRcowmkWZo1E9PDbUzMtNeflm2';
    const secret = 'ZkyQcrj8MtEAMXARxSgkIVDrXLAL2ccMdPhtUgEi';
    
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res.json())
      .then(data => {
        console.log('token', data);

        return fetch('https://api.petfinder.com/v2/animals', {
          headers: {
            'Authorization': data.token_type + ' ' + data .access_token,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
      }).then(res => res.json())
        .then(data => {
          console.log(data.animals);
        })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
};

export default App;
