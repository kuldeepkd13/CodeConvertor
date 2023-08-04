const express = require("express")
const codeRoute = express.Router();
const { generateCodeConversion, DebugCode, QualityCode } = require("../controller/helper")

codeRoute.post('/convert-code', async (req, res) => {
    const { inputCode, targetLanguage } = req.body;

    try {
        const convertedCode = await generateCodeConversion(inputCode, targetLanguage);
        res.json({ convertedCode });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during code conversion.' });
    }
});
codeRoute.post('/debug-code', async (req, res) => {
    const { inputCode } = req.body;

    try {
        const convertedCode = await DebugCode(inputCode);
        res.json({ convertedCode });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during code conversion.' });
    }
});
codeRoute.post('/Quality-code', async (req, res) => {
    const { inputCode } = req.body;

    try {
        const convertedCode = await QualityCode(inputCode);
        res.json({ convertedCode });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during code conversion.' });
    }
});

module.exports = { codeRoute }