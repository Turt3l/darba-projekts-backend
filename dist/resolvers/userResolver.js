import { users } from "../data/index.js";
const userResolver = (_parent, args) => users.find(user => user.getPin() === args.pin);
export default userResolver;
