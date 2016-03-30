var FirebaseTokenGenerator = require("firebase-token-generator");
var secret = process.env.SECRET || "insecure";
var user = process.env.USER || 'user1';
var tokenGenerator = new FirebaseTokenGenerator(secret);
var token = tokenGenerator.createToken({ uid: user, provider: "custom" }, { expires: 9999999999999 });

console.log('secret:', secret);
console.log('user:', user);
console.log('token:', token);