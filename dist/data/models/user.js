class User {
    constructor() {
        this.getJoinedAlert = () => this.joinedAlert;
        this.getUsername = () => this.username;
        this.getPin = () => this.pin;
        this.getRole = () => this.role;
        this.getIsOnline = () => this.isOnline;
        this.getIsAlerted = () => this.isAlerted;
        this.setJoinedAlert = (joined) => {
            this.joinedAlert = joined;
            return this;
        };
        this.setUsername = (username) => {
            this.username = username;
            return this;
        };
        this.setPin = (pin) => {
            this.pin = pin;
            return this;
        };
        this.setIsOnline = (isOnline) => {
            this.isOnline = isOnline;
            return this;
        };
        this.setRole = (role) => {
            this.role = role;
            return this;
        };
        this.setIsAlerted = (isAlerted) => {
            this.isAlerted = isAlerted;
            return this;
        };
    }
}
export default User;
