import User from "../models/user";

export enum Role {
    all = 'all',
    admin = 'Admin',
    dispatch = 'Dispatch',
    responder = 'Responder'
}

export type RoleShape = {
    role: Role,
    users: User[]
}

export type RoleMap = Record<Role, RoleShape>