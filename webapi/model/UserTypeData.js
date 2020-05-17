

module.exports = {
  get: function (con, callback) {
    con.query("SELECT * FROM tblUserTypes where UserType !='Admin'", callback);
  },

  create: function (con, data, callback) {
    con.query(
      `INSERT INTO tblUserTypes SET 
      UserType = '${data.UserType}', 
      Deleted = '${data.Deleted}',
      CreatedDate = '${data.CreatedDate}',
      ModifiedDate = '${data.ModifiedDate}'`,
      callback
    )
  },

  getById: function (con, UserTypeID, callback) {
    con.query(`SELECT * FROM tblUserTypes WHERE UserTypeID = ${UserTypeID}`, callback)
  },



  update: function (con, data, UserTypeID, callback) {
    con.query(
      `UPDATE tblUserTypes SET 
      UserType = '${data.UserType}', 
      ModifiedDate = '${data.ModifiedDate}' 
      WHERE UserTypeID = ${UserTypeID}`,
      callback
    )
  },

  destroy: function (con, UserTypeID, callback) {
    con.query(`DELETE FROM tblUserTypes WHERE UserTypeID = ${UserTypeID}`, callback)
  }
}
