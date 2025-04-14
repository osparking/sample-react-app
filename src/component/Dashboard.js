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
      {user ? (
        <div>
          <p><strong>이름: </strong>{user.name}</p>
          <p><strong>이메일: </strong>{user.email}</p>
        </div>
      ) : (
        <p>유저 정보 읽는 중...</p>
      )}
    </div>
  )
}
