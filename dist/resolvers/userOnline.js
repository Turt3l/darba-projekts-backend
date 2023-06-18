import { users } from "../data/index.js";
import { pubsub } from "./functions/pupsub.js";
const UserOnline = (_parent, args) => {
    const userData = users.find(user => user.getPin() === args.pin);
    userData.setIsOnline(false);
    pubsub.publish('USER_OFFLINE', { userOffline: userData });
    return userData['isOnline'];
};
export default UserOnline;
