module.exports = {
    get: function (con, TutorID, callback) {
        con.query(`SELECT * FROM tblTutorQualifications where TutorID = '${TutorID}'`, callback);
    },

    create: function (con, data, TutorID, callback) {
        con.query(
            `INSERT INTO tblTutorQualifications SET OrganizationName = '${data.OrganizationName}', OrgazniationType = '${data.OrgazniationType}', MajorSubject = '${data.MajorSubject}', Grade = '${data.Grade}', TutorID = '${TutorID}'`,
            callback
        )
    },

    getById: function (con, QualificationsID, callback) {
        con.query(`SELECT * FROM tblTutorQualifications WHERE QualificationsID = ${QualificationsID}`, callback)
    },

    update: function (con, data, QualificationsID, callback) {
        con.query(
            `UPDATE tblTutorQualifications SET  OrganizationName = '${data.OrganizationName}',OrgazniationType = '${data.OrgazniationType}',MajorSubject = '${data.MajorSubject}', Grade = '${data.Grade}',ModifiedDate = '${data.ModifiedDate}'  WHERE QualificationsID = ${QualificationsID}`,
            callback
        )
    },

    destroy: function (con, QualificationsID, callback) {
        con.query(`DELETE FROM tblTutorQualifications WHERE QualificationsID = ${QualificationsID}`, callback)
    }
}
