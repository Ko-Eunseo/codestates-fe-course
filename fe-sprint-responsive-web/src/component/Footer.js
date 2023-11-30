import styled from 'styled-components';
import '../App.css';
import { BREAK_POINT_TABLET, BREAK_POINT_PC } from '../View/index.js'


// export const BREAK_POINT_TABLET = 768;
// export const BREAK_POINT_PC = 1200;

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  color: #868e96;

  position: absolute;
  bottom: 0;
  
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    .footer_bottom > span:last-of-type{
      display: none;
    }
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
  }
`;

const Director = styled.p`
  font-size: 20px;
  color: #a28e61;
`

const Footer = () => {
  return (
    <div className="footer">
      <Wrapper>
        <div className="footer_bottom">
          <Director>박찬욱 감독 | 2022.06.29</Director>
        </div>
      </Wrapper >
    </div >
  );
};

export default Footer;
