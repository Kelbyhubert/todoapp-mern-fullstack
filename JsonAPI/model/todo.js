const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    task: {
        type:String,
        required: [true, "connot be blank"]
    },
    done: {
        type: Boolean,
        default: false
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

const TodoList = mongoose.model("TodoList",todoSchema);

module.exports = TodoList;