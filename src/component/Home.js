import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";


export const Home = () => {
  const googleLogin = () => {
    localStorage.setItem("social", "google");
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  }
  const githubLogin = () => {
    localStorage.setItem("social", "github");
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  }

  const centerize = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh' // 100 % of view port height
  }

  return (
    <div style={centerize}>
      <h2>OAuth 시범 소셜 로그인</h2>
      <button class="button" onClick={googleLogin} style={{ margin: '10px' }}>
        <FcGoogle />&nbsp;구 글</button>
      <button class="button" onClick={githubLogin}>
        <BsGithub />깃허브</button>
    </div>
  )
}