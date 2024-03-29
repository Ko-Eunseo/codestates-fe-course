const { USER_DATA } = require('../../db/data');
// JWT는 generateToken으로 생성할 수 있습니다. 먼저 tokenFunctions에 작성된 여러 메서드들의 역할을 파악하세요.
const { generateToken } = require('../helper/tokenFunctions');

module.exports = async (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  // checkedKeepLogin이 false라면 Access Token만 보내야합니다.
  // checkedKeepLogin이 true라면 Access Token과 Refresh Token을 함께 보내야합니다.
  const userInfo = {
    ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
  };

  if (!userInfo.id) {
    //유저 정보 없을때
    res.status(401).send("Not Authorized")
  }
  //const cookieOptions = {}해놓기
  //else {
  //await generateToken(userInfo, checkedKeepLogin) -> result = {accessToken, refreshToken}
  //구조분해할당으로 가져오기
  //res.cookie('access_jwt', accessToken, cookieOptions)
  //if(checkedkeepLogin){
  //  cookieOption.maxAge = 1000 * 60 * 60 * 24 * 7
  //  res.cookie('refresh_jwt', refreshToken, cookieOptions)  
  // }
  //res.redirect('/userinfo')
  //}

  // else if (checkedKeepLogin) {
  //   //로그인상태 유지일때 :
  //   const payload = {
  //     id: userInfo.id,
  //     userId: userInfo.userId,
  //     email: userInfo.email,
  //     createdAt: userInfo.createdAt,
  //     updatedAt: userInfo.updatedAt
  //   }
  //   res.cookie('refreshToken', refreshToken)
  //   res.status(200).send({ "data": { "accessToken": accessToken }, "message": "ok" })
  //   res.redirect('/userinfo');
  // } else {
  //   //로그인상태 유지 아닐때
  //   res.cookie('access_jwt', userInfo.id, generateToken(userId));
  //   res.redirect('/userinfo');
  // }
  const { accessToken, refreshToken } = await generateToken(userInfo, checkedKeepLogin);
  //구조분해할당으로 accessToken과 refreshToken 선언
  if (refreshToken) { //로그인 유지하려면: 쿠키에 쿠키아이디, 토큰, 쿠키옵션을 담아 보낸다.
    res.cookie('refresh_jwt', refreshToken, {
      domain: 'localhost',
      path: '/',
      sameSite: 'none',
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 24 * 3600 * 1000 * 7)  //7일후 소멸
    })
  }

  //로그인 유지 안함 & access token
  res.cookie('access_jwt', accessToken, {
    domain: 'localhost',
    path: '/',
    sameSite: 'none',
    httpOnly: true,
    secure: true,
    //expires 옵션이 없는 session cookie
  })

  return res.redirect('/userinfo')

  /*
   * TODO: 로그인 로직을 구현하세요.
   *
   * userInfo에는 요청의 바디를 이용해 db에서 조회한 유저정보가 담겨있습니다. 콘솔에서 userInfo를 출력해보세요.
   * 유저의 정보가 출력된다면 해당 유저가 존재하는 것임으로 로그인 성공에 대한 응답을 전송해야합니다.
   * 만약 undefined가 출력된다면 해당하는 유저가 존재하지 않는 것임으로 로그인 실패에 대한 응답을 전송해야합니다.
   *
   * 로그인 성공 시에는 쿠키에 JWT를 담아 전송해야합니다.
   * 로그인 상태가 유지되어야 한다면 Access Token과 Refresh Token 모두 보내야합니다.
   * Access Token은 Session 쿠키로 Refresh Token은 Persistent Cookie로 보내야합니다.
   * Access Token의 쿠키 아이디는 access_jwt, Refresh Token의 쿠키 아이디는 refresh_jwt로 작성하세요.
   *
   * 로그인 상태가 유지되길 원하지 않는다면 Access Token만 보내야합니다.
   *
   * 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
   * express의 res.redirect 메서드를 참고하여 서버의 /userinfo로 리다이렉트 될 수 있도록 구현하세요.
   */
};
