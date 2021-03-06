# Digital Urpaq

Group Project for coding lab course.

Project Title: “Digital Urpaq” IT-community website
 
Students:
* Mendigali Temir
* Domolakova Tolkyn
* Shukayeva Kundyz

Group name: Digital Urpaq

Tutor name: Salkenov Aldiyar

Date:  xx-xx-2021

Nur-Sultan 2021

## Introduction
Kazakhstan is considered a young developing country, where IT content is only gaining momentum. As Nathan Rothschild said, " Whoever owns information owns the world." This is what formed the idea to create a platform with the necessary data on information technologies and everything related to them in the modern world, which in due time will be available to all residents of Kazakhstan and not only. Technopark is a service complex designed for the development and implementation of innovative projects through the provision of technological business incubation services, material, and technical support for users.
## Project goals
The aim of the project is the creation of a technology park, which includes the organization and conducting of educational events and courses for training, retraining, and advanced training in the form of courses, seminars, and workshops with the involvement of specialists in the field of IT, giving possible jobs, the implementation of the proposed start-up projects and attract investors, it is also possible to buy merch. The project will focus on the development of technology start-ups and improving the culture of innovation in Kazakhstan.
## Project relevance
The project, called DIGITAL URPAQ, creates favorable conditions for the formation of innovative activities. This website can help many professionals find their place in the IT world. Beginners and those, who already have experience, can improve their skills with the help of the provided courses. What is relevant to our site is that the user can find the information they need without leaving the vastness of one site. Thus, it will contribute to the transition of the economy to an innovative type of development.
## Target audience
The information will be available to everyone who wants to become a part of the innovation community of Kazakhstan. Anyone can get the opportunity to develop their IT startup idea, attracting domestic and foreign investors with their project. Also, domestic IT companies, experts and mentors will be involved in the development of corporate innovations and interaction with young IT companies and the formation of a young generation of entrepreneurs.
## Risk and dependencies
Our project is not unique in Kazakhstan's information technology community. Analogs can be considered the most common and popular technology parks such as AstanaHub and Profit. AstanaHub is an international technology park of IT startups, where conditions are created for the free development of Kazakhstani and foreign technology companies. While Profit provides news from the field of information technology and review materials about different segments of the Kazakhstan IT market. Since these communities are very popular, the risk of our project remaining in the background among others. Perhaps, due to the fact that it will be difficult to promote the site, the attached budget will not pay off.
## Project features
It is planned to create a website that will host current news from the IT world, educational articles, fresh vacancies from employers and various types of advanced training courses. It is also planned to create a question-and-answer section, where specialists in a particular field will answer frequently asked and interesting questions, a window for offering startup ideas and posting it on a public blog to attract investors. Moreover, as a small bonus, users can purchase a personalized sword at affordable prices.
## Design
The website will have 6 main pages: news blog, Q & A section, merch purchase, jobs and internships, courses, and startup ideas. There will be sections with registration and login to the site. It is also planned to create an admin panel that will regulate the operation of the site, add, edit, and delete information.

![sitemap](docs/sitemap.png)

Picture 1. Digital Urpaq sitemap

## Modeling of the Concept of Database
The analysis of the subject area allows you to build a conceptual model. You need to select entities with their attributes and define semantic relationships between them. An entity is something that needs to be stored in a database. Entities can model specific or abstract concepts. Records about specific parameters of each entity are called attributes.
“ERD or Entity-relationship model, a graphical representation of entities and their relationships to each other, typically used in computing in regard to the organization of data within databases”
## Entity and Attributes
The first step in developing this project was defining the entities that will be stored in the database.
* UserStore
* Blog post
* Merch
* Vacancy
* Question
* Comment
* Cart
## Business rules
* Each blog post can be written by only one user.
* UserStore can buy many merch items.
* UserStore can respond to many vacancies/internships.
* UserStore can create many vacancies/internships.
* UserStore can add many merch items.
* UserStore  can ask many questions.
* UserStore can write many comments.
* UserStore have one and only one cart.
## Attributes 
* Regular users and admin have id,full name, date of birth, gender, phone number,address,email and password.
* Business users have id,the name of the company, phone number,address,email and password.
* Blog posts have post id,title,body,creation date, update date,created by user id.
* Merch item has item id,name,price and description.
* Vacancies/Internships have id,title,description,location,minimum and maximum salary,experience required for this job,information about is this internship or vacancy.
* Question has id,title,text and date time.
* Comment has id,question id,text and date time.
* The cart has a number of products.

