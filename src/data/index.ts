import Alert from "./models/alert.js";
import User from "./models/user.js";
import { Role } from "./type/role.js";
const users: User[] = [

    new User()
    .setUsername('Tower')
    .setRole(Role.admin)
    .setPin(0o01)
    .setIsOnline(true)
    .setIsAlerted(false)
    .setJoinedAlert(false),

]
const alerts: Alert[] = [

]
export { users, alerts }