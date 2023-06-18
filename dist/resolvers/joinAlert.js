import { users } from "../data/index.js";
import { pubsub } from "./functions/pupsub.js";
const JoinAlert = (_parent, args) => {
    const userData = users.find(user => user.getPin() === args.pin);
    userData.setJoinedAlert(!userData['joinedAlert']);
    pubsub.publish('USER_ALERT', { userAlert: userData });
    return userData['joinedAlert'];
};
export default JoinAlert;
