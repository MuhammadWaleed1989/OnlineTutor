module.exports = {
    get: function (con, callback) {
        con.query("SELECT * FROM tblSubjects", callback);
    },

    create: function (con, data, callback) {
        con.query(
            `INSERT INTO tblSubjects SET SubjectName = '${data.SubjectName}', Deleted = '${0}', CreatedDate = ${con.escape(new Date())}, ModifiedDate = ${con.escape(new Date())}`,
            callback
        )
    },

    getById: function (con, SubjectID, callback) {
        con.query(`SELECT * FROM tblSubjects WHERE SubjectID = ${SubjectID}`, callback)
    },

    update: function (con, data, SubjectID, callback) {
        con.query(
            `UPDATE tblSubjects SET  SubjectName = '${data.SubjectName}',ModifiedDate = ${con.escape(new Date())}  WHERE SubjectID = ${SubjectID}`,
            callback
        )
    },

    destroy: function (con, SubjectID, callback) {
        con.query(`DELETE FROM tblSubjects WHERE SubjectID = ${SubjectID}`, callback)
    }
}
