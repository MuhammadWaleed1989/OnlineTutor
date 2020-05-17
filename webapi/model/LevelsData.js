module.exports = {
    get: function (con, callback) {
        con.query("SELECT * FROM tblLevels", callback);
    },

    getLevelsbySubjectID: function (con, SubjectID, callback) {
        con.query(`SELECT distinct sl.LevelID ,lvl.LevelName FROM tblSubjectLevels sl join tblLevels lvl on lvl.LevelID=sl.LevelID where sl.Deleted =0 and lvl.Deleted =0 and sl.SubjectID =${SubjectID}`, callback);
    },

    create: function (con, data, callback) {
        con.query(
            `INSERT INTO tblLevels SET LevelName = '${data.LevelName}', Deleted = '${0}', CreatedDate = ${con.escape(new Date())}, ModifiedDate = ${con.escape(new Date())}`,
            callback
        )
    },

    getById: function (con, LevelID, callback) {
        con.query(`SELECT * FROM tblLevels WHERE LevelID = ${LevelID}`, callback)
    },

    update: function (con, data, LevelID, callback) {
        con.query(
            `UPDATE tblSubjects SET  LevelName = '${data.LevelName}',ModifiedDate = ${con.escape(new Date())}  WHERE LevelID = ${LevelID}`,
            callback
        )
    },

    destroy: function (con, LevelID, callback) {
        con.query(`DELETE FROM tblSubjects WHERE LevelID = ${LevelID}`, callback)
    }
}
