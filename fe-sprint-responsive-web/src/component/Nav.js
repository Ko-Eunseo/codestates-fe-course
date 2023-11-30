import styled from 'styled-components';
import '../App.css';
import logo_svg from '../icon/codestates2.png';
import { ReactComponent as TopIcon } from '../icon/top_icon.svg';

const TopButton = styled.div`
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  bottom: 24px;
  right: 16px;
  padding-top: 3px;
  z-index: 10;
  display: block;
  &.hidden {
    display: none;
  }
  svg {
    padding: 12px 18px;
    opacity: 0.9;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  position: fixed;

  top: 0;
  z-index: 1;

  .logo {
    height: 100%;
    padding: 12px;
    float: left;
    .logo_icon {
      margin-top: 5px;
      height: 24px;
    }
  }

  .search_box {
    padding: 12px;
    margin: 20px 20px 0 0;
    color: #868e96;

    input {
      border: none;
      border-bottom: 1px solid #bec5cd;
      background-color:transparent;
    }
  }
  a {
    img {
      width: 100px;
      margin: 20px 0 0 20px;
    }
  }
  @media screen and (max-width: 700px) {
  .right {
    display: none;
  }
}
`;

const Nav = () => {
  return (
    <>
      <Wrapper>
        <TopButton>
          <TopIcon></TopIcon>
        </TopButton>
        <div className="logo">
          {/* <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwViOhmc4g3Y6jc3xFo3WGWKy7-zV6vNcYg&usqp=CAU'} className="logo_icon" alt="logo_icon" /> */}
          {/* <span>헤어질 결심 로고</span> */}
          <a><img src="https://post-phinf.pstatic.net/MjAyMjA0MTlfNDAg/MDAxNjUwMzA2MzU4MzQz.8-moAlz5gVqepVG0vo01BYIx5lFi5VJMICc3FOI43zIg.-QwYQw3kjl3c1vP384pkUvqkgpwHRnYKRPzhn5XvQNsg.PNG/Cannes_Film_Festival_logo_yellow.png?type=w1200" /></a>
        </div>
        <div className='right'>
          <div className='search_box'>
            <label for="search">검색 </label>
            <input type="text" id="search" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Nav;

