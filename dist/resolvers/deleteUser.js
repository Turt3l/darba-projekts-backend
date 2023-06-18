import { users } from "../data/index.js";
import { pubsub } from "./functions/pupsub.js";
const deleteUser = (_parent, args) => {
    const userIndex = users.findIndex(user => user.getPin() === args.pin);
    if (userIndex !== -1) {
        pubsub.publish('USER_DELETED', { userDeleted: users[userIndex] });
        users.splice(userIndex, 1);
        return true;
    }
    return false;
};
export default deleteUser;
