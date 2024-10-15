const Questions = require("../Model/QuestionsModel");
const Register = require("../Model/RegModel");

const questions = async (req, res) => {
    try {
        const { userID, ageGroup, bust, waist,hips,shoulderWidth,height,weight,bodyShape,fastFashion,tossedOut,wardrobe,greenPoints,fashionFootprint,fabricDetective} = req.body;
        
        
        // Check if the userID exists in the registration database
        const user = await Register.findOne({ userID });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new answer document
        const newQuestions = new Questions({
            userID,
            ageGroup,
            bust,
            waist,
            hips,
            shoulderWidth,
            height,
            weight,
            bodyShape,
            fastFashion,
            tossedOut,
            wardrobe,
            greenPoints,
            fashionFootprint,
            fabricDetective
        });

        // Save the answer
        const savedAnswer = await newQuestions.save();

        res.status(200).json({
            message: "Answer saved successfully",
            answer: savedAnswer
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Server error" });
    }
};

exports.questions = questions;