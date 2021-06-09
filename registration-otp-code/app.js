/**
 * REGISTRATION FLOW *****
 */

let params = {
  email: "superspam901@gmail.com",
  password: "Pass1234!",
  regToken: "",
  finalizeRegistration: true,
};

const registerCallback = (data) => {
  if (data.errorCode != 0) {
    console.error("accounts.register respones:");
    console.log(data);
  } else {
    console.log("%caccounts.register respones:", "color: green");
    console.log(data);
  }
};

const initRegistrationCallback = (data) => {
  console.log("accounts.initRegistration response:");
  console.log(data);
  params.regToken = data.regToken;
  console.log(params);

  /**
   * 2. Registration part
   */
  gigya.accounts.register(params, {
    callback: registerCallback(data),
  });
};

/**
 * START
 * Start of Register process
 * after register button click
 */
const register = () => {
  console.log("registration started");

  /**
   * 1. initRegistration
   */
  gigya.accounts.initRegistration({
    callback: function (data) {
      initRegistrationCallback(data);
    },
  });
};

/**
 * LOGIN FLOW ******
 */

let loginParams = {
  loginID: "cdcemailtest@gmail.com",
  password: "Password123!",
};

const loginCallback = (data) => {
  console.log(data);
};

const onLogin = () => {
  gigya.accounts.login(loginParams, {
    callback: function (data) {
      loginCallback(data);
    },
  });
};
