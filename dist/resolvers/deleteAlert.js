import { alerts, users } from "../data/index.js";
import { pubsub } from "./functions/pupsub.js";
const deleteAlert = (_parent, args) => {
    const index = alerts.findIndex((alert) => alert.getId() === args.id);
    alerts[index]['alertedUsers'].forEach((user) => {
        const foundUser = users.find((u) => Number(u.getPin()) === Number(user["pin"]));
        foundUser.setIsAlerted(false);
        foundUser.setJoinedAlert(false);
    });
    console.log(alerts[index]);
    if (index !== -1) {
        pubsub.publish('DELETE_ALERT', { deleteAlert: alerts[index] });
        alerts.splice(index, 1);
        return true;
    }
    return false;
};
export default deleteAlert;
