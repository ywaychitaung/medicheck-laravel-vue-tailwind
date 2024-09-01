# MediCheck (Laravel-Vue-Tailwind)

MediCheck-Laravel-Vue-Tailwind web app is a disease prediction website developed using Laravel, Vue.js and Tailwind CSS. Users can enter symptoms into the website to receive disease predictions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   PHP >= 8.1 and Composer
-   Node.js and npm

## Installation

Follow these steps to install the project on your local machine:

1. **Clone the repository** (Recommended - Use GitHub CLI)

```
gh repo clone Team7Labs/medicheck-laravel-vue-tailwind
```

```
cd medicheck-laravel-vue-tailwind
```

2. **Install PHP dependencies**

```
composer install
```

3. **Install JavaScript dependencies**

```
npm install
```

4. **Copy the environment file**

```
cp .env.example .env
```

Then, open the `.env` file and modify the database configuration and any other environment variables as necessary.

5. **Generate an application key**

```
php artisan key:generate
```

6. **Run database migrations**

```
php artisan migrate
```

7. **Compile assets with Vite**

```
npm run dev
```

8. **Serve the application**

```
php artisan serve
```

## Usage

Provide instructions on how to use the project after installation, such as how to access the dashboard, create an account, etc.

## Contributing

Guidelines for contributing to the project. You can include steps for forking the repository, creating a feature branch, and submitting a pull request.

## License

Specify the license under which the project is made available.
