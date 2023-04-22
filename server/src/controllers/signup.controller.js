const { saveUser } = require("../db/user");

const getSignUp = async (req, res) => {
  const signUpEntity = {
    id: 2,
    email: [
      { name: "email", value: "" },
      { name: "confirmEmail", value: "" },
    ],
    password: [
      { name: "password", value: "" },
      { name: "confirmPassword", value: "" },
    ],
    name: [
      { name: "firstName", value: "", options: { persistName: true } },
      { name: "lastName", value: "", options: { persistName: true } },
    ],
    acceptConditions: true,
  };

  res.json({ signUpEntity });
};

const postSignUp = (db) => async (req, res) => {
  console.log("Server received data:");
  console.log(req.body);
  const user = await saveUser(db, req.body);
  console.log(user);

  res.status(200).json({
    message: "Ok",
  });
};

module.exports = {
  getSignUp,
  postSignUp,
};
