import User from "./user";

class Alert {
    protected note: String;
    protected alertedUsers: User[] = []
    protected id: String;
    
    getId = () => this.id

    getAlertedUsers = () => this.alertedUsers

    getNote = () => this.note;


    setAlertedUsers = (users: User[] ) => {
        this.alertedUsers = users
        return this
    }

    setNote = (note: String) => {
        this.note = note
        return this
    }
    
    setId = (id: String) => {
        this.id = id
        return this
    }

}

export default Alert