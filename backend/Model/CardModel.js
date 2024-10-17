require('dotenv').config();

const mongoose = require("mongoose");
const crypto = require("crypto-js");
const Schema = mongoose.Schema;

// Get SECRET_KEY from environment variables
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables");
}

// Define schema for storing card details
const CardSchema = new Schema({
    userID: {
        type: Number, 
        required: true,
        ref: "Register"  // Reference to the user who owns the card
    },
    cardHolderName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    cardType: {
        type: String,
        enum: ["Visa", "MasterCard", "Amex", "Discover"],
        required: true
    }
});

// Pre-save hook to encrypt the card number and CVV
CardSchema.pre("save", function (next) {
    const card = this;

    // Encrypt card number and CVV
    if (card.isModified("cardNumber")) {
        card.cardNumber = crypto.AES.encrypt(card.cardNumber, SECRET_KEY).toString();
    }
    
    if (card.isModified("cvv")) {
        card.cvv = crypto.AES.encrypt(card.cvv, SECRET_KEY).toString();
    }

    next();
});

// Decrypt card number and CVV when retrieving card details
CardSchema.methods.decryptCardNumber = function () {
    const bytes = crypto.AES.decrypt(this.cardNumber, SECRET_KEY);
    return bytes.toString(crypto.enc.Utf8);
};

CardSchema.methods.decryptCVV = function () {
    const bytes = crypto.AES.decrypt(this.cvv, SECRET_KEY);
    return bytes.toString(crypto.enc.Utf8);
};

module.exports = mongoose.model(
    "Card",
    CardSchema
);