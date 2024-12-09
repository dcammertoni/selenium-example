const { Builder, By, until } = require('selenium-webdriver');

(async function testReactApp() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open the React application
    await driver.get('http://localhost:3000');

    // Find the input field by ID and enter the text "Dario"
    let input = await driver.findElement(By.id('nameInput'));
    await input.sendKeys('Dario');

    // Find the submit button and click it
    let submitButton = await driver.findElement(By.tagName('button'));
    await submitButton.click();

    // Wait for the h1 element to display "Hello, Dario!"
    await driver.wait(until.elementLocated(By.xpath("//h1[text()='Hello, Dario!']")), 5000);

    console.log('Test passed: "Hello, Dario!" was found.');
  } catch (error) {
    console.error('Test failed:', error.message);
  } finally {
    // Quit the browser session
    await driver.quit();
  }
})();
