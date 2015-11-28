BloodType = {
  
  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {
  
  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   * 
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   * 
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   * 
   */

  receive_patient : function (blood_inventory, patient) {
  
    console.log(blood_inventory);
    if (patient.blood_type == "AB_POS" && blood_inventory.AB_POS > 0) {
      
      return BloodType.AB_POS;
    }
    if (patient.blood_type == "AB_NEG" && blood_inventory.AB_NEG > 0) {
      
      return BloodType.AB_NEG;
    }
    if (patient.blood_type == "A_POS" && blood_inventory.A_POS > 0) {
      
      return BloodType.A_POS;
    }
    if (patient.blood_type == "A_NEG" && blood_inventory.A_NEG > 0) {
      
      return BloodType.A_NEG;
    }
    if (patient.blood_type == "B_POS" && blood_inventory.B_POS > 0) {
      
      return BloodType.B_POS;
    }
    if (patient.blood_type == "B_NEG" && blood_inventory.B_NEG > 0) {
     
      return BloodType.B_NEG;
    }
    if (patient.blood_type == "O_POS" && blood_inventory.O_POS > 0) {
      
      return BloodType.O_POS;
    }
    if (patient.blood_type == "O_NEG" && blood_inventory.O_NEG > 0) {
      
      return BloodType.O_NEG;
    }
    // return [
    //   BloodType.AB_POS,
    //   BloodType.AB_NEG,
    //   BloodType.A_POS,
    //   BloodType.A_NEG
    // ][Math.floor(Math.random()*4)];

  }

};