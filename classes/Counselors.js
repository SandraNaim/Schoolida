const Staff = require("./Staff");

class Couselors extends Staff {
  constructor(creditCardNo, office_days) {
    super();
    this.creditCardNo = creditCardNo;
    this.office_days = office_days;
  }
}
