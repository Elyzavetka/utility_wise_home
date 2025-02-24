# Utility Wise Home

## Table of Contents

- [Project Description](#project-description)
- [Preview](#preview)
- [Tech Stack](#Tech-stack)
- [Running the Project Locally](#running-the-project-locally)

## Project Description
A smart utility monitoring system for households that helps collect, store, and analyze data on electricity, water, and gas usage, while also providing tips to optimize costs and reduce spending.

## Preview
![cover image](https://github.com/Elyzavetka/utility_wise_home/blob/main/frontend/src/assets/project-preview.png)
![cover image](https://github.com/Elyzavetka/utility_wise_home/blob/main/frontend/src/assets/household-form.png)


## Tech Stack:

- **JavaScript**: The primary language for the frontend development.
- **TypeScript**: A programming language based on JavaScript that adds static typing, allowing me to define variable and function types to catch errors early and improve code quality.
- **React**: Used to build the user interface. Components are implemented to display and interact with data.
- **Context API**: Used to manage global state and pass data between components without the need for prop drilling.
- **Python**: The primary language for the backend development.
- **Django**: A Python web framework that simplifies the development of secure, scalable, and maintainable web applications. 
- **Vite**: A modern build tool and dev server, enabling fast builds and a smooth workflow for my web application.
- **GraphQL**: A query language that connects the React frontend with the Django backend, enabling efficient data requests and updates from the PostgreSQL database.
- **PostgreSQL**: A relational database used to store user information and text content associated with photo posts, such as titles and descriptions.
- **dotenv**: A module used to manage environment variables, allowing me to hide API keys and other sensitive information from the codebase.

## Running the Project Locally

To run the project on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- **Python**: (v3.8 or later recommended) [Install Python](https://www.python.org/downloads/)
- **PostgreSQL**: Make sure PostgreSQL is installed and running. [Install PostgreSQL](https://www.postgresql.org/download/)
- **Django**: Make sure Django is installed. You can install it using pip:
  
  ```bash
  pip install django
  ```
### Setting Up the Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/Elyzavetka/utility_wise_home.git
   cd utility_wise_home
   ```
2. Create a virtual environment and activate it:

  ```bash
  python -m venv env
  source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```
3. Install all dependencies from `requirements.txt`:

  ```bash
  pip install -r requirements.txt
  ```
4. Set up your PostgreSQL database
  Follow these steps to configure PostgreSQL:

  #### Create a PostgreSQL database

  Create a new database using PostgreSQL. You can do this from a PostgreSQL client (e.g., pgAdmin or command line). Here's an example SQL command:

  ```sql
  CREATE DATABASE utility_wise_home;
  ```
  #### Configure the database connection in settings.py: Open settings.py in your Django project and modify the DATABASES setting to match your PostgreSQL setup:
    ```python
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'utility_wise_home',  # The name of your PostgreSQL database
        'USER': 'your_postgresql_user',  # Your PostgreSQL username
        'PASSWORD': 'your_postgresql_password',  # Your PostgreSQL password
        'HOST': 'localhost',  # Usually 'localhost' if running locally
        'PORT': '5432',  # Default PostgreSQL port
      }
    }
    ```
  #### Run the migrations: 
    After the database is created and configured in settings.py, apply the migrations to create the necessary tables:
    ```bash
    python manage.py migrate
    ```



