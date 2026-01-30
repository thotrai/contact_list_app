# Contact List Test Automation Project
This repository contains an end-to-end test automation project for the Contact List App, built as part of a technical assignment and extended to demonstrate real-world QA automation practices.
The project focuses on test structure, maintainability and test strategy, combining UI and API automation to achieve fast, reliable and meaningful test coverage.
The framework follows the **Page Object Model (POM)** and focuses on clean structure, reusability and maintainability.

---

## 🚀 Project Overview

The goal of this project is to validate core user flows of a web application that manages users and contacts.
It covers:
* User authentication (signup & login).
* Contact management (add, view, delete).
* Error handling and validation.
* End-to-end business flows.

To achieve this efficiently, the project uses a hybrid testing approach, where:
* API calls are used to prepare test data and validate backend behavior.
* UI tests focus on verifying user experience and frontend behavior.
This approach keeps tests fast, stable and scalable, while still providing confidence in the system as a whole.

---

## 🧪 What’s Covered
### UI Automation
* Signup and login flows.
* Add, view and delete contacts.
* Logout and re-login validation.
* Unhappy paths (invalid credentials, missing required fields).

### API Automation
* Create user via API.
* Add contact via API (authenticated with Bearer token).

API Documentation:
https://documenter.getpostman.com/view/4012288/TzK2bEa8#abe537df-fccc-4ee6-90d2-7513e3024d6b

### End-to-End Flow
Complete flow combining: Signup -> Login -> Add contact -> Verify persisted data.

---

## 🛠 Tech Stack
> ⚠️ The project was developed and tested using the versions listed below. 
- **Playwright** `v1.58.0` – UI & API test automation.
- **TypeScript** `v5.9.3` – Strong typing and maintainable code.
- **Node.js** `v22.16.0` – Runtime environment.
- **npm** `v10.9.2` – Dependency management.

---

## 🔧 Installation
### 1. Clone the repository
```bash
git clone https://github.com/thotrai/contact_list_app.git
cd contact_list_app
```
### 2. Install dependencies
```bash
npm install
```
### 3. Install Playwright browsers
```bash
npx playwright install
```
---

## ▶️ Running the Tests
### Run all tests
```bash
npx playwright test
```
### View HTML report
```bash
npx playwright show-report
```
---

## 📁 Project Structure 
```bash
├── tests/
│   ├── api/          # API tests
│   ├── auth/         # Authentication UI tests
│   ├── contact/      # Contact-related UI tests
│   └── fullflow/     # End-to-end flow tests
├── pages/            # Page Object Models
├── utils/            # Helper and API utility functions
├── test-data/        # Static test data (JSON)
├── playwright.config.ts
└── tsconfig.json
```
---
