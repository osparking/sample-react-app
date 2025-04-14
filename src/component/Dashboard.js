import React from 'react'

export const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
