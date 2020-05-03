var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {
  get: function (con, callback) {
    con.query("SELECT * FROM tblUser", callback);
  },

  create: function (con, data, callback) {
    // var query = `INSERT INTO tblUser(FirstName,LastName)  VALUES ?  `;
    // var values = ['Muhammad', 'Waleed'];
    con.query(
      `INSERT INTO tblUser SET 
        FirstName = '${data.FirstName}', 
        LastName = '${data.LastName}', 
        Phone = '${data.Phone}', 
        Email = '${data.Email}', 
        Street = '${data.Street}', 
        City = '${data.City}', 
        ZipCode = '${data.ZipCode}', 
        Country = '${data.Country}', 
        AdressLineOne = '${data.AdressLineOne}', 
        AdressLineTwo ='${data.AdressLineTwo}', 
        UserTypeID = '${data.UserTypeID}', 
        Password ='${bcrypt.hashSync(data.Password, 8)}'
        `,
      callback
    )
  },

  getById: function (con, UserID, callback) {
    con.query(`SELECT * FROM tblUser WHERE UserID = ${UserID}`, callback)
  },



  update: function (con, data, UserID, callback) {
    con.query(
      `UPDATE tblUser SET 
        FirstName = '${data.FirstName}', 
        LastName = '${data.LastName}', 
        Phone = '${data.Phone}', 
        Email = '${data.Eamil}', 
        Street = '${data.Steet}', 
        City = '${data.City}', 
        ZipCode = '${data.ZipCode}', 
        Country = '${data.Country}', 
        AddressLineOne = '${data.AddressLineOne}', 
        AddressLineTwo ='${data.AddressLineTwo}',         
        ModifiedDate = '${data.ModifiedDate}' 
        WHERE UserID = ${UserID}`,
      callback
    )
  },

  destroy: function (con, UserID, callback) {
    con.query(`DELETE FROM tblUser WHERE UserID = ${UserID}`, callback)
  },

  login: function (con, UserID, callback) {
    con.query(`SELECT * FROM tblUser U join tblUserTypes tut WHERE u.UserID = ${UserID}`, callback)
  }

}
