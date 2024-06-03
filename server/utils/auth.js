const jwt = require('jsonwebtoken');

// const secret = 'mysecretssshhhhhhh';
// const expiration = '2h';

// module.exports = {
//   signToken: function ({ username, _id }) {
//     const payload = { username, _id };
//     return jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: process.env.EXPIRATION });
//   },
// };

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
