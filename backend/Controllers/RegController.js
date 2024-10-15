// controllers/registerController.js
const bcrypt = require("bcrypt");
const Register = require("../Model/RegModel");

// Controller function to handle user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the email already exists
        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new Register({
            name,
            email,
            password:hashedPassword , // Save the hashed password
        });

        // Save the new user
        const savedUser = await newUser.save();

        // Respond with success and user details
        res.status(200).json({
            message: "User registered successfully",
            user: savedUser
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Server error" });
    }
};

exports.registerUser = registerUser;