![Entity relationship diagram](docs/erd.png)

Picture 2. Entity relationship diagram

## Project duration
For the implementation of this project, it is planned to spend about 2 months, that is, 8 weeks. The approximate date of the project's readiness is June 14.
Project budget
The following specialists take part in the development of the site: web designer, frontend developer, backend developer. For example, to make a website, you will need to pay for such expenses as a domain name, hosting, SSL, etc.
The concept of the future site, then its development usually begins with the design. A web designer develops logos, banners, and other graphic elements, thinks through site navigation, and determines where to place the text. The planned budget is 150,000 tenge.
Frontend-the developer makes templates for future site pages. Frontend is the code executed in the browser, which is responsible for the display of the site or web application, the performance of all elements on different devices, that is, on the client side. The cost of his work is 250,000 tenge.
The backend developer develops and deploys the server side of web resources, creates the basic logic and architecture of the future web application, and then writes algorithms for its functioning. The work of a backend developer costs 250,000 tenge.
The domain name represents what is typed in the browser before the user can access you, without it it will be impossible to access your site. The cost of a domain name is 4000 tenge per year. To protect sockets and encrypt sensitive information, you will need SSL certificates. The cost of an SSL certificate is 10,000 tenge per year. An equally important part is the site hosting. The cost of the web hosting package is 2000 tenge per month.
The total amount of the estimated budget is 1 million tenge.
## Requirements analysis 
Making a successful website is not an easy thing to do. It will not happen quickly or easily. It will take time, effort, and resources. We need to have a large number of technical skills. For example, we need to know how to program in HTML, CSS, JavaScript, and SQL. In addition to this, it is worth learning the frontend framework React and the backend framework Express. In order to make UI/UX at a very good level we have decided to use Material UI library, which will also need to be studied. Also to create a proper and normalized database we should create an entity relationship diagram and after that move it to the PostgreSQL database using the SQL language. Most of these technologies we learned at the university in the ICT and WEB technologies courses. Also, one of the major ingredients for success is teamwork. We need to divide the roles in the team, stick to the predetermined plan and help each other.

## Team information 
The fact is that web application development involves so many different tasks that it's almost impossible to imagine one person being able to perform each of them professionally. This is why a successful web application development project needs a good team.
Because a web application always has at least two components: a backend and a frontend. In our team, Kundyz takes on the role of a frontend developer. Her job is to program in HTML, CSS, JavaScript and use React js framework together with the Material UI library.
The role of backend developer has been taken by Tolkyn. She will be developing in Node js, using the Express framework and the PostgreSQL database.
Every team needs a leader who will take responsibility for making the most important decisions and pave the way to the team's goal. That role went to Temir. He will be involved in both frontend and backend development.
## Communication strategy 
Now, because of the quarantine, we do not have the opportunity to meet in person. However, we solved this problem and made the meeting online in the discord app. We offer ideas in correspondence, but we discuss them and choose and vote on the best idea during online meetings. After we have chosen an idea, we will continue to discuss how we can improve and implement this idea.
> Github repo https://github.com/mendigali/digital-urpaq
## Project methodology 
We prefer kanban methodology for the project.We chose this method to help our team reduce costs and become more efficient by visualizing and improving workflows. Thanks to the use of the Kanban board, we will improve our workflow. The essence of kanban is to divide the work into tasks and write each of them on cards. Then put the cards on the wall or board. Thus, Kanban will help us to facilitate planning, improve productivity, quality, and reduce production time.
## Timetable

