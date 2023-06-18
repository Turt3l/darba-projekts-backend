class Alert {
    constructor() {
        this.alertedUsers = [];
        this.getId = () => this.id;
        this.getAlertedUsers = () => this.alertedUsers;
        this.getNote = () => this.note;
        this.setAlertedUsers = (users) => {
            this.alertedUsers = users;
            return this;
        };
        this.setNote = (note) => {
            this.note = note;
            return this;
        };
        this.setId = (id) => {
            this.id = id;
            return this;
        };
    }
}
export default Alert;
