

# Task-Tracker

This project is a responsive landing page with a clean and modern design. It includes sections such as a header with navigation, introductory content with text and images, a client/partners section with a sliding carousel, and footer information with social media links and contact details.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Customization](#customization)
- [License](#license)

## Project Overview

This landing page template is designed with simplicity and flexibility in mind. It's built using **HTML5**, **CSS3**, and **JavaScript** (with jQuery). The page is responsive and includes various sections like an image carousel, and an email subscription form. The project uses Bootstrap and Slick Carousel for styling and interactive elements.

### Sections Included:
- **Header**: Navigation bar with logo and links to various sections (Home, Feature, Contact).
- **Intro Section**: Image and text layout for introduction.
- **Client/Partners Section**: Displays logos of partners/clients with a carousel slider.
- **Feature Section**: A balanced section with images and text showcasing features.
- **Industries Section**: Highlights industries served with an image and text alignment.
- **Subscribe Form**: Collects user information (name and phone number).
- **Footer**: Contains social media links and contact information.

## Technologies Used

- **HTML5**: Markup language used to structure the web page.
- **CSS3**: For styling the page and making it responsive.
- **Bootstrap 4.5**: Used for responsive layout and pre-built components.
- **Slick Carousel**: jQuery plugin used for the client/partners logo slider.
- **JavaScript/jQuery**: For form validation and slider functionality.

## Features

- **Responsive Design**: The layout adapts across all device sizes, from desktops to mobile.
- **Interactive Carousel**: A scrolling slider that displays partner logos.
- **Form Validation**: Simple form validation using JavaScript to check if fields are filled out.
- **Modern UI**: Clean and modern user interface with a smooth user experience.
- **Social Links**: Links to social media platforms included in the footer.
  
## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vaibhavnsalve/Task-Tracker.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd Task-Tracker
   ```

3. **Open `index.html` in your browser**:
   You can either open the `index.html` file directly in your browser, or if you prefer a server setup, use a tool like **Live Server** in VSCode.

4. **(Optional)** Install **Live Server** extension for VSCode to auto-refresh the page on code changes.

## Usage

- You can modify the content in the HTML file to customize the text, images, and links to match your own brand or website.
- Styles can be updated in the `styles.css` file to adjust colors, fonts, layout, etc.
- Add new client logos or partners by adding image files into the carousel section in the HTML.

## File Structure

```plaintext
Task-Tracker/
│
├── index.html          # The main HTML file for the landing page
├── styles.css          # Custom CSS styles for the landing page
├── script.js           # JavaScript file for client carousel and form validation
├── img/                # Folder containing images used in the project
│   ├── image1.jpg
│   ├── logo1.png
│   └── ...
└── README.md           # Project documentation
```

## Customization

- **Images**: Replace the images in the `img` folder with your own and update the `src` attribute in the HTML.
- **Logo Slider**: Add new partner logos to the slider by adding new `<div>` elements inside the `.customer-logos` section.
- **Colors**: Change the color scheme by updating variables or direct styling in the `styles.css` file.

## License

This project is open source and available under the [MIT License](LICENSE).
