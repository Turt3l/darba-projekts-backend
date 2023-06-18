import { alerts, users } from "../data/index.js"
import Alert from "../data/models/alert.js"
import User from "../data/models/user.js"
import {v4 as uuidv4} from 'uuid'
import { pubsub } from "./functions/pupsub.js";
type Args = {
    note: string,
    alertedUsers: User[]
}

const startAlert = (_parent: any, args: Args) => {

    args.alertedUsers.forEach((user) => {
        const foundUser = users.find((u) => Number(u.getPin()) === Number(user["pin"]));
        foundUser.setIsAlerted(true)
    });
    const newAlert = new Alert()
        .setId(uuidv4())
        .setAlertedUsers(args.alertedUsers)
        .setNote(args.note)

    alerts.push(newAlert)

    pubsub.publish('NEW_ALERT', {newAlert: newAlert})

    return newAlert
}

export default startAlert