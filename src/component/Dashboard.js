import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [social, setSocial] = useState("");

  useEffect(() => {
    setSocial(localStorage.getItem("social"));
    axios.get('http://localhost:8080/user-info', { withCredentials: true })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("오류: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p><strong>이름: </strong>{user.name}</p>
          <p><strong>이메일: </strong>{user.email}</p>
{(() => {
  switch (social) {
    case 'google':
      return (user.picture
        && <img src={user.picture} alt="프로필 사진" />);
    case 'github':
      return (user.avatar_url
        && <img src={user.avatar_url} alt="프로필 사진" />);
    default:
      return null
  }
})()}             
        </div>
      ) : (
        <p>유저 정보 읽는 중...</p>
      )}
    </div>
  )
}