| Week                       | Tasks                                                        | Expected start date | Finish date | Responsible team member |
|----------------------------|--------------------------------------------------------------|---------------------|-------------|-------------------------|
| 3 (19.04.2021-25.04.2021)  |  Create database                                             | 19.04.2021          | 25.04.2021  | Mendigali Temir         |
|                            | Implement user authorization and authentication              |                     |             | Domolakova Tolkyn       |
|                            | Create user registration and login pages                     |                     |             | Shukayeva Kundyz        |
| 4 (26.04.2021-02.05.2021)  | Implement business logic of Q&A on backend                   | 26.04.2021          | 02.05.2021  | Mendigali Temir         |
|                            | Implement business logic of Q&A on backend                   |                     |             | Domolakova Tolkyn       |
|                            | Create Q&A page                                              |                     |             | Shukayeva Kundyz        |
| 5 (03.05.2021-09.05.2021)  | Create Vacancies/internships page                            | 03.05.2021          | 09.05.2021  | Mendigali Temir         |
|                            | Implement business logic of vacancies/internships on backend |                     |             | Domolakova Tolkyn       |
|                            | Create Vacancies/internships page                            |                     |             | Shukayeva Kundyz        |
| 6 (10.05.2021-16.05.2021)  | Implement business logic of Merch on backend                 | 10.05.2021          | 16.05.2021  | Mendigali Temir         |
|                            | Implement business logic of Merch on backend                 |                     |             | Domolakova Tolkyn       |
|                            | Create Merch page                                            |                     |             | Shukayeva Kundyz        |
| 7 (17.05.2021-23.05.2021)  | Create Profile page                                        | 17.05.2021          | 23.05.2021  | Mendigali Temir         |
|                            | Implement business logic of Profile on backend             |                     |             | Domolakova Tolkyn       |
|                            | Create Profile page                                        |                     |             | Shukayeva Kundyz        |
| 8 (24.05.2021-30.05.2021)  | Implement business logic of Home page on backend             | 24.05.2021          | 30.05.2021  | Mendigali Temir         |
|                            | Implement business logic of Home page on backend             |                     |             | Domolakova Tolkyn       |
|                            | Create Home page                                             |                     |             | Shukayeva Kundyz        |
|  9 (31.05.2021-06.06.2021) |   Testing final website                                      | 31.05.2021          | 06.06.2021  | Mendigali Temir         |
|                            | Modify the main page                                         |                     |             | Domolakova Tolkyn       |
|                            |  Refine the design of the main page                          |                     |             | Shukayeva Kundyz        |
| 10 (07.06.2021-13.06.2021) | Fixing bugs in backend and frontend                          | 07.06.2021          | 13.06.2021  | Mendigali Temir         |
|                            | Final documentation and presentation                         |                     |             | Domolakova Tolkyn       |
|                            | Refine the website design                                    |                     |             | Shukayeva Kundyz        |

## Milestone
## Week 3
In the third week, in the period from 19.04 to 25.04, our team developed a database, wrote a backend and frontend for authorization and registration. The first step in creating a database was to create tables with attributes. Second, the tables have passed the normalization stage so that there are no many-to-many relationships. Next, using PostgreSQL, the database was implemented.

The next step is to write the backend code for authorization and registration. We used Node.js as the main programming language. First, we checked the validity of the username, email, and password for registration. To do this, we used the Joi library, which allows us to use ready-made functions to check data for validity. Our code also checked the authorization data, that is, the presence of a username and password in the database to successfully log in to the site.

The last plan is to create an authorization and registration page. At this stage, frameworks like React js and Material UI library were used. Using frameworks makes it easier to work with the frontend and reduces development time.

During this week, we encountered difficulties both using the new libraries and the correct operation of the backend with the database. In order to avoid problems, we used the Internet like many others, looking for examples and comparing them with our own code to identify the error. In addition, not all team members were familiar with React js and the Material UI library. Our teamwork helped solve this problem by having one of us give some lessons on using frameworks.
## Week 4
During this week, tasks such as creating a frontend and developing a backend for the question-answer section were carried out. We used the Material UI and React frameworks, which make it easier to work with the frontend. To develop the backend of the page, as well as in the previous week, it was used by Node.js.

Creating the design and writing the code for the page took a lot of time, as the smallest details were worked out. Cards were created for each question, which will be divided by difficulty rating. After selecting one of the questions, you can go to a separate page with this question with a full explanation, the answers adjacent to them, and you can also add your own answer. The complexity of the work was that not all the necessary components were in the Material UI or React libraries. In addition, we have some difficulties in adding new questions, that is, so far, the user can add an answer to a particular question, but there is no possibility to add the question itself. However, these are only temporary difficulties and the problem will be fixed soon.

