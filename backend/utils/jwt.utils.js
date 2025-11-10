import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1d" });
  return token;
};
//?eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InV0ayIsImlhdCI6MTc2MDY4MDk2MiwiZXhwIjoxNzYwNzY3MzYyfQ.g27vk8jJz2qgIUIiJ10QscLR9WUmg1quctGRtpzjMeg

//Sign :- Using sign() we can generate a token..
/**
 * First argument : is payload which is passed inside an object
 * Second argument : is a secret_key which should be same in both encoding and decoding.
 * Third argument : is options ==> {}
 * dotenv
 */

//? sign() is used to generate jwt based on payload. it accept three parameters: payload, secret, options
//? sing({payload}, secret, {options})
//~ {payload} --> it should be an object, multiple values can be added to this object
//~ secret --> secret key (used for encryption and decryption of the token)
//~ {options} --> used to define expiration time of the token
