import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* &.stop-scroll {
    height: 100%;
    overflow: hidden;
  } */
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
  // TODO : Modal창 CSS를 구현합니다.
  background-color: white;
  border-radius: 20px;
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  text-align: center;
  padding: 20px;
  > p {
    padding: 20px;
  }
`;

export const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen);
  };

  // noscroll
  // const preventScroll = useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed;
  //     top: -${window.scrollY} px;
  //     overflow - y: scroll;
  //     width: 100 %;`

  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = "";
  //     window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  //   };
  // }, [isOpen]);

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}
        // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
        >

          {isOpen === true ? "Opened!" : "Open Modal"
          /* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 
          ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 
          ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현해야 합니다. */}
        </ModalBtn>
        {isOpen ?
          (<ModalBackdrop onClick={openModalHandler}
          //className='stop-scroll' //body(root)에 줘야하는거같음
          >
            <ModalView onClick={(e) => e.stopPropagation()}>
              <button onClick={openModalHandler}>&#x2716;</button>
              <p>Hello Codestates!</p>
            </ModalView>
          </ModalBackdrop>
            //, preventScroll
          )
          : null
        /* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 
        배경이 뜰 수 있게 구현해야 합니다. */}
      </ModalContainer>
    </>
  );
};
