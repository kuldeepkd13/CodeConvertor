let editor;
const languageSelect = document.getElementById('language-select');
const convertBtn = document.getElementById('convert-btn');
const debugBtn = document.getElementById('debug-btn');
const qualityBtn = document.getElementById('quality-btn');
const output = document.getElementById('output');

require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.27.0/min/vs' } });
require(['vs/editor/editor.main'], function () {
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: '',
        language: 'java',
        theme: 'vs-dark'
    });
});

convertBtn.addEventListener('click', async () => {
    const code = editor.getValue();
    const selectedLanguage = languageSelect.value;

    try {
        const convertedCode = await convertCodeToLanguage(code, selectedLanguage);
        output.textContent = `Converted code in ${selectedLanguage}:\n${convertedCode}`;
    } catch (error) {
        output.textContent = 'Error converting code.';
        console.error('Error generating code conversion:', error.message);
    }
});
debugBtn.addEventListener('click', async () => {
    const code = editor.getValue();
    try {
        const convertedCode = await DebugCode(code);
        output.textContent = `Debugging...:\n${convertedCode}`;
    } catch (error) {
        output.textContent = 'Error converting code.';
        console.error('Error generating code conversion:', error.message);
    }
});
qualityBtn.addEventListener('click', async () => {
    const code = editor.getValue();
    try {
        const convertedCode = await QualityCode(code);
        output.textContent = `Checking code quality...:\n${convertedCode}`;
    } catch (error) {
        output.textContent = 'Error converting code.';
        console.error('Error generating code conversion:', error.message);
    }
});
async function convertCodeToLanguage(inputCode, targetLanguage) {
    const url = 'http://localhost:3001/chatgpt/convert-code';
    const data = {
        inputCode: inputCode,
        targetLanguage: targetLanguage
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        return responseData.convertedCode;
    } catch (error) {
        console.error('Error converting code:', error.message);
        throw error;
    }
}

async function DebugCode(inputCode) {
    const url = 'http://localhost:3001/chatgpt/debug-code';
    const data = {
        inputCode: inputCode,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        return responseData.convertedCode;
    } catch (error) {
        console.error('Error converting code:', error.message);
        throw error;
    }
}
async function QualityCode(inputCode) {
    const url = 'http://localhost:3001/chatgpt/Quality-code';
    const data = {
        inputCode: inputCode,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        return responseData.convertedCode;
    } catch (error) {
        console.error('Error converting code:', error.message);
        throw error;
    }
}

