const { USER_DATA } = require('../../db/data');
// JWT는 verifyToken으로 검증할 수 있습니다. 먼저 tokenFunctions에 작성된 여러 메서드들의 역할을 파악하세요.
const { verifyToken, generateToken } = require('../helper/tokenFunctions');

module.exports = async (req, res) => {
  // 요청에서 일단 토큰을 받아오기
  // 액세스 토큰부터 복호화 시키기
  //   액세스 토큰 잘 복호화가 됐다면?
  //    복호화한 내용을 사용해서 일치하는 userInfo 찾기
  //      userInfo가 제대로 안들어오면?? 
  //         너는 로그인을 할 수 없단다.
  //       userInfo 제대로 들어오면?
  //         userInfo를 클라이어트로 보내주기!
  //   액세스 토큰 복호화가 안 됐다면? 
  //     리프레시 토큰은 있니?
  //       리프레시 토큰 없는뎅...
  //         돌아가.
  //       리프레시 토큰은 있어요!
  //         리프레시 토큰 검증하기(복호화)
  //          리프레시 토큰 잘 복호화가 됐다면?
  //             복호화한 내용을 사용해서 일치하는 userInfo 찾기
  //               userInfo가 제대로 안들어오면?? 
  //                 너는 로그인을 할 수 없단다.
  //               userInfo 제대로 들어오면?
  //                 액세스 토큰 재발급 해주기!
  //                 userinfo로 다시오세요
  //           리프레시 토큰 복호화가 안 됐다면?
  //             안돼. 돌아가.

  const { access_jwt, refresh_jwt } = req.cookies;
  const accessPayload = await verifyToken('access', access_jwt);

  if (accessPayload) {
    const userInfo = {
      ...USER_DATA.filter((user) => user.id === accessPayload.id)[0]
    };
    if (!userInfo.id) {
      return res.status(401).send('Not Authorized')
    }
    delete userInfo.password;
    return res.json(userInfo)
  } else if (refresh_jwt) {
    const refreshPayload = await verifyToken('refresh', refresh_jwt);
    if (refreshPayload) {
      const userInfo = {
        ...USER_DATA.filter((user) => user.id === refreshPayload.id)[0]
      };
      if (!userInfo.id) {
        return res.status(401).send('Not Authorized')
      }
      const { accessToken } = await generateToken(userInfo);
      res.cookie('access_jwt', accessToken, {
        domain: 'localhost',
        path: '/',
        sameSite: 'none',
        httpOnly: true,
        secure: true,
      });

      return res.redirect('/userinfo')
    }
  } else {
    return res.status(401).send('Not Authorized')
  }
  return res.status(401).send('Not Authorized')
}

//   /*
//    * TODO: 토큰 검증 여부에 따라 유저 정보를 전달하는 로직을 구현하세요.
//    *
//    * Access Token에 대한 검증이 성공하면 복호화된 payload를 이용하여 USER_DATA에서 해당하는 유저를 조회할 수 있습니다.
//    * Access Token이 만료되었다면 Refresh Token을 검증해 Access Token을 재발급하여야 합니다.
//    * Access Token과 Refresh Token 모두 만료되었다면 상태 코드 401을 보내야합니다.
//    */
// };
