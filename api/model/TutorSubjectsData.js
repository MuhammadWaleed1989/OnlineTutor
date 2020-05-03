

module.exports = {
    get: function (con, callback) {
      con.query("SELECT * FROM tblTutorSubjects", callback);
    },
  
    create: function (con, data, callback) {
      con.query(
        `INSERT INTO tblTutorSubjects SET 
        TutorSubjects = '${data.TutorSubjects}', 
        Deleted = '${data.Deleted}',
        CreatedDate = '${data.CreatedDate}',
        ModifiedDate = '${data.ModifiedDate}'`,
        callback
      )
    },
  
    getById: function (con, TutorSubjectId, callback) {
      con.query(`SELECT * FROM tblUserTypes WHERE TutorSubjectId = ${TutorSubjectId}`, callback)
    },
  
  
  
    update: function (con, data, TutorSubjectId, callback) {
      con.query(
        `UPDATE tblTutorSubjects SET 
        TutorSubjects = '${data.TutorSubjects}', 
        ModifiedDate = '${data.ModifiedDate}' 
        WHERE TutorSubjectId = ${TutorSubjectId}`,
        callback
      )
    },
  
    destroy: function (con, tblTutorSubjects, callback) {
      con.query(`DELETE FROM tblTutorSubjects WHERE TutorSubjectId = ${TutorSubjectId}`, callback)
    }
  }
  