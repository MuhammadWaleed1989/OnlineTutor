const SubjectsData = require("../model/SubjectsData")
const SubjectLevels = require("../model/SubjectLevels")
const LevelsData = require("../model/LevelsData")

module.exports = {
    /* Get all subjects */
    getAllSubjects: function (req, res) {
        SubjectsData.get(req.con, function (err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json(rows);
            }
        })
    },

    /* Post data to DB */
    saveSubject: function (req, res) {
        SubjectsData.create(req.con, req.body, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record created successfully" });
            }
        })
    },

    getSubjectByID: function (req, res) {
        SubjectsData.getById(req.con, req.params.SubjectID, function (err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json(rows);
            }
        })
    },

    updateSubjectName: function (req, res) {
        SubjectsData.update(req.con, req.body, req.params.SubjectID, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record updated successfully" });
            }
        })
    },

    deleteSubject: function (req, res) {
        SubjectsData.destroy(req.con, req.params.SubjectID, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record deleted successfully" });
            }
        })
    },
    getAllLevels: function (req, res) {
        LevelsData.get(req.con, function (err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json(rows);
            }
        })
    },

    getAllLevelsBySubjectID: function (req, res) {
        LevelsData.getLevelsbySubjectID(req.con, req.params.SubjectID, function (err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json(rows);
            }
        })
    },

    /* Post data to DB */
    saveLevel: function (req, res) {
        LevelsData.create(req.con, req.body, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record created successfully" });
            }
        })
    },

    getLevelByID: function (req, res) {
        LevelsData.getById(req.con, req.params.LevelID, function (err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json(rows);
            }
        })
    },

    updateLevelName: function (req, res) {
        LevelsData.update(req.con, req.body, req.params.LevelID, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record updated successfully" });
            }
        })
    },

    deleteLevel: function (req, res) {
        LevelsData.destroy(req.con, req.params.LevelID, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record deleted successfully" });
            }
        })
    },
    getAllSubjectsLevel: function (req, res) {
        SubjectLevels.get(req.con, function (err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json(rows);
            }
        })
    },
    /* Post data to DB */
    saveSubjectLevels: function (req, res) {
        SubjectLevels.create(req.con, req.body, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record created successfully" });
            }
        })
    },
    getSubjectLevelsByID: function (req, res) {
        SubjectLevels.getById(req.con, req.params.SubjectID, function (err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json(rows);
            }
        })
    },

    updateSubjectLevels: function (req, res) {
        SubjectLevels.update(req.con, req.body, req.params.SubjectLevelID, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record updated successfully" });
            }
        })
    },

    deleteSubjectLevels: function (req, res) {
        SubjectLevels.destroy(req.con, req.params.SubjectLevelID, function (err) {
            if (err) {
                res.json({ "Error": true, "Message": err });
            }
            else {
                res.json({ Message: "Record deleted successfully" });
            }
        })
    },
}
