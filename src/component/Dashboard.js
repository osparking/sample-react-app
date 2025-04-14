import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('<>', { withCredentials: true })
      .then(response => {
        setUser(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <p><strong>이름: </strong></p>
        <p><strong>이메일: </strong></p>
      </div>
    </div>
  )
}
