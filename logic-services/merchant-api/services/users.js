const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const User = db.User;

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  getToken,
  delete: _delete
};

async function authenticate({ username, password }) {
  const user = await User.findOne({ username });
  let authResult = { user: null, message: '' };

  if (!user.isApproved) {
    authResult.message = 'User is not yet approved';

  } else if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = getToken(user.id);

    authResult.user = Object.assign(userWithoutHash, {token});

  } else {
    authResult.message = 'Username or password is incorrect';
  }

  return authResult;
}

function getToken(userId) {
  return jwt.sign({ sub: userId }, config.secret);
}

async function getAll() {
  return await User.find().select('-hash');
}

async function getById(id) {
  return await User.findById(id).select('-hash');
}

async function create(userParam) {
  if (await User.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  let isFirstUser = !(await User.findOne());

  const user = new User(userParam);

  if (isFirstUser) {
    user.isApproved = true;
  }

  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  await user.save();
}

async function update(id, userParam) {
  const user = await User.findById(id);

  if (!user) throw 'User not found';

  if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }

  Object.assign(user, userParam);
  await user.save();
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}
