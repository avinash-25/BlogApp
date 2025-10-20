import jwt from "jsonwebtoken";

const generateJWT = (id) => {
  let token = jwt.sign({ id }, "secret", {
    expiresIn: "1d",
  });
  console.log(token);
};

generateJWT("utk");
//? eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InV0ayIsImlhdCI6MTc2MDY4MDk2MiwiZXhwIjoxNzYwNzY3MzYyfQ.g27vk8jJz2qgIUIiJ10QscLR9WUmg1quctGRtpzjMeg

//Sign :- Using sign() we can generate a token..
/**
 * First argument : is payload which is passed inside an object
 * Second argument : is a secret_key which should be same in both encoding and decoding.
 * Third argument : is options ==> {}
 * dotenv
 */
