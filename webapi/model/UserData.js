var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {
  get: function (con, data, callback) {
    con.query(`SELECT * FROM tblUser U join tblUserTypes tut on U.UserTypeID=tut.UserTypeID WHERE  tut.UserTypeID = '${data.UserTypeID}'`, callback);
  },

  create: function (con, data, reqestedFile, callback) {
    var resumeName = '';
    if (reqestedFile) {
      resumeName = reqestedFile.filename;
    }
    con.query(
      `INSERT INTO tblUser SET FirstName = '${data.FirstName}', LastName = '${data.LastName}', Phone = '${data.Phone}', Email = '${data.Email}', City = '${data.City}', AdressLineOne = '${data.AdressLineOne}', AdressLineTwo ='${data.AdressLineTwo}', UserTypeID = '${data.UserTypeID}', Password ='${bcrypt.hashSync(data.Password, 8)}', ResumeName = '${resumeName}' , IsProfileAccepted = '${0}', Deleted = '${0}', CreatedDate = ${con.escape(new Date())}, ModifiedDate = ${con.escape(new Date())} `, callback)
  },

  getById: function (con, UserID, callback) {
    con.query(`SELECT * FROM tblUser U join tblUserTypes tut on U.UserTypeID=tut.UserTypeID WHERE UserID = ${UserID}`, callback)
  },



  update: function (con, data, reqestedFile, UserID, callback) {
    var profileImg = '';
    if (reqestedFile) {
      profileImg = reqestedFile.filename;
    }
    const qry = `UPDATE tblUser SET FirstName = '${data.FirstName}', LastName = '${data.LastName}', Phone = '${data.Phone}', Email = '${data.Email}', City = '${data.City}', AdressLineOne = '${data.AdressLineOne}', AdressLineTwo ='${data.AdressLineTwo}', ImageName = '${profileImg}' , ModifiedDate = ${con.escape(new Date())} WHERE UserID = ${UserID}`;
    con.query(qry
      , callback)
  },

  destroy: function (con, UserID, callback) {
    con.query(`DELETE FROM tblUser WHERE UserID = ${UserID}`, callback)
  },

  login: function (con, UserID, callback) {
    con.query(`SELECT * FROM tblUser U join tblUserTypes tut WHERE u.UserID = ${UserID}`, callback)
  },
  updatePassword: function (con, data, UserID, callback) {
    const qry = `UPDATE tblUser SET  Password ='${bcrypt.hashSync(data.NewPassword, 8)}' WHERE UserID = ${UserID}`;
    con.query(qry
      , callback)
  },
  updateUserProfileAccess: function (con, data, callback) {
    const qry = `UPDATE tblUser SET  IsProfileAccepted ='${data.IsProfileAccepted}' , ModifiedDate = ${con.escape(new Date())} WHERE UserID = ${data.UserID}`;
    con.query(qry
      , callback)
  },


}
