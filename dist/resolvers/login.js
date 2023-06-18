import { users } from "../data/index.js";
import { AuthenticationError } from "apollo-server";
import generateToken from "./functions/generateToken.js";
import { pubsub } from "./functions/pupsub.js";
const login = (_parent, args) => {
    const user = users.find(user => user.getPin() === args.pin);
    user.setIsOnline(true);
    pubsub.publish('USER_ONLINE', { userOnline: user });
    if (!user) {
        throw new AuthenticationError("Invalid PIN");
    }
    const token = generateToken(user);
    return { token, user };
};
export default login;
