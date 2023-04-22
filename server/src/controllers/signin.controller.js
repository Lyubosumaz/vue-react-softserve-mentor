const { getUser } = require("../db/user");

const getSignIn = async (req, res) => {
  const signInEntity = {
    id: 1,
    email: "",
    password: "",
    keepMeSignedIn: false,
  };

  res.json({ signInEntity });
};

const postSignIn = (db) => async (req, res) => {
  console.log("Server received data:");
  console.log(req.body);
  const user = await getUser(db, req.body);
  console.log(user);

  res.status(200).json({
    message: "Ok",
  });
};

module.exports = {
  getSignIn,
  postSignIn,
};
