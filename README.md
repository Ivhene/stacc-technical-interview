# stacc-technical-interview
This repository contains the code I have used to solve the task given by Stacc as part of the technical interview

## Task description
In this task, I have attempted encourage saving by adding milestones that can be reached. The original plan was to have the page change color based on which milestone you were at, however that eventually had to be scrapped (more on this under comments). In this current solution, you will start with a page showing a list of the existing accounts. Once you pick an account, you will be sent to that accounts page, which shows the amount of money it has in its balance, as well as the current progress towards the upcoming milestones and personally added goals, with the upcoming milestone and next personal goal grouped with the account info, while the rest of the goals and milestones are in another box that can be scrolled through. The application can used on all devices. 

The application contains a Next JS api, and a Next JS frontend which uses data stored in the api. There is also a link in this README.md file to a figma used to sketch up the UI

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

## Comments
The original plan was to have next.js frontend, as I have a lot of experience using this technology through my internship at Stacc X, and a Java Spring Boot backend, which i have used a lot in my studies, however when testing the backend api I encountered a weird bug when using a put method to update the balance of an account where it would work except for a few select values (ex 25.0). I then decided to make my api in the already excisting Next JS project, and also ended up not having time to implement the frontend that would have used the bugged api endpoint. 

I mentioned earlier that I scrapped the feature of having the account page change color depending on the milestone. In my current code, under the functions folder, you can find the function that was supposed to pick the color. The problem I was having was simply that for some reason, it didnt use the color that the function returned. However, when inspecting element on the page, the classname attribute showed with the correct background color in it, and even stranger, if I hardcoded the exact same value that the page would have used once, then went back to the dynamic code, it would work for that specific color on that specific tag. I couldnt find a fix and ultimately used so much time trying to fix it that I ran out of time. 

To see what the color changes would have looked like, check out the Figma where I made the sketches used in this project: 
  https://www.figma.com/file/HMi5UytPwZ1CI1o1Y9klxx/Stacc-Challenge?type=design&node-id=0-1&mode=design&t=JJtGxJJYrap1ktfB-0

I can also add that while I had more plans for this solution, like having a deposit/withdraw oportunity, and the oportunity to add goals to an account, I ultimately couldnt do it within the allocated timeframe due to traveling and my nephews first birthday. I am confident that I would be able to add the planned features with more time (although not this week due to a busy deadline schedule for my studies)
