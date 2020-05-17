module.exports = {
  get: function (con, UserID, callback) {
    con.query(`SELECT GROUP_CONCAT(lvl.LevelName  SEPARATOR ', ') LevelName, s.SubjectID,s.SubjectName FROM tblTutorSubjects tl join tblsubjects s on s.SubjectID=tl.SubjectID join tblLevels lvl on lvl.LevelID=tl.LevelID where tl.Deleted =0 and lvl.Deleted =0 and s.Deleted =0 and tl.TutorID='${UserID}' GROUP BY s.SubjectID`, callback);
  },

  create: function (con, data, UserID, callback) {
    var finalData = [];
    for (var i = 0; i < data.length; i++) {

      var arrayData = [];
      arrayData.push(data[i].SubjectID)
      arrayData.push(data[i].LevelID)
      arrayData.push(UserID)
      arrayData.push(0)
      arrayData.push(new Date())
      arrayData.push(new Date())

      finalData.push(arrayData);

    }
    var sql = "INSERT INTO tblTutorSubjects(SubjectID,LevelID,TutorID,Deleted,CreatedDate,ModifiedDate) VALUES ?";
    con.query(
      sql, [finalData], callback
    )
  },

  getById: function (con, TutorSubjectsID, callback) {
    con.query(`SELECT * FROM tblTutorSubjects WHERE TutorSubjectsID = ${TutorSubjectsID}`, callback)
  },



  update: function (con, data, TutorSubjectId, callback) {
    con.query(
      `UPDATE tblTutorSubjects SET  LevelsIDs = '${data.LevelsIDs}',ModifiedDate = '${data.ModifiedDate}'  WHERE TutorSubjectsID = ${TutorSubjectsID}`,
      callback
    )
  },

  destroy: function (con, TutorSubjectsID, callback) {
    con.query(`DELETE FROM tblTutorSubjects WHERE TutorSubjectsID = ${TutorSubjectsID}`, callback)
  }
}