If we talk about backend development, this is not an easy task. During this week, we improved the registration and authorization backend, that is, we divided the random code into folders for better readability and performance. Messy code is the first reason that often slows down page loading. Spaces, empty newlines, or unnecessary comments can increase the size of a website's stylesheet. Code becomes much cleaner by removing these unnecessary elements, and your files become as compact as possible. This will improve the overall speed of your website. Also, we linked the database to the backend of this page to read and add questions and answers from the database. The logic of adding answers to questions and placing them in the database was written. For example, we took the Dev Mastery channel, which explains how to make a clean architecture for Microservice APIs in Node.js.
## Week 5
In the fifth week, between 03.05 and 09.05, our team wrote a backend and frontend for the jobs/internships page.We used the Material interface and React frameworks, which make it easier to work with the interface, and we used Node to develop the backend of the page.js.

As in the previous week,cards were created for each vacancy. By selecting one of the vacancies, you can go to a separate page with this vacancy with a full explanation.We have added another card where you can create vacancies.

The last task was to develop the backend and link to the frontend.With the help of the backend, you can add vacancies and they are added to the database.After linking backend with frontend, you can see that only after authorization can a person create vacancies and add questions ,and if not, then only read it.

## Overview

## About your team 

## Members and their roles 

Web application development involves so many different tasks that it is almost impossible to imagine that one person can perform each of them professionally. This is why a successful web application development project needs a good team.
As we know, a web application always has at least two components: the backend and the frontend. 
In our team, Kundyz took on the role of a frontend developer. Her work consisted of programming in HTML, CSS, JavaScript, and using the React js framework along with the Material UI library.
Tolkyn took on the role of the backend developer. She was developed in Node js, using the Express framework and the PostgreSQL database.
Temir assumed the role of a leader who took responsibility for making the most important decisions and participated in both the development of the interface and the development of the backend.

## Communication strategy 

As we know now, due to the pandemic, we did not have the opportunity to meet in person. However, we solved this problem and first made an online meeting in the discord app,then switched to Microsoft Teams. We suggested ideas in correspondence, but discussed them, chose and voted for the best idea during online meetings. After we selected the idea, we continued to discuss how we can improve and implement this idea. And during online meetings, we chose the website design together and wrote the code.

## Motivation 

The project, called DIGITAL URPAQ, creates favorable conditions for the formation of innovative activities. This website can help not only professionals and beginners find their place in the IT world. Users write here interesting materials on different topics and can read other topics. Here you can ask questions and get answers, discuss current topics, look for a job or freelance, without leaving the vastness of one site. Thus, it will facilitate the transition of the economy to an innovative type of development.

## High-level project scope 

This is a completely brand new site,we created everything from scratch. First of all, of course, we decided on what we will program and what libraries we will use and what database we will use. After that, we came up with the design of the site and the design of each page, and wondered how it should look, what functions to add and where they should stand, and then the creation process began. During the creation, we discussed how we can improve and what else we can add or remove. After such stages, this site was created.

## Target audience/market 

The information will be available to everyone who wants to become a part of the innovation community of Kazakhstan. Anyone can get the opportunity to develop their IT startup idea, attracting domestic and foreign investors with their project. Also, domestic IT companies, experts and mentors will be involved in the development of corporate innovations and interaction with young IT companies and the formation of a young generation of entrepreneurs.

## Project goals and team interests

## Project goals 

The goal of the project is to create a technology park, which includes organizing and conducting educational events and courses for training, retraining and advanced training in the form of courses, seminars and master classes with the involvement of IT specialists, providing possible jobs, implementing proposed start-up projects and attracting investors, as well as purchasing merchandise. The project was aimed at developing and improving the culture of innovation in Kazakhstan. During 10 intensive weeks, unfortunately, we were not able to implement everything that was planned: conducting educational events and placing courses, implementing startup projects. However, the main goals were achieved. On the Digital Urpaq website, you can post and find vacancies and internships; read news and events in the IT field; ask questions about programming and IT in general, and users and moderators will give answers; site users can purchase exclusive Digital Urpaq merch at favorable prices.

## Team interests

1. Understanding the React js and CSS framework by developing a front-end site
2. Understanding the concept of website development
3. Understanding how frontend and backend work and how they relate to each other
4. Consolidation of knowledge of working with the database, queries and relationships
5. Mastering the work of connection of the site content with the database
6. Establish an understanding of the principles of website design
7. Improve teamwork skills especially in remote format

## Phases

Below are the phases of creating a Digital Urpaq website from scratch:

Phase-1: Develop the concept, layout and design of the site

