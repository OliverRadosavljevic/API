window.fbAsyncInit = function () {
    FB.init({
        appId: '{your-app-id}',
        cookie: true,
        xfbml: true,
        version: '{api-version}'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function statusChangeCallback(response) {
    if (response.status === "connected") {
        console.log("Logged in and authenticated");
        setElements(true);
        graphAPI();
    } else {
        console.log("Not authenticated");
        setElements(false);
    }
}


function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}


function setElements(isLoggedIn) {
    if (isLoggedIn) {
        document.getElementById('fb-btn').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    } else {
        document.getElementById('fb-btn').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    }
}

function logout() {
    FB.logout(function (response) {
        setElements(false);
    })
}


function graphAPI(){
    FB.api("me?fields=id,name,email" , function(response){
      if(response && !response.error){
        console.log(response);
      }
    })
  }