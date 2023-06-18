import jwt from "jsonwebtoken";
function generateToken(user) {
    const payload = {
        userPin: user.getPin()
    };
    const token = jwt.sign(payload, "password", { expiresIn: "1h" });
    return token;
}
export default generateToken;
