constjwt = require("jwt")

const name = "shashank";
const secret = "123";
const cyper = jwt.sign(name,secret);
const finalResp = jwt.verify(cyper, secret)
console.log(cyper);
console.log(finalResp);