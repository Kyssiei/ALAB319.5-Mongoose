import mongoose from "mongoose";



export const gradesSchemma = new mongoose.Schema({
    // scores have an array of class name plus numbered score per each class.
    score: [ //* create a const of "scores" as a schema and call it in here instead!
        {
            type:{
                type: String
            },
            score: {
                type: Number
            } 
        }
    ],
    class_id: {
        type: Number,
        require: true
    },
    learner_id: {
        type: Number,
        require: true
    },
});

