//Creating token and saving in cookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  console.log(token);

  //Options for cookies
  console.log(process.env.COOKIE_EXPIRE);
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    // secure:true  
  };

  res.cookie('token', token, options).status(statusCode).json({
    success: true,
    user,
    token,
  });
};

export default sendToken;
