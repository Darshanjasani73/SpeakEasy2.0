import React, { useState, useEffect } from "react";
import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { ChromePicker } from 'react-color';
import html2canvas from 'html2canvas';


const TextConv = () => {
    const [textToCopy, setTextToCopy] = useState("");
    const [isCopied, setCopied] = useClipboard(textToCopy, { successDuration: 1000 });
    const [selectedLanguage, setSelectedLanguage] = useState("en-IN");
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState(16);
    const [textColor, setTextColor] = useState("#000000");
    const [fontStyle, setFontStyle] = useState("normal");
    const [fontWeight, setFontWeight] = useState("normal");
    const [fontFamily, setFontFamily] = useState("Arial");
    const [bgColor, setBgColor] = useState("#f8f9fa");

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });

    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

      
    useEffect(() => {
        setTextToCopy(transcript);
    }, [transcript]);

    if (!browserSupportsSpeechRecognition) {
        return <div className="container">Speech recognition not supported</div>;
    }

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        SpeechRecognition.abortListening();
    };

    const handleReset = () => {
        resetTranscript();
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const increaseFontSize = () => {
        setFontSize(fontSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize(fontSize > 12 ? fontSize - 2 : 12);
    };

    const handleColorChange = (color) => {
        setTextColor(color.hex);
    };

    const handleBgColorChange = (color) => {
        setBgColor(color.hex);
    };

    const handleFontStyleChange = (event) => {
        setFontStyle(event.target.value);
    };

    const handleFontWeightChange = (event) => {
        setFontWeight(event.target.value);
    };

    const handleFontFamilyChange = (event) => {
        setFontFamily(event.target.value);
    };

    const handleDownloadImage = () => {
        html2canvas(document.getElementById("transcript-container")).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'transcript.png';
            link.click();
        });
    };

    return (
        <div className={`container ${theme}`}>
            <h1 className={`title ${theme}`}>🎙️SpeakEasy 2.0🎙️</h1>
            <h2 className={`heading ${theme}`}>Speech to Text Converter</h2>
            <button className="btn copy-btn" onClick={setCopied}>
                {isCopied ? 'Copied!' : 'Copy'}
            </button>
            <div id="transcript-container" className="transcript-container" style={{ fontSize: `${fontSize}px`,backgroundColor: bgColor, color: textColor, fontStyle: fontStyle, fontWeight: fontWeight, fontFamily: fontFamily }}>
                <div className="transcript">{transcript}</div>
            </div>
            <div className="controls">
                <button className="btn control-btn" onClick={startListening}>Start Listening</button>
                <button className="btn control-btn" onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                <button className="btn reset-btn" onClick={handleReset}>Reset</button>
                <select className="btn language-select" value={selectedLanguage} onChange={handleLanguageChange}>
                    <option value="en-IN">English</option>
                    <option value="hi-IN">Hindi</option>
                    <option value="gu-IN">Gujarati</option>
                </select>
                <button className="btn theme-btn" onClick={toggleTheme}>
                     {theme === "light" ? "Dark" : "Light"} Mode
                </button>
                <button className="btn font-btn" onClick={increaseFontSize}>A+</button>
                <button className="btn font-btn" onClick={decreaseFontSize}>A-</button>
                <div className="color-pickers">
                    <div>
                        <label>Text Color:</label>
                        <ChromePicker color={textColor} onChange={handleColorChange} />
                    </div>
                    <div>
                        <label>Background Color:</label>
                        <ChromePicker color={bgColor} onChange={handleBgColorChange} />
                    </div>
                </div>
                <div>
                    <label>Font Style:</label>
                    <select className="btn language-select" value={fontStyle} onChange={handleFontStyleChange}>
                        <option value="normal">Normal</option>
                        <option value="italic">Italic</option>
                    </select>
                </div>
                <div>
                    <label>Font Weight:</label>
                    <select className="btn language-select" value={fontWeight} onChange={handleFontWeightChange}>
                        <option value="normal">Normal</option>
                        <option value="bold">Bold</option>
                        <option value="bolder">Bolder</option>
                    </select>
                </div>
                <div>
                    <label>Font Family:</label>
                    <select className="btn language-select" value={fontFamily} onChange={handleFontFamilyChange}>
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                </div>
                <button className="btn download-btn" onClick={handleDownloadImage}>Download Image</button>
            </div>
        </div>
    );
};

export default TextConv;
