function Employee(title) {
    this.title = title;
    this.setTitle = function(t0) {
        this.title = t0;
    }
    this.getTitle = function() {
        return this.title;
    }
}

Employee.prototype.setTitle = function(t0) {
    this.title = t0;
}
Employee.prototype.getTitle = function() {
    return this.title;
}

function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
    this.setIsManager = function(isManager) {
        this.isManager = isManager
    }
    this.getIsManager = function() {
        return this.isManager;
    }
}

Engineer.prototype.setIsManager = function(isManager) {
    this.isManager = isManager;
}
Engineer.prototype.getIsManager = function() {
    return this.isManager;
}
