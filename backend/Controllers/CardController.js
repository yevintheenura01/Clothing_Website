const Card = require("../Model/CardModel");
const Register = require("../Model/RegModel");

// Controller function to save card details
const saveCardDetails = async (req, res) => {
    try {
        const { userID, cardHolderName, cardNumber, expirationDate, cvv, cardType } = req.body;

        // Check if the user exists
        const user = await Register.findOne({ userID });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new card document
        const newCard = new Card({
            userID,
            cardHolderName,
            cardNumber,
            expirationDate,
            cvv,
            cardType
        });

        // Save the card details
        const savedCard = await newCard.save();

        res.status(200).json({
            message: "Card details saved successfully",
            cardID: savedCard._id
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Server error" });
    }
};

// Controller function to retrieve card details
const getCardDetails = async (req, res) => {
    try {
        const { userID } = req.params;

        // Find the card details for the user
        const card = await Card.findOne({ userID });
        if (!card) {
            return res.status(404).json({ message: "Card details not found" });
        }

        // Decrypt the card number and CVV before returning the data
        const decryptedCardNumber = card.decryptCardNumber();
        const decryptedCVV = card.decryptCVV();

        res.status(200).json({
            cardHolderName: card.cardHolderName,
            cardNumber: decryptedCardNumber,
            expirationDate: card.expirationDate,
            cvv: decryptedCVV,
            cardType: card.cardType
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Server error" });
    }
};

exports.saveCardDetails = saveCardDetails;
exports.getCardDetails = getCardDetails;