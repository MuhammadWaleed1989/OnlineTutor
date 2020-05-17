module.exports = {
    get: function (con, callback) {
        con.query("SELECT GROUP_CONCAT(lvl.LevelName  SEPARATOR ', ') LevelName, s.SubjectID,s.SubjectName  FROM tblSubjectLevels sl join tblsubjects s on s.SubjectID=sl.SubjectID join tblLevels lvl on lvl.LevelID=sl.LevelID where sl.Deleted =0 and lvl.Deleted =0 and s.Deleted =0 GROUP BY s.SubjectID", callback);
    },

    create: function (con, data, callback) {
        var finalData = [];
        for (var i = 0; i < data.length; i++) {

            var arrayData = [];
            arrayData.push(data[i].SubjectID)
            arrayData.push(data[i].LevelID)
            arrayData.push(0)
            arrayData.push(new Date())
            arrayData.push(new Date())

            finalData.push(arrayData);

        }
        var sql = "INSERT INTO tblSubjectLevels(SubjectID,LevelID,Deleted,CreatedDate,ModifiedDate) VALUES ?";

        con.query(
            sql, [finalData], callback
        )
    },

    getById: function (con, SubjectLevelID, callback) {
        con.query(`SELECT * FROM tblSubjectLevels WHERE SubjectLevelID = ${SubjectLevelID}`, callback)
    },

    update: function (con, data, SubjectLevelID, callback) {
        con.query(
            `UPDATE tblSubjectLevels SET  SubjectLevelName = '${data.SubjectLevelName}',ModifiedDate = '${data.ModifiedDate}'  WHERE SubjectLevelID = ${SubjectLevelID}`,
            callback
        )
    },

    destroy: function (con, SubjectLevelID, callback) {
        con.query(`DELETE FROM tblSubjectLevels WHERE SubjectLevelID = ${SubjectLevelID}`, callback)
    }
}
