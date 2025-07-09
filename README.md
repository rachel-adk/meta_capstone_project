# meta_capstone_project
[https://docs.google.com/document/d/1OuxD-0EHRsij-i9TRxmnC31e1u6vqAc9EU_3NCtQ3Wk/edit?tab=t.0]


## Intern Details
- **Intern:** Rachel Adorkor
- **Intern Manager:** Daniel Liu
- **Intern Director:** Clare Yip
- **Peer(s):** [George Gong](mailto:gong@meta.com), Kyle Kolodziej
- **GitHub Repository Link:** https://github.com/rachel-adk/meta_capstone_project

## Overview
This project aims to address the challenge of paper-based medical records in Ghana, which complicates access to patient history during emergencies and hospital transfers. The web app will enable families to manage medical records, track symptoms, and log allergies, transforming analog health records into a connected, intelligent ecosystem to improve healthcare in Ghana.

- **Category:** Health
- **Story:** In Ghana, most medical records are still paper-based, making it harder for doctors to access patient history, especially during emergencies and hospital transfers. This leads to misdiagnoses and poor treatment outcomes. My web app will offer families a solution to manage their medical records, track symptoms and log allergies. This web app aims to transform analog health records into a connected, intelligent ecosystem designed to improve the healthcare system in Ghana.
- **Market:** Individuals and families in urban and semi-urban areas (since internet access is needed for this web app).
- **Habit:** This web app will be used on either a daily or weekly basis to track the user’s health.
- **Scope:** The main aim of this web app is to help users keep track of their medical history and symptoms when they are ill. However, I am also considering including a period cycle tracker (this may be out of scope).

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
- User can scan/upload their lab results for safekeeping
- User can keep their account private until they want to share it with a medical practitioner
- User can log symptoms/allergic reactions with their diet plan to check if there’s a correlation between both
- User can use geolocation to find hospitals/clinics nearby
- User can set reminders for vaccinations and prescriptions they are required to take
- User can easily retrieve all their information for their doctor when they need to
- User can receive a diagnosis based on their symptoms through an algorithm

### Screen Archetypes
- **Authentication Screen:** Welcome Screen -> Login/Sign up screen -> Profile setup screen
- **Medical Dashboard:** Home/Dashboard with their recent logs
- **Medical Records Screen:** Medical History Form 
- **Symptom/Allergy Tracker:** System Entry Screen (to log in new symptoms/allergic reactions) -> Symptom History Viewer
- **Map:** Showing the hospitals/clinics near your location

### Data Model
The web app will include external data from APIs.

### Server Endpoints
[Describe the endpoints that your application is going to consume from your server. If you’re using REST, then you’ll probably want to include the method (GET/POST/etc) and the expected parameters (query parameters, body parameters, etc.)]

### Navigation

## Project Requirements
[Based on the [Project Guide](https://sites.google.com/meta.com/metau-intern/capstone-project/project-guide), describe how your project is going to be fulfilling each of the base project requirements.]

## Technical Challenges

### Technical Challenge #1 - [Name/Small Description]
#### What
[What problem are you solving, and what parts go beyond what you learned in CodePath?]

#### How
[Explain in words how you’ll solve this problem. You’re encouraged to expand on this section with pseudo-code, links to external frameworks, architecture/design diagrams, anything that you can use to explain this to others!]

### Technical Challenge #2
#### What
#### How

### Database Integration
[Describe what you are using for database storage. For example, Parse, MongoDB, Sequelize, etc.]

### External APIs
I will be using Google Maps to help me locate nearby hospitals/pharmacies/clinics I can recommend to my user.

### Authentication
[Describe how user authentication is handled for your project, including logging in and signing up. Also describe any kind of cookie/session management you’re doing and how you’re implementing it, and how this affects navigation between different screens by the same user.]

### Visuals and Interactions
- **Interesting Cursor Interaction**
- **UI Component with Custom Visual Styling**
- **Loading State**
