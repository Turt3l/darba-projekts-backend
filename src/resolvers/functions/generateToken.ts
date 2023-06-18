import User from "../../data/models/user"
import jwt  from "jsonwebtoken"
function generateToken(user: User) {
    const payload = {
        userPin: user.getPin()
    }
    const token = jwt.sign(payload, "password", {expiresIn: "1h"})
    return token
}
export default generateToken