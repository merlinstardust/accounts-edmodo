Accounts.oauth.registerService('edmodo');

if (Meteor.isClient) {
  Meteor.loginWithEdmodo = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Edmodo.requestCredential(options, credentialRequestCompleteCallback);
  };
}
else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.edmodo'],
    forOtherUsers: ['']
  });
}
