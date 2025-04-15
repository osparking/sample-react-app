import React from "react";

export const Home = () => {
  const googleLogin = () => {
    localStorage.setItem("social", "google");
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  }
  const githubLogin = () => {
    localStorage.setItem("social", "github");
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  }
  return (
    <div>
      <h2>소셜 로그인 링크</h2>
      <button onClick={googleLogin}>구글</button>
      <button onClick={githubLogin}>깃허브</button>
    </div>
  )
}