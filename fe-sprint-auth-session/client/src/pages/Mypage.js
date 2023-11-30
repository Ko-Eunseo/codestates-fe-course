import axios from 'axios';
import React from 'react';

export default function Mypage({ userInfo, setIsLogin, setUserInfo }) {
  const logoutHandler = () => {
    return axios
      .post("https://localhost:4000/logout")
      .then((res) => {
        setIsLogin(false)
        setUserInfo(null)
        //로그아웃에 성공했다면 App의 상태를 변경하세요.
      })
      .catch((err) => {
        console.log(err.response.data)
        //로그아웃에 실패했다면 그에 대한 에러 핸들링을 구현하세요. 
      });
  };

  return (
    <div className='container'>
      <div className='left-box'>
        <span>
          {`${userInfo.name}(${userInfo.userId})`}님,
          <p>반갑습니다!</p>
        </span>
      </div>
      <div className='right-box'>
        <h1>AUTH STATES</h1>
        <div className='input-field'>
          <h3>내 정보</h3>
          <div className='userinfo-field'>
            <div>{`💻 ${userInfo.position}`}</div>
            <div>{`📩 ${userInfo.email}`}</div>
            <div>{`📍 ${userInfo.location}`}</div>
            <article>
              <h3>Bio</h3>
              <span>{userInfo.bio}</span>
            </article>
          </div>
          <button className='logout-btn' onClick={logoutHandler}>
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}