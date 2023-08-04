const axios = require('axios');
require("dotenv").config()
const apiKey = process.env.OPENAI_API_KEY;

async function generateCodeConversion(inputCode, targetLanguage) {
    const prompt = `Convert the following code to ${targetLanguage}:\n${inputCode}`;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
                prompt: prompt,
                max_tokens: 100 // You can adjust this as needed
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating code conversion:', error.message);
        throw error;
    }
}
async function DebugCode(inputCode) {
    const prompt = `Debug the following code tell where you have change and provide error free code:\n${inputCode}`;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
                prompt: prompt,
                max_tokens: 100 // You can adjust this as needed
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating code conversion:', error.message);
        throw error;
    }
}
async function QualityCode(inputCode) {
    const prompt = `Provide the Quality of the code:\n${inputCode} :\n the paramater it should check are the Code Consistency , Code Performance , Error Handling , Code Complexcity provide the percantege and details`;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
                prompt: prompt,
                max_tokens: 200 // You can adjust this as needed
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating code conversion:', error.message);
        throw error;
    }
}

module.exports = { generateCodeConversion, DebugCode ,QualityCode}