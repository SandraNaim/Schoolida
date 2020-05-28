const Teacher = require ('/Teacher');
const type = "Part-time";

class PartTimeTeacher {
    constructor (floor_covered, classes_taught, subject, type, office_hours, hourly_rate){
        super (floor_covered, classes_taught, subject, type);
        this.office_hours = office_hours;
        this.hourly_rate = hourly_rate;
    }
}