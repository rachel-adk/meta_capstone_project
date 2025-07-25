# meta_capstone_project


## Intern Details
- **Intern:** Rachel Adorkor
- **Intern Manager:** Daniel Liu
- **Intern Director:** Clare Yip
- **Peer(s):** George Gong, Kyle Kolodziej
- **GitHub Repository Link:** https://github.com/rachel-adk/meta_capstone_project

## Overview
This project aims to address the challenge of paper-based medical records in Ghana, which complicates access to patient history during emergencies and hospital transfers. The web app will enable families to manage medical records, track symptoms, and log allergies, transforming analog health records into a connected, intelligent ecosystem to improve healthcare in Ghana.

- **Category:** Health
- **Story:** In Ghana, most medical records are still paper-based, making it harder for doctors to access patient history, especially during emergencies and hospital transfers. This leads to misdiagnoses and poor treatment outcomes. HealthConnect offers a digital solution for families to manage and access their medical history, symptoms, allergies and other critical information in one place.
- **Market:** The primary market includes individuals and families in urban and semi-urban areas of Ghana, where internet access is more prevalent.
- **Habit:** This web app is designed to be used on either a daily or weekly basis to track the user’s health information and logs.
- **Scope:** The core functionality focuses on managing medical history, allergies and symptom tracking(and proposed diagnoses).

## Product Spec

### User Stories

#### User Role
A mother living in an urban area who has to keep track of her children’s medical history and hers as well.

#### User Persona
- **Name:** Ama Agyeiwaa
- **Location:** Accra, Ghana
- **Occupation:** High school science teacher
- **Tech Comfort Level:** Uses Google apps, mobile banking, and other social media platforms like WhatsApp frequently
- **Motivation for Using the App:** Needs to keep track of her three kids’ medical history and also needs to track her allergy reactions
- **Potential Pain Points:** It might be hard for her to stay consistent with logging every medical condition each child has and any symptoms they might experience

#### User Stories
- User can create an account
- User can log into their account
- User can add their medical history to their account
- User can log allergic reactions they are experiencing (personal allergy history)
- User can use geolocation to find hospitals/clinics nearby
- User can easily retrieve all their information for their doctor when they need to.
- User can receive a diagnosis based on their symptoms through an algorithm

### Screen Archetypes
- **Authentication Screen:** Welcome Screen -> Login/Sign up screen -> Dashboard -> Profile Setup screen
- **Medical Dashboard:** Medical overview with other pages they can access
- **Medical Records Screen:** Medical history form where they can view their medical records and and create more
- **Symptom/Allergy Tracker:** System Entry Screen (to log in new symptoms/allergic reactions) -> Symptom History Viewer
- **Map:** Showing the hospitals/clinics near your location

### Data Model
The app uses structured data storage and incorporates external API data.
Tables in database include:
* Users
* Medical History
* Symptoms
* Allergies
* Notification Logs

### Server Endpoints
* POST/signup - Create new User
* POST/login -  Authenticate user and start session
* PUT/profile - Update user medical profile
* POST/symptoms - Log new symptoms
* GET/symptoms - Retrieve logged symptoms
* POST /diagnose - Get diagnosis suggestion based on symptoms
* GET/hospitals - Return nearby hospitals using geolocation
  

## Technical Challenges

### Technical Challenge #1 - Giving Users a Possible Diagnosis Based On Their Symptom Logs

#### What
This technical challenge involves building a feature that assists users in identifying possible illnesses based on their historically logged symptoms. The system analyzes symptom patterns to suggest likely diagnoses and offers recommendations for clinics that may be relevant to their needs. The solution involves both front-end and back-end engineering, alongside careful data processing and algorithmic diagnosis scoring.

#### How
* Provides users with a possible diagnosis derived from their symptom history.
* Analyzes user-inputted symptoms over time for more accurate assessments.
* Suggests likely illnesses based on cumulative symptom data.
  
