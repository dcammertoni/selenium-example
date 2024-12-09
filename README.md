
# Selenium React Example

This is a basic example project made for SANTEX 2024 objectives, that demonstrates the use of **Selenium WebDriver** to test a simple React.js application. The project includes a React app with an input field and button, and Selenium scripts to automate the testing process.

## Project Structure

- **public/**: Static files for the React app.
- **src/**: Source code for the React application.
- **tests/**: Selenium scripts for testing the application.

## Requirements

Make sure you have the following installed on your machine:

1. **Node.js** (v14 or later)
2. **Yarn** (package manager)
3. **Chrome browser** (for Selenium WebDriver)
4. **ChromeDriver** (compatible with your Chrome browser version)
5. **Selenium WebDriver** library

## Getting Started

Follow the steps below to set up and run the project:

### 1. Install Dependencies

Navigate to the project root directory and install the required dependencies:

```bash
yarn install
```

### 2. Start the React Application

Start the React development server:

```bash
yarn start
```

The application will be available at `http://localhost:3000`.

### 3. Run Selenium Tests

To run the Selenium tests, ensure the React app is running and execute the following command:

```bash
yarn test
```

The test script will:

1. Open the React application in Chrome.
2. Enter the name "Dario" into the input field.
3. Click the submit button.
4. Verify that the heading displays "Hello, Dario!".

### 4. Expected Output

When the test runs successfully, you will see the following message in the console:

```
Test passed: "Hello, Dario!" was found.
```

If there are any issues, an error message will be logged.

## File Structure

```
selenium-react-example/
│
├── public/                 # Static files
├── src/                    # React source code
│   ├── App.js              # Main React component
│   └── index.js            # Application entry point
│
├── tests/                  # Selenium test scripts
│   └── selenium_test.js    # Selenium WebDriver test file
│
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── .gitignore              # Git ignored files
```

## Notes

- Make sure **ChromeDriver** is installed and added to your system PATH.
- Adjust timeouts in `selenium_test.js` if needed, depending on your system's speed.

---

### Author

This project was created by Dario Cammertoni for demonstration purposes.

---

### License

This project is provided without a specific license. Feel free to use and modify it.
