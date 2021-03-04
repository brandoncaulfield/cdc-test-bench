let loggedIn = document.getElementById("loggedIn")
let loggedOut = document.getElementById("loggedOut")

const onGigyaServiceReady = () => {
    gigya.accounts.addEventHandlers({
        onLogin: () => {
            document.getElementById("loggedIn").style.display = ""
            document.getElementById("loggedOut").style.display = "none"
            document.getElementById("login").style.display = "none"
            document.getElementById("editProfileButton").style.display = ""
            document.getElementById("viewPrivacyButton").style.display = ""
            document.getElementById("logoutButton").style.display = ""
            alert('You have logged in!')
        }
    })
}

gigya.accounts.showScreenSet({
  screenSet: "Default-RegistrationLogin",
  containerID: "login"
});

/**
 * 
 */
const onLogoutClick = () => {
    gigya.accounts.logout({
        callback: () => {
            document.getElementById("loggedIn").style.display = "none"
            document.getElementById("loggedOut").style.display = ""
            document.getElementById("login").style.display = ""
            document.getElementById("logoutButton").style.display = "none"
            document.getElementById("editProfileButton").style.display = "none"
            document.getElementById("viewPrivacyButton").style.display = ""
            document.getElementById("logoutButton").style.display = "none"
            alert('You have logged out!')
        }
    })
}

/**
 * 
 */
gigya.accounts.showScreenSet({
  screenSet: "Default-RegistrationLogin",
  containerID: "login"
});

/**
 * 
 */
const editProfile = () => {
    gigya.accounts.showScreenSet({
        screenSet: "Default-ProfileUpdate",
        containerID: "profile"
    })
}

/**
 * 
 */
const viewProfilePrivacy = () => {
    gigya.accounts.showScreenSet({
        screenSet: "Default-ProfileUpdate",
        startScreen: "gigya-privacy-screen",
        containerID: "profile"
    })
}