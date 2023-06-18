import { users } from "../data/index.js";
import { pubsub } from "./functions/pupsub.js";
type Args = {
    pin: number
}

const UserOnline = (_parent: any, args: Args) => {
    const userData = users.find(user => user.getPin() === args.pin);
    userData.setIsOnline(false)
    pubsub.publish('USER_OFFLINE', {userOffline: userData})
    return userData['isOnline']
}

export default UserOnline