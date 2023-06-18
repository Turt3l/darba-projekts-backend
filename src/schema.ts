import { gql } from "apollo-server";

const typeDefs = gql`
    type User {
        username: String!,
        pin: Int!,
        role: String!,
        isOnline: Boolean,
        isAlerted: Boolean!,
        joinedAlert: Boolean!,
    }

    input RoleInput {
        role: String!
    }

    type Users {
        role: String!,
        users: [User]
    }

    input UserAlertInput {
        username: String!,
        pin: Int!,
        isAlerted: Boolean!,
        joinedAlert: Boolean!
    }

    type Alert {
        note: String,
        alertedUsers: [User!]!,
        id: String!
    }
    type Query {
        alerts: [Alert!]!
        users(input: RoleInput): Users,
        user(pin: Int!): User
    }

    type Mutation {
        userOnline(pin: Int!): Boolean!,
        joinAlert(pin: Int!): Boolean!,
        addUser(username: String!, role: String!): User,
        deleteUser(pin: Int!): Boolean!,
        login(pin: Int!): AuthPayload!,
        startAlert(note: String!, alertedUsers: [UserAlertInput]!): Alert,
        deleteAlert(id: String!): Boolean!
    }

    type Subscription {
        userDeleted: User,
        userAdded: User,
        userOnline: User,
        newAlert: Alert,
        deleteAlert: Alert,
        userOffline: User,
        userAlert: User
    }

    type AuthPayload {
        token: String!
        user: User!
    }
`

export default typeDefs;