####  Frontend
* Implements a symptom logger for users to easily and regularly record their symptoms.
* Displays a modal display showing:
* Possible diagnoses based on the user's symptom patterns.
* Recommended action and precautions user can take

####  Backend
* Processes and filters incoming symptom data from users.
* Tracks symptoms over time for each user to build a more robust diagnostic profile.
* Calculates diagnosis scores for possible illnesses using a defined scoring formula.

####  Engineering Approach
* Cleans and normalizes input datasets to ensure high-quality data for analysis.
* Determines appropriate weights for symptom metrics to prioritize significant symptoms.
* Applies a scoring algorithm that matches symptom histories against diagnostic criteria and generates suggestions.
* Fosters modular and scalable engineering to facilitate future improvements.


### Technical Challenge #2 - Reminders system for updating symptoms log

### How
The system is designed to keep users engaged in regularly updating their symptom logs by sending personalized reminders. These reminders are intelligently tailored to each user’s unique health context and interaction history, ensuring relevance and effectiveness.
### What
####  User Preferences Management
* Users have control over how often they receive reminders, with options such as daily, weekly, or custom intervals.
* The interface allows users to snooze or dismiss reminders, giving them flexibility and reducing annoyance.
* All user preferences are securely stored in the backend, enabling persistent and consistent reminder scheduling aligned with user choices.
####  Reminder Scheduling and Delivery
* The backend uses scheduling mechanisms (e.g., cron jobs) to trigger reminders at the appropriate times based on each user’s preferences and symptom update history.
* Integration with third-party communication services (email providers) ensures reminders reach users through their preferred channels.
* Reminders contain personalized content, including:
* A direct link or button for users to quickly update their symptoms.
####  Personalization Algorithms
* The system analyzes user data including current symptoms, previous diagnoses, and update frequency to tailor reminder content and timing.
* Advanced techniques, potentially including generative AI, may be employed to create dynamic, engaging, and contextually relevant reminder messages.
* This personalization aims to maximize user responsiveness and improve the quality of symptom data collected.
####  Interaction Tracking and Analytics
* The system tracks how users interact with reminders (e.g., whether they open, snooze, dismiss, or update symptoms after receiving a reminder).
* This data feeds into analytics to measure reminder effectiveness, such as open rates and update rates.
* Insights from analytics inform adjustments to reminder strategies, optimizing timing, frequency, and content to enhance user engagement over time.


### Database Integration
HealthConnect uses PostgreSQL as its primary database,and is managed through Prisma ORM. 

### External APIs
* Used Geoapify to help me locate nearby hospitals/pharmacies/clinics I can recommend to my user.
* Used Nodemailer for sending email notifications.
* Used Geolocation API to get user's location in order to recommend hospitals nearby

### Authentication Flow
####  User Registration(Sign up)
New users create an account and sign into their accounts with their username and password. During login, the password is verified using bycrpt for hashing.

####  Session Management
* Once authenticated, a session is created using express-session and stored in a secure cookie.
* This cookie is sent with every subsequent request, allowing the server to verify the user's identity without requiring them to log in again.
* Sessions persist across pages enabling seamless navigation within the app after login.

####  Protected Routes
* Middleware checks if a session exists before granting users access to protected routes.
* If a session is not found, the user is redirected to the homepage

#### Logout
* When the user logs out the session is destroyed and authentication cookie is cleared

### Visuals and Interactions
-**Multiple Views/Pages**-
User has access to pages like:
* Homepage
* Dashboard
* Medical History page
* Symptoms Page
* Allergy Page
* Nearby hospitals page
  
-**Interesting Cursor Interaction**-
* Designed a custom tooltip that gives user more information on the function of the location button in the hospitals page
  
-**UI Component with Custom Visual Styling**-
  * Using the user's location, I fetch nearby hospitals from the backend and render a scrollable list of hospitals and an interactive map showing hospital locations
    
-**Loading State**-
  * A loading state is shown on the login screen while the user awaits the authentication response. It improves feedback during async operations like getting the user's medical history, symptom logs and allergy logs.

