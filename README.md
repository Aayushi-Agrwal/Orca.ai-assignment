# Orca.ai-assignment

This project is a Next.js application developed as an assignment for an interview with a company. The project includes various UI components and functionalities such as loading states, setup borders and scrollbars, dropdown icons, and responsiveness enhancements.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone <repository_url>
cd orca.ai-assignment
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

### 1. Loading State

- The application includes a loading state to enhance user experience while data is being fetched or components are being rendered.

### 2. Setup Border and Scrollbar

- Borders and scrollbars are set up to ensure a clean and consistent UI design.
- The setup section includes a bordered container with a scrollbar for improved navigation and content accessibility.

### 3. Dropdown Icon

- A dropdown component is implemented with a caret icon that rotates on click, indicating open or closed state.
- Ensures only one dropdown is open at a time for better user interaction.

### 4. Responsiveness

- The application is fully responsive and adjusts to various screen sizes, providing a seamless experience across devices.

### 5. User Profile Component

- Displays user information with an avatar and user details like name and designation.

### 6. Top Navigation Bar

- Includes a search bar, notification icon, dark mode toggle, and user profile avatar.

### 7. File Upload Section

- Allows users to upload files from Google Drive or their local computer.
- Shows available data integrations and their respective statuses.

## Future Fixes and Improvements

### 1. Enhanced Loading State

- Implement more detailed loading indicators, such as spinners or skeleton screens, to further improve user experience during data fetching.

### 2. Improved Dropdown Functionality

- Add animations and transitions to the dropdown components for smoother interaction.
- Enhance accessibility features for dropdowns, such as keyboard navigation and ARIA attributes.

### 3. Dark Mode

- Expand the dark mode functionality to ensure all components and pages are fully compatible.
- Allow users to save their theme preference (light/dark) using local storage or a database.

### 4. Additional Integrations

- Add more data integration options, providing users with a wider range of choices for data sources.
- Improve the UI for managing and configuring data integrations.

### 5. Testing and Performance Optimization

- Implement unit tests and integration tests using Jest and React Testing Library to ensure the reliability of components.
- Optimize performance by implementing code-splitting and lazy loading for components.

### 6. Documentation and Guides

- Add detailed documentation for each component, including usage examples and props descriptions.
- Create guides and tutorials to help new developers get started with the project and contribute effectively.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details
