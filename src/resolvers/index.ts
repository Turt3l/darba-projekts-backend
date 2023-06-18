
import addUser from "./addUser.js";
import alertResolver from "./alerts.js";
import deleteAlert from "./deleteAlert.js";
import deleteUser from "./deleteUser.js";
import JoinAlert from "./joinAlert.js";
import login from "./login.js";
import startAlert from "./newAlert.js";
import UserOnline from "./userOnline.js";
import userResolver from "./userResolver.js";
import usersResolver from "./usersResolver.js";
import { pubsub } from "./functions/pupsub.js";

const resolvers = {
    Query: {
        user: userResolver,
        users: usersResolver,
        alerts: alertResolver
    },
    Mutation: {
        userOnline: UserOnline,
        joinAlert: JoinAlert,
        addUser: addUser,
        deleteUser: deleteUser,
        login: login,
        startAlert: startAlert,
        deleteAlert: deleteAlert
    },
    Subscription: {
        userAlert: {
            subscribe: () => {
                return pubsub.asyncIterator('USER_ALERT')
            }
        },
        userAdded: {
            subscribe: () => {
                return pubsub.asyncIterator('USER_ADDED')
            }
        },
        userOnline: {
            subscribe: () => {
                return pubsub.asyncIterator('USER_ONLINE')
            }
        },
        userOffline: {
            subscribe: () => {
                return pubsub.asyncIterator('USER_OFFLINE')
            }
        },
        userDeleted: {
            subscribe: () => {
                return pubsub.asyncIterator('USER_DELETED')
            }
        },
        newAlert: {
            subscribe: () => {
                return pubsub.asyncIterator('NEW_ALERT')
            }
        },
        deleteAlert: {
            subscribe: () => {
                return pubsub.asyncIterator('DELETE_ALERT')
            }
        }
    }
}

export default resolvers