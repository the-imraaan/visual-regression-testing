# Playwright Automation Test Suite

This repository contains an automation test suite built using [Playwright](https://playwright.dev). It is designed to test Nextiva sites with reusable components and configurations for multiple environments.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Clone the Repository](#clone-the-repository)
- [Setup](#setup)
- [Run Test](#add-page-urls)
- [Run Tests](#run-tests)

---

## Prerequisites

Before cloning and running the tests, ensure you have the following installed:

1. **Node.js**: Version 20 or higher.
   - Download and install from [Node.js Official Website](https://nodejs.org/).
2. **Git**: Version control system.
   - Download and install from [Git Official Website](https://git-scm.com/).
3. **Playwright**: Installed during the setup process.

---

## Installation

### Clone the Repository
1. Open your terminal or command prompt.
2. Clone the repository:
    ```bash
   git clone https://github.com/the-imraaan/visual-regression-testing.git
3. Navigate to the cloned directory:

---

## Setup

1. Install dependencies:
    ```bash
    npm install  

  This will install all required Node.js packages and Playwright dependencies.

2. Install Playwright browsers:
    ```bash
    npx playwright install
  This command downloads and installs the required browsers for Playwright.

---
## Add page URLs

1. To add new pages. 
  - Navigate to the test file visual.spec.js
  - Add url 
  - Run test
And boom the first will show failed because it will set the base screenshot. Then run again you are good to go.
-- If want to skip any of elements on the page add the CSS class in the test_utils/screenshot.css

---
## Run Tests

1. Run All Tests:
  To execute all tests in the suite:
    ```bash
    npx playwright test

2. To run a specific test file:
    ```bash
    npx playwright test tests/international.test.js

3. View Test Report: After running the tests, you can view the Playwright HTML report:
    ```bash
    npx playwright show-report


N.B: While running on CI/CD make sure you captured baseline screenshot on the same server you are using in the CI environment.
To know more -> [Playwirght snapshot test](https://playwright.dev/docs/test-snapshots)