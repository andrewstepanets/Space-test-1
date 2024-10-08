# Space Test Task

This project implements the following requirements:

1. **Render the cheapest 5 items on landing sorted by price.**
2. **User should be able to toggle between showing the cheapest 5 items and all items.**
3. **User should be able to filter an item by name.**
4. **The solution is implemented using functional components in TypeScript.**
5. **Test coverage is provided using Cypress and Vitest.**
6. **Styling is done using Chakra UI, demonstrating modern styling approaches.**

## 🛠 Tech Stack

- **React**: Functional components using TypeScript.
- **Chakra UI**: For component styling.
- **Vite**: A fast build tool for modern web applications.
- **Cypress**: For end-to-end testing.
- **Vitest**: For unit testing.

## 🚀 Features

- Displays the cheapest 5 items sorted by price on page load.
- Allows users to toggle between the cheapest 5 items and all items.
- Provides a filter input to search items by name.
- Clear button toggles and resets the input filter.
- Hover effect on item rows to improve UI/UX.

## 📂 Folder Structure

- **cypress/**: Contains Cypress test files for end-to-end testing.
- **src/components/**: Contains the main components used in the project.
  - `test.tsx`: The primary component that displays and filters the items.
  - `test.spec.tsx`: The test file for the `Test` component, which includes unit tests.
  - `types.ts`: TypeScript type definitions for the data used in the component.
- **src/test-utils/**: Contains utility functions for testing.
  - `render-with-chakra.tsx`: A utility function to render components wrapped with Chakra UI's `ChakraProvider`.
- **src/**:
  - `App.tsx`: The root of the app, rendering the main component.
  - `main.tsx`: The entry point for the React application.
  - `setupTests.ts`: Configuration for setting up the test environment with `@testing-library`.
  - `vite-env.d.ts`: Type definitions for Vite.

## 💻 How to Run the Project

### Clone the Repository

```bash
git clone https://github.com/andrewstepanets/Space-test-1.git
cd space-test-1

```

### Install Dependencies

```bash
npm install

```

### Run the Development Server

```bash
npm run dev

```

This will start the app at http://localhost:8000

## Run Tests

### Cypress (End-to-End Testing)

- To open the Cypress UI for running tests interactively:

```bash
npm run cy:open

```

- To run Cypress tests in headless mode:

```bash
npm run cy:run

```

### Vitest (Unit Testing)

- Run unit tests using Vitest:

```bash
npm run test

```

## 📝 Task Breakdown

- **Functional Components**:
  The app is built using functional components with hooks like `useState` for managing the filter input and toggling between cheapest 5 items and all items.

- **Sorting and Filtering**:

  - Items are sorted by price and filtered by name in real-time.
  - The user can toggle between showing the cheapest 5 items or all items.

- **Styling**:

  - Chakra UI is used for styling components, ensuring modern and responsive UI.
  - Input fields, buttons, and item lists are styled for a clean and consistent user experience.

- **Testing**:
  - End-to-end tests are written in Cypress to ensure all functionalities work as expected.
  - Unit tests are written using Vitest for component logic.

## 🌐 Online Demo

You can view the live demo of the application on Netlify: [Online Demo](https://space-test-1.netlify.app/)
