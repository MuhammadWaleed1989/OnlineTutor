module.exports = {
    get: function (con, callback) {
        con.query("SELECT * FROM tblTutorReviews", callback);
    },

    create: function (con, data, callback) {
        con.query(
            `INSERT INTO tblTutorReviews SET Rating = '${data.Rating}', StudentID = '${data.StudentID}', TutorID = '${data.TutorID}', Deleted = '${data.Deleted}', CreatedDate = '${data.CreatedDate}', ModifiedDate = '${data.ModifiedDate}'`,
            callback
        )
    },

    getById: function (con, TutorReviewsID, callback) {
        con.query(`SELECT * FROM tblTutorReviews WHERE TutorReviewsID = ${TutorReviewsID}`, callback)
    },

    update: function (con, data, TutorReviewsID, callback) {
        con.query(
            `UPDATE tblTutorReviews SET  Rating = '${data.Rating}',ModifiedDate = '${data.ModifiedDate}'  WHERE TutorReviewsID = ${TutorReviewsID}`,
            callback
        )
    },

    destroy: function (con, TutorReviewsID, callback) {
        con.query(`DELETE FROM tblTutorReviews WHERE TutorReviewsID = ${TutorReviewsID}`, callback)
    }
}
