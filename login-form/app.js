let regToken =
  "tk1..AcbH1Uz7aA.6fqgttoB04T_JSKNetJ4xMUgXPAK3CwOncmNObQ1XbA.-No4ARB6FnQyOktXdQ3mgBYAwm6dW1FiDcEHNNp6hnurAEezK1twrvmRtXpJqMnwwPXg-C_6rqN5eFxd75cPRQ.sc3";

const register = () => {
  console.log("registration started");
  gigya.accounts.initRegistration({
    callback: "callback",
  });

  params = {
    email: "brandonatsap@gmail.com",
    password: "Pass1234!",
    regToken: regToken,
    finalizeRegistration: true,
  };
  gigya.accounts.register(params);

  // Send the otp code
  function myCallback(response) {
    console.log(response);
    params = {
        "apiKey": "3_hzXJBBqG2JcTlqQNr9YhqFc7337dgXy6SSt2hzc-LUbAmPpZmy9GwpjEsRKE1g6N",
        "vToken": response.vToken,
        "code": 1234
    }

    function myCallback2(response) {
        console.log(response)
    }
    gigya.accounts.otp.update(params, {
        callback: myCallback2
    })
    // navigate to email verification page
    // let URL = "http://localhost:5500/login-form/email-verification.html";
    // window.location.href =
    //   "http://localhost:5500/login-form/email-verification.html";
  }
  var params2 = {
    apiKey:
      "3_hzXJBBqG2JcTlqQNr9YhqFc7337dgXy6SSt2hzc-LUbAmPpZmy9GwpjEsRKE1g6N",
    lang: "en",
    email: params.email,
  };
  gigya.accounts.otp.sendCode(params, {
    callback: myCallback,
  });
};

gigya.accounts.showScreenSet({
  screenSet: "Default-RegistrationLogin",
  startScreen: "gigya-email-code-verification-screen",
  containerID: "email-verification",
  regToken: regToken
});
