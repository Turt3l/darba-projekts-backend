import { users } from "../data/index.js"
import { pubsub } from "./functions/pupsub.js";
type Args = {
    pin: number
}

const JoinAlert = (_parent: any, args: Args) => {

    const userData = users.find(user => user.getPin() === args.pin);
    userData.setJoinedAlert(!userData['joinedAlert']);
    pubsub.publish('USER_ALERT', {userAlert: userData})
    return userData['joinedAlert']
}

export default JoinAlert