var Controller = require("../controller.js");

new Controller("/user").execute(function () {
    // werwer
}).ready(function () {
        return "this is user";
    });

new Controller("/user/login").execute(function () {
    return "this is user login";
});

new Controller("/user/logout").execute(function () {
    this.response.write("this is user logout");
    this.response.end();
    return "\nLOL";
});