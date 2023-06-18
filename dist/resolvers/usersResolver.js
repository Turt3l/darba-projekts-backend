import { users } from "../data/index.js";
import { Role } from "../data/type/role.js";
const usersResolver = (_parent, args) => {
    const { input: { role } = {} } = args;
    let result;
    if (!role || role === Role.all) {
        result = users;
    }
    else {
        result = users.filter((user) => user.getRole() === role);
    }
    if (!result.length) {
        return null;
    }
    return {
        role: role ? role : Role.all,
        users: result
    };
};
export default usersResolver;
