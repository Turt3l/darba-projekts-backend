import { users } from "../data/index.js";
import User from "../data/models/user.js";
import { Role } from "../data/type/role.js";
import { pubsub } from "./functions/pupsub.js";

type Args = {
    username: string,
    role: Role
}

const addUser = (_parent: any, args: Args) => {
    const newUser = new User()
        .setUsername(args.username)
        .setRole(args.role)
        .setPin(Math.floor((Math.random() * 10000) + 1000))
        .setIsAlerted(false)
        .setIsOnline(false)
        .setJoinedAlert(false)


    if (users.some(user => user.getUsername() === args.username)) {
        console.log("User already exists")
    } else { users.push(newUser)
            pubsub.publish('USER_ADDED', {userAdded: newUser})
            return newUser
    }

}

export default addUser
