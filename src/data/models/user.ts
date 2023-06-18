import { Role } from "../type/role";

class User {
    protected username: string;
    protected pin: number;
    protected role: Role;
    protected isOnline: boolean;
    protected isAlerted: boolean;
    protected joinedAlert: boolean;

    getJoinedAlert = () => this.joinedAlert

    getUsername = () => this.username;

    getPin = () => this.pin;

    getRole = () => this.role;

    getIsOnline = () => this.isOnline;

    getIsAlerted = () => this.isAlerted;

    setJoinedAlert = (joined: boolean) => {
        this.joinedAlert = joined
        return this
    }

    setUsername = (username: string) => {
        this.username = username
        return this
    }

    setPin = (pin: number) => {
        this.pin = pin;
        return this
    }

    setIsOnline = (isOnline: boolean) => {
        this.isOnline = isOnline
        return this
    }

    setRole = (role: Role) => {
        this.role = role
        return this
    }

    setIsAlerted = (isAlerted: boolean) => {
        this.isAlerted = isAlerted
        return this
    }
}

export default User;