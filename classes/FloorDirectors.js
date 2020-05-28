const Staff = require("./Staff");

class FloorDirectors extends Staff {
  constructor(floor_number) {
    super();
    this.floor_number = floor_number;
  }
}
