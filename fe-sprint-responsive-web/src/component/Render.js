import styled from 'styled-components';
import '../App.css';
import { BREAK_POINT_TABLET, BREAK_POINT_PC, BREAK_POINT_PHONE } from '../View/index.js'
import Flowers from './Flower';

const MainArea = styled.div`
  /* background-image: url('https://i.pinimg.com/564x/25/2a/85/252a8531ff0b79234be74178758db6da.jpg'); */
  /* background-image: url('https://flexible.img.hani.co.kr/flexible/normal/970/620/imgdb/original/2022/0704/20220704503497.jpg'); */
  background-image: url('https://flexible.img.hani.co.kr/flexible/normal/970/646/imgdb/original/2022/0704/20220704503498.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* max-height: 864px; */
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;
  position: relative;

  div.text {
    display: flex;
    justify-content: center;
    /* display: inline-block;
    text-align: center; */
    position: relative;
    color: transparent;
    font-size: 35px;
    font-weight: 100;

    margin-top: 50px;
    animation: slideUp 1s ease-in;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #a28e61;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s linear;
    background-position: left;
    background-image: linear-gradient(120deg, #a28e61 50%, transparent 50%);
    /* background-image: url("https://img.extmovie.com/files/attach/images/135/160/593/084/91609111e42b8d8a2835a9cf8c0380b4.jpg"); */
    background-clip: text;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-size: 0% 100%;
    z-index: 1;

    &:hover{
      background-size: 200% 100%;
      transition: all 0.5s linear;
    }

    &:before {
      position: absolute;
      content: '의심, 관심 그리고';
      top: -30%;
      color: #287b93;
      font-size: 16px;
    }

  }
  section {
    line-height: 2rem;
    z-index: 1;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;

    > p {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
    }
  }

  @keyframes slideUp {
    from{
      top: 300px;
      opacity: 0;
    }
    to{
      top: 0px;
    }
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    background-position: right;
  }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    background-position: right;
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
  }

  //폰: 320px 이상
  @media only screen and (max-width: 600px) {
    div.text {
      /* display: none; */
    }
  }
`;

const Area2 = styled.div`
  background-image: url('https://flexible.img.hani.co.kr/flexible/normal/970/646/imgdb/original/2022/0704/20220704503498.jpg');

  display: none;
  position: relative;

  background-position: left;
  background-size: cover;

  /* max-height: 864px; */
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;

@media screen and (max-width: 600px) {
  display: block;
}
`

//배우 설명
const Left = styled.div`
  display: none;
  color: #BB8E77;
  /* opacity: .4; */
  font-size: 3vh;
  /* font-size: 30px; */

  position: absolute;
  top: 100px;
  left: 20px;


  animation: actress 2s linear forwards;

  div.text {
    /* width: 1200px; */
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
  display: block;
}

@keyframes actress {
  from {
    opacity: 0;
  }

  to {
    opacity: .4;
  }
}
`;

const Right = styled.div`
  color: #BB8E77;
  opacity: .4;
  font-size: 3vh;

  
  display: none;
  position: absolute;
  right: 30px;
  top: 32px;

  z-index: 3;

  animation: actor 5s linear ; 


  div.text {
    /* width: 1200px; */
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
  display: block;
}
@keyframes actor {
  from {
    opacity: 0;
  }

  to {
    opacity: .4;
  }
}

`;

const Greet1 = styled.h2`
  width: 30vw;
  color: black;
  position: absolute;
  top: 40vh;
  left: 70vw;
  animation: g1 6s ease forwards;
  @keyframes g1 {
    0%{
      opacity: 1;
    }
    100%{
      transform: translateY(200px);
      opacity: 0;
    }
  }
`;


const Render = () => {
  return (
    <>
      <Area2>
        <Flowers />
        <Left>
          <div>
            <h1>탕웨이</h1>
            <Greet1>"안녕"</Greet1>
          </div>
        </Left>
      </Area2>
      <MainArea>
        <Flowers />
        <div className="text">
          <h1>헤어질 결심</h1>
        </div>
        <Right>
          <div>
            <h1>박해일</h1>
          </div>
        </Right>
        <section>
          <p><span>진심을 숨기는 용의자</span>
            <span>용의자에게 의심과 관심을 동시에 느끼는 형사</span>
            <span>그들의 '헤어질 결심'</span></p>
          {/* <span>15세 관람가 | 138분 | 멜로/로맨스</span> */}
        </section>
      </MainArea>
    </>
  )
};

export default Render;
