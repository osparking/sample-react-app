import React from "react";

export const Home = () => {
  return (
    <div>
      <h2>소셜 로그인 링크</h2>
      <button onClick={googleLogin}>구글</button>
      <button onClick={githubLogin}>깃허브</button>
    </div>
  )
}