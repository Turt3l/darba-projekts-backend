import { users } from "../data/index.js";

type Args = {
    pin: number
};

const userResolver = (_parent: any, args: Args) => users.find(
    user => user.getPin() === args.pin
);

export default userResolver