class User {
    constructor(userName) {
        this.username = userName;
    }
    getUsername() {
        return this.username;
    }
    setUsername(userName) {
        this.username = userName;
    }
}

class ChatUser extends User {
    constructor(userName) {
        super(userName);
        this.count = 0;
    }
    
    giveWarning() {
        this.count = this.count + 1;
    }
    getWarningCount() {
        return this.count;
    }
}
