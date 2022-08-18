const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    routineName: {type: String},
    exercises: {type: String},
    sets: {type: String},
    reps: {type: String},
    weight: {type: Number},
    dateCreated: {type: Date, default: function(){
        return new Date(new Date().setFullYear(new Date().getFullYear () +1));
    }},
    completed: {type: Boolean, default: false},
});

module.exports= mongoose.model('Routine', routineSchema);

