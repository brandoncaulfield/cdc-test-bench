let loggedIn = document.getElementById("loggedIn")
let loggedOut = document.getElementById("loggedOut")

const onGigyaServiceReady = () => {
    gigya.accounts.addEventHandlers({
        onLogin: () => {
            document.getElementById("loggedIn").style.display = ""
            document.getElementById("loggedOut").style.display = "none"
            document.getElementById("login").style.display = "none"
            document.getElementById("logoutButton").style.display = ""
            alert('You have logged in!')
        }
    })
}

gigya.accounts.showScreenSet({
  screenSet: "Default-RegistrationLogin",
  containerID: "login"
});


const onLogoutClick = () => {
    gigya.accounts.logout({
        callback: () => {
            document.getElementById("loggedIn").style.display = "none"
            document.getElementById("loggedOut").style.display = ""
            document.getElementById("login").style.display = ""
            document.getElementById("logoutButton").style.display = "none"
            alert('You have logged out!')
        }
    })
}

const getJWT = () => {
    gigya.accounts.getJWT({
        fields: "firstName, lastName, email",
        callback: (response) => {
            loginData = response
            returnedObject = JSON.stringify(loginData, null, 4)
            document.getElementById("JWT").innerHTML = returnedObject
        },
        "expiration": 3600
    });
}