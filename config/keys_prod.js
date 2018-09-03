module.exports = {
<<<<<<< HEAD
  mongoURI:
    "mongodb://jingxia1219:jinjin1219@ds133262.mlab.com:33262/bart-guide-for-tourists",
  //Make sure this is your own unique string
  secretOrKey: "secret"
};
=======
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
}
>>>>>>> b40333843810e3ecb0cf0839e6c687c21137fc30
