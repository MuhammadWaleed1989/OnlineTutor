module.exports = {
    get: function (con, UserID, callback) {

        con.query(`SELECT * FROM tblTutorBio WHERE TutorID = ${UserID}`, callback);
    },

    create: function (con, data, UserID, callback) {
        con.query(
            `INSERT INTO tblTutorBio SET  PayPerHour = '${data.PayPerHour}',LongDescription = '${data.LongDescription}',University = '${data.University}', MajorSubject = '${data.MajorSubject}', Grade = '${data.Grade}', TutorID = '${UserID}', Deleted = '${0}', CreatedDate = ${con.escape(new Date())}, ModifiedDate = ${con.escape(new Date())}`,
            callback
        )
    },

    getById: function (con, TutorBioID, callback) {
        con.query(`SELECT * FROM tblTutorBio WHERE TutorBioID = ${TutorBioID}`, callback)
    },

    update: function (con, data, TutorBioID, callback) {
        con.query(
            `UPDATE tblTutorBio SET   PayPerHour = '${data.PayPerHour}',LongDescription = '${data.LongDescription}',University = '${data.University}', MajorSubject = '${data.MajorSubject}', Grade = '${data.Grade}', ModifiedDate = ${con.escape(new Date())}  WHERE TutorBioID = ${TutorBioID}`,
            callback
        )
    },

    destroy: function (con, TutorBioID, callback) {
        con.query(`DELETE FROM tblTutorBio WHERE TutorBioID = ${TutorBioID}`, callback)
    }
}
