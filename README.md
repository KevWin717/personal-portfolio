# Kevin Nguyen's Personal Portfolio Website

Welcome to the repository of my personal portfolio website—a showcase of my skills, projects, and professional journey as a Software Engineer and Web Developer.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About the Project

This portfolio website is a dynamic and responsive single-page application designed to highlight my professional experience, technical skills, and personal projects. It serves as a digital resume and a platform to connect with potential employers, collaborators, and like-minded professionals in the tech industry.

**Live Demo:** [https://kevinnguyen717.github.io/my-portfolio](https://kevinnguyen717.github.io/my-portfolio)

---

## Features

- **Modern and Responsive Design:** Optimized for various devices, ensuring a seamless user experience on desktops, tablets, and mobile phones.
- **Interactive Sections:**
  - **About Me:** A brief introduction and professional summary.
  - **Skills:** A showcase of technical proficiencies and tools.
  - **Projects:** Detailed presentations of selected projects with links to repositories and live demos.
  - **Contact:** Easy access to contact information and social media profiles.
- **Smooth Scrolling Navigation:** Intuitive navigation through sections with animated scrolling.
- **Dynamic Components:** Built with React.js for efficient rendering and component-based architecture.
- **Continuous Deployment:** Integrated with GitHub Actions for automatic deployment upon updates.

---

## Built With

- **Front-End:**
  - [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Styling and Design:**
  - Flexbox and CSS Grid for responsive layouts.
  - CSS Variables for theme management.
- **Deployment and CI/CD:**
  - [GitHub Pages](https://pages.github.com/) for hosting.
  - [GitHub Actions](https://github.com/features/actions) for continuous integration and deployment.

---

## Getting Started

To explore the code and run the project locally, follow these steps.

### Prerequisites

- **Node.js** and **npm** installed on your machine.
  - Download from [Node.js Official Website](https://nodejs.org/).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kevinnguyen717/my-portfolio.git

2. Navigate to the Project Directory
   
   ```bash
   cd my-portfolio

3. Install Dependencies

   ```bash
   npm install

4. Start the Development Server

   ```bash
   npm start
   
Runs the app in development mode.\ Open http://localhost:3000 to view it in your browser.

The page will reload if you make changes.\ You will also see any lint errors in the console.

---

## Usage

- Explore the Codebase

  -Component-based structure located in the src/components directory.

- Styles are modularized with corresponding CSS files.

  -Customize the Content

- Update personal information, skills, and projects in the respective components.

  -Modify styling in CSS files to match your design preferences.

- Build for Production

     ```bash
     npm run build

Generates an optimized production build in the build folder.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make changes.  
You will also see any lint errors in the console.

### `npm test`

> **Note:** This project currently does not have test configurations. You can set up testing with Jest or other testing libraries if needed.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

### `npm run deploy`

Deploys the production build to GitHub Pages. Ensure that the `homepage` field in `package.json` is set to your GitHub Pages URL.

---

## Deployment

The website is automatically deployed to **GitHub Pages** through **GitHub Actions** upon pushing changes to the `main` branch.

### To Deploy Manually

#### Build the Project

    ```bash
    npm start

### Deploy to GitHub Pages

    ```bash
    npm run deploy

Ensure the homepage field in package.json is set to:

https://kevinnguyen717.github.io/my-portfolio
