const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sahil:mypword@cluster0.tb4onfy.mongodb.net/?retryWrites=true&w=majority")

const Schema = mongoose.Schema;

let courseSchema = new Schema({
    courseName:String,
    courseDesc:String,
    courseDuration:String,
    courseStartData:Date
})

let CourseInfo = mongoose.model("courses",courseSchema)

module.exports = CourseInfo;