# stacc-technical-interview
This repository contains the code I have used to solve the task given by Stacc as part of the technical interview

## Task description
In this task, I have attempted encourage saving by adding milestones that can be reached. In this current solution, you will start with a page showing a list of the existing accounts. Once you pick an account, you will be sent to that accounts page, which shows the amount of money it has in its balance, as well as the current progress towards the upcoming milestones and personally added goals, with the upcoming milestone and next personal goal grouped with the account info, while the rest of the goals and milestones are in another box that can be scrolled through. The application can be used on all devices. 

The application contains a Next JS api, and a Next JS frontend which uses data stored in the api.

## How to run
If you want to run this project on your own computer, you have to do the following
 1. Clone this repository
 2. Enter the repository and use "npm install" (alternatively replace npm with the correct keyword for your system) to install all packages, dependencies and libraries
 3. create a .env file and add a variable NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
 4. Use "npm run build" to create a runnable build for the project
 5. Now use "npm run start" to run the build you created in the previous step
 6. Navigate to localhost:3000 to load the page
(alternatively, on step 4 you can also use "npm run dev" and skip to step 6)

If you wish to, you can use the production build available at instead:
  https://stacc-technical-interview.vercel.app/
