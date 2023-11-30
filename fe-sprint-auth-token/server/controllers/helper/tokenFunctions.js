require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateToken: async (user, checkedKeepLogin) => { //토큰만들때 사용. await으로 써야함
    const payload = {
      id: user.id,
      email: user.email,
    };
    let result = {
      accessToken: sign(payload, process.env.ACCESS_SECRET, { //process.env: env 내용 가져올 수 있음. 임의의 문자를 넣음
        expiresIn: '1d', // 1일간 유효한 토큰을 발행합니다.
      }),
    };

    if (checkedKeepLogin) {
      result.refreshToken = sign(payload, process.env.REFRESH_SECRET, {
        expiresIn: '7d', // 일주일간 유효한 토큰을 발행합니다.
      });
    }
    return result;
  },
  verifyToken: async (type, token) => { //유효한지 검사하는 토큰
    let secretKey, decoded;
    switch (type) {
      case 'access':
        secretKey = process.env.ACCESS_SECRET;
        break;
      case 'refresh':
        secretKey = process.env.REFRESH_SECRET;
        break;
      default:
        return null;
    }

    try {
      decoded = await verify(token, secretKey);
    } catch (err) {
      console.log(`JWT Error: ${err.message}`);
      return null;
    }
    return decoded;
  },
};
