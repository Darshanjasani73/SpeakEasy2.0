# SpeakEasy 2.0 - Speech to Text Converter

## Introduction

SpeakEasy 2.0 is a modern speech-to-text converter web application built using React. It allows users to convert spoken words into text in real-time, with additional functionalities to customize the appearance of the text, copy it to the clipboard, and download it as an image. The app supports multiple languages and includes various text styling options.

## Features

- Real-time speech to text conversion.
- Copy the transcribed text to clipboard.
- Change the language for speech recognition (English, Hindi, Gujarati).
- Toggle between light and dark themes.
- Increase or decrease the font size.
- Customize text color, background color, font style, font weight, and font family.
- Download the transcribed text as an image.
- Responsive design for optimal viewing on different devices.

## Technologies Used

- **Frontend:**
  - React.js
  - useState, useEffect (React hooks)
  - react-speech-recognition (for speech recognition)
  - react-use-clipboard (for clipboard functionality)
  - react-color (for color pickers)
  - html2canvas (for downloading the text as an image)
  - CSS Modules / Styled-components

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Darshanjasani73/SpeakEasy2.0.git
   cd speakeasy-2.0
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm start
   ```

4. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Usage

1. **Start Listening:** Click the "Start Listening" button to start speech recognition.
2. **Stop Listening:** Click the "Stop Listening" button to stop speech recognition.
3. **Reset:** Click the "Reset" button to clear the transcribed text.
4. **Copy:** Click the "Copy" button to copy the transcribed text to the clipboard.
5. **Change Language:** Select the desired language from the dropdown (English, Hindi, Gujarati).
6. **Toggle Theme:** Click the "Light/Dark Mode" button to toggle between light and dark themes.
7. **Change Font Size:** Use the "A+" and "A-" buttons to increase or decrease the font size.
8. **Change Text Color:** Use the text color picker to select a custom color for the text.
9. **Change Background Color:** Use the background color picker to select a custom background color.
10. **Change Font Style:** Select the desired font style (Normal, Italic) from the dropdown.
11. **Change Font Weight:** Select the desired font weight (Normal, Bold, Bolder) from the dropdown.
12. **Change Font Family:** Select the desired font family (Arial, Courier New, Georgia, Times New Roman, Verdana) from the dropdown.
13. **Download Image:** Click the "Download Image" button to download the transcribed text as an image.

## Previous Version

SpeakEasy 2.0 is the advanced version of SpeakEasy. You can check out the previous version using the links below:

- **Repository Link:** https://github.com/Darshanjasani73/SpeakEasy-SpeechToTextConverter
- **Live Demo on Vercel:** https://speak-easy-speech-to-text-converter.vercel.app/

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

## Contact

If you have any questions or suggestions, feel free to reach out to me at [djasani93@gmail.com](mailto:djasani93@gmail.com).

---

Thank you for using SpeakEasy 2.0! We hope you enjoy using it as much as we enjoyed building it.
