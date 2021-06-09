
/**
 *
 */
window.onload = (event) => {
  console.log("page is fully loaded");
  getURLParamters();
};

/**
 * Get URL paramters
 */
const getURLParamters = (sParam) => {
  const pageURL = window.location.search.substring(1);
  const URLVariables = pageURL.split("&");
  for (i = 0; i < URLVariables.length; i++) {
    let paramName = URLVariables[i].split("=");
    console.log(paramName);
    console.log(URLVariables[i]);
  }
};

/**
 *
 */
const onGigyaServiceReady = () => {
  gigya.accounts.addEventHandlers({
    onLogin: () => {
      test();
      // document.getElementById("loggedIn").style.display = "";
      // document.getElementById("loggedOut").style.display = "none";
      // document.getElementById("login").style.display = "none";
      // document.getElementById("editProfileButton").style.display = "";
      // document.getElementById("viewPrivacyButton").style.display = "";
      // document.getElementById("logoutButton").style.display = "";
      // document.getElementById("addPhoto").style.display = "";
      alert("You have logged in!");
    },
  });
};

/**
 *
 */
gigya.accounts.showScreenSet({
  screenSet: "Default-RegistrationLogin",
  containerID: "login",
});

/**
 * Show lite account registration screen-set
 */
gigya.accounts.showScreenSet({
  screenSet: "Default-LiteRegistration",
  containerID: "lite-accounts",
});


/**
 *
 */
const onLogoutClick = () => {
  gigya.accounts.logout({
    callback: () => {
      alert("You have logged out!");
    },
  });
};

/**
 *
 */

gigya.accounts.addEventHandlers({
  // ...
});

/**
 *
 */
const myFunction = (data) => {
  debugger;
};


/**
 *
 */
const editProfile = () => {
  gigya.accounts.showScreenSet({
    screenSet: "Default-ProfileUpdate",
    containerID: "profile",
  });
};

/**
 *
 */
const viewProfilePrivacy = () => {
  gigya.accounts.showScreenSet({
    screenSet: "Default-ProfileUpdate",
    startScreen: "gigya-privacy-screen",
    containerID: "profile",
  });
};

/**
 *
 */
const test = () => {
  console.log("This is a test!");
};

/**
 *
 */
const setProfilePhoto = () => {
  var params = {
    photoBytes: base64ImageStringUnder5mb,
    publish: "true",
    callback: (data) => {
      console.log(data);
    },
  };
  gigya.accounts.setProfilePhoto(params);
};
