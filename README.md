# MediCheck Web Application

This repository contains the web application for MediCheck, built using Laravel for the backend, Vue.js for the frontend, and Tailwind CSS for styling. The application provides a user-friendly interface for medical checks, including symptom input and result analysis.

## Features

-   **User Authentication:** Secure login and registration system using Laravel's built-in authentication.
-   **Symptom Checker:** Allows users to input symptoms and get results based on an analysis algorithm.
-   **Responsive Design:** Utilizes Tailwind CSS for a responsive and mobile-friendly UI.
-   **API Integration:** Seamless integration with backend APIs for disease prediction and symptom analysis.

## Directory Structure

```
medicheck-laravel-vue-tailwind/
│
├── app/                   # Laravel application logic
├── bootstrap/             # Bootstrap files for Laravel
├── config/                # Configuration files for Laravel
├── database/              # Database migrations and seeders
├── node_modules/          # Node.js modules for Vue.js and other dependencies
├── public/                # Public assets, index.php for Laravel entry
├── resources/             # Vue.js frontend and Tailwind CSS assets
├── routes/                # Laravel routes
├── storage/               # Storage for logs and compiled files
├── tests/                 # Unit and feature tests
├── .env.example           # Example environment configuration
├── .gitignore             # Git ignore rules
├── artisan                # Laravel CLI tool
├── composer.json          # PHP dependencies and scripts
├── package.json           # Node.js dependencies and scripts
├── webpack.mix.js         # Laravel Mix configuration
└── README.md              # Project documentation
```

## Setup and Installation

### Prerequisites

-   PHP 8.0 or higher
-   Composer
-   Node.js and npm
-   MySQL

### Installation Steps

1. **Go To This Project**

    ```bash
    cd medicheck-laravel-vue-tailwind
    ```

2. **Install PHP Dependencies**

    ```bash
    composer install
    ```

3. **Install Node.js Dependencies**

    ```bash
    npm install
    ```

4. **Create Database in MySQL (Enter in your terminal)**

    ```bash
    mysql -u root -p
    ```

    ```bash
    CREATE DATABASE medicheck;
    ```

5. **Run Database Migrations**

    Migrate the database:

    ```bash
    php artisan migrate
    ```

6. **Build Assets**

    Compile the assets using Laravel Mix:

    ```bash
    npm run dev
    ```

7. **Run the Application**

    Start the development server:

    ```bash
    php artisan serve
    ```

    The application will be available at `http://127.0.0.1:8000`.

## Usage

After setting up the application, you can access it via the browser and start using the features such as user registration, symptom checking, and more.

## License

This project is coded by Lwin Ko Latt for Master of Science in Applied Computing final project.
