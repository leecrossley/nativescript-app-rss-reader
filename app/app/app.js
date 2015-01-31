var app = require("application");

app.mainModule = "app/views/list-view";

app.onUncaughtError = function (err) {
    console.log("Application error: " + err.name +
        "; " + err.message + "; " + err.nativeError);
};

app.start();
