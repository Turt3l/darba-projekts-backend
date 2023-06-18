import { users } from "../data/index.js";
import { Role, RoleShape } from "../data/type/role.js";

type Args = {
    input?: {
        role: string
    }
}

const usersResolver = (_parent: any, args: Args): RoleShape => {
    const {input : { role } = {}} = args

    let result

    if (!role || role === Role.all) {
        result = users
    } else {
        result = users.filter(
            (user) => user.getRole() === role
        )
    }
    if (!result.length) {
        return null;
    }

    return {
        role: role ? (role as Role) : Role.all,
        users: result 
    }

}

export default usersResolver