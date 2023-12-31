const User = require("../controller/user.controller.ts");

const router = express.Router;

router.post("/signup", User.signup);

module.exports = router;
