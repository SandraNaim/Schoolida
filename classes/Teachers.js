const Staff = require("./Staff");

class Teachers extends Staff {
  constructor(floors_covered, classes_taught, subject, employment_type) {
    super();
    this.floors_covered = floors_covered;
    this.classes_taught = classes_taught;
    this.subject = subject;
    this.employment_type=employment_type;
  }
}
