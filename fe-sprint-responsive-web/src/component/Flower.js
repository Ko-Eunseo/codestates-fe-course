import styled from 'styled-components';


const Flower1 = styled.div`
  /* background-image: url('../icon.codestates.png'); */

  background-color: #f8d6d0;
  width: 14px;
  height: 10px;
  position: absolute;
  top: 20%;
  border-radius: 50%;
  animation-name: fly1;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 7s;

@keyframes fly1 {
  0% {
    left: 0;
    opacity: .3;
  }
  50% {
    opacity: .8;
  }
  100% {
    opacity: .3;
    left: 100vw;
    transform: translateY(-50px) rotateY('1080deg');
  } 
}
`;

const Flower2 = styled.div`
  background-color: #f8d6d0;
  width: 10px;
  height: 8px;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  animation: fly2 7s linear 1.4s infinite;

@keyframes fly2 {
  0% {
    left: 0;
    opacity: .3;
    transform: translate(0, 0);
  }
  50% {
    opacity: .8;
    transform: scale(0,0);
  }
  100% {
    opacity: 1;
    left: 100vw;
    transform: translate(100px, 200px) rotateY('360deg') scaleY(1.4);
  } 
}
`;

const Flower3 = styled.div`
  background-color: #f8d6d0;
  width: 6px;
  height: 14px;
  position: absolute;
  top: 60%;
  border-radius: 50%;
  animation: fly3 4s linear .4s infinite;
@keyframes fly3 {
  0% {
    left: 0;
    opacity: .9;
  }

  100% {
    opacity: .1;
    left: 100vw;
    transform: translate(100px, 300px)
  } 
}
`;

const Flower4 = styled.div`
  background-color: #f8d6d0;
  width: 8px;
  height: 12px;
  position: absolute;
  top: 25%;
  border-radius: 50%;
  animation: fly4 6s linear .5s infinite;
@keyframes fly4 {
  0% {
    left: 0;
    opacity: .1;
  }

  100% {
    opacity: .7;
    left: 100vw;
    transform: translate(100px, 200px)
  } 
}
`;

const Flower5 = styled.div`
  background-color: #f8d6d0;
  width: 8px;
  height: 12px;
  position: absolute;
  top: 80%;
  border-radius: 50%;
  animation: fly5 6s ease-out .3s infinite;
@keyframes fly5 {
  0% {
    left: 0;
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    left: 100vw;
    transform: translate(100px, 200px);
  } 
}
`;

const Flower6 = styled.div`
  background-color: #f8d6d0;
  width: 14px;
  height: 18px;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  animation: fly6 10s linear .3s infinite;

@keyframes fly6 {
  0% {
    left: 0;
    opacity:.3;
  }
  50% {
    transform: translate(50px, 80px) rotateX(360deg);
    opacity:.7;
  }
  100% {
    opacity: .1;
    left: 100vw;
    transform: translate(0, 0);
  } 
}
`;

export default function Flowers() {

  return (
    <div className='flowers__container'>
      <Flower1 />
      <Flower2 />
      <Flower3 />
      <Flower4 />
      <Flower5 />
      <Flower6 />
    </div>
  )
}