const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

let user = "himanshu";
let pass = "khemot";

class Authentication {
  constructor() {
    passport.use(
      new LocalStrategy((username, password, done) => {
        if (username === user) {
          done();
        }
      })
    );
  }
}