Phase-2: Creating a front-end site using React js, Material UI frameworks

Phase-3: Work out the back-end for better site functionality

Phase-4: Connecting the API to connect the front-end and back-end

## Content structure

## Content types

A website contains 6 main pages:
News blog

Q&A section

Vacancy

Merch

Cart

Login/Profile

The news blog page is the main page where users can read or share interesting material on various topics. The Q&A page, where you can ask questions about IT and get answers to them. The Vacancy page will help you find the job you need, and for the employer to search for employees by creating vacancies on this page.The Merch/Shop and Cart page here you can see our exclusive merch and by clicking on the view button you can view the full information and by clicking on the buy button you can add to the cart and buy them.And of course the Login page here you can register or if you have an account you can log in to your page.

## Design 

Website design: some pages were drawn by yourself and at the bottom you can see these drawings, and some were inspired from other sites such as astanahub,vc.ru.
              
Based on the opinion of "Simple is the best", we tried to create a design that is very simple and at the same time pleasant in the style of minimalism.The design was created based on the Material UI library. We used conventional typography and contrasting colors such as green, orange, yellow, and so on. And now our site has a dark and light theme for general convenience.

## Functionality

For more functionality, users must register or log in to the site. To register, you need to fill in 3 fields: username, e-mail, and password. All fields go through validation and enter data into the database. During authorization, the data is also checked for validity and for the presence of data in the database. In order to ask a user a question or answer a question, add a vacancy or respond to it, you need to register or log in to the site. In addition, when a user adds a product to the cart, they can increase the quantity of the selected product. Moreover, for certain users, the admin status is awarded, which allows you to edit, delete and add posts, questions, vacancies, products in the online store.

## Hosting

In our project, we used Github pages. We uploaded files to Github using the terminal, Github Desktop, and directly to the IDE. To open the project on your device, download the archived ZIP file and open the project in the IDE. Then launch the terminal, type "npm install" and press ENTER to download the package. Then type "npm start", press ENTER and your server will start from the localhost 3000.

## Accessibility

Our site is accessible to everyone, as a user-friendly interface was used. The website design is very simple and intuitive for people of all ages. For better readability, we used dark text on a light background and vice versa. Black-and-white diagrams simplify the perception of text and shapes for people with color blindness. Also, for the text, the Roboto font is used, which is the most accessible for everyone. Roboto uses simplified characters which stand apart from each other and appear easier to read for users with dyslexia and visual impairment. Site is available on both computers and mobile devices.

## Summary

Most of the goals set at the initial stage of the development of the website concept were implemented. The team created a multifunctional website with placement and response to vacancies, a blog of news and events in the IT field, a question-answer section and the sale of our own named merch. With help of this experience in project development, we improved our skills in teamwork, programming, and finding the necessary information.
We encountered some difficulties when developing the project. Basically, the challenges were when writing the front-end of the site code, these are some separate parts of the page. For example, we found it difficult to add a function button to the product card, where we could immediately increase the quantity of a particular product. After some time of fixing bugs, it was decided that such a button will only be in the store basket itself.
In the future, we plan to develop the project, add the functionality that we did not have time to do, as well as work on the security of the site. We had plans to use the JSON Web Token, but due to our lack of knowledge and time, we were unable to implement our plans. In the future, the correct time distribution will be taken into account, and all the shortcomings will be taken into account.

Temir:

In this project, I had a leadership role so I had to share the roles in the team, stick to a predefined plan and help other participants and so developed my leadership skills and improved my teamwork skills. Although I have worked with these frameworks and libraries before, during this project, having encountered some problems, I used all the available resources to be able to overcome the difficulties. I learned even more and improved my skills.

Tolkyn:

For myself, first of all, I improved the work with the backend of the site, and secondly, I understood the principle of the front-end. With help of this project, I have improved my communication and teamwork skills, even in the remote format. During the development of the site design, I learned how to correct the text and graphics for better readability of users.

Kundyz:

Before that, I knew how to program in HTML, CSS, JavaScript, and SQL. In this project, new frameworks and libraries were used that had not worked before, so I started to study them from the very beginning. Before that, I mainly paid attention to the design of the website and worked with the frontend. This time I can say that the first ones worked with the backend and connected them to the frontend. In short, I think that through this project, I learned a lot about websites, what, where, and how it should work, and learned how to work as a team.
