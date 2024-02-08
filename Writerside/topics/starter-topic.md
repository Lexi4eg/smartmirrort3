# About smartMirrort3docs

This is the smartmirrort3 project documentation. It is a work in progress and will be updated as the project progresses.


## Getting Started
The whole application is produktion friendly build and will use a Docker and Docker-compose file for starting all the mikroservices and the next js Applicaion. 


## Technologies used 
There main technologies used in this project are:

- Next.js for the Fulstack Web Application (https://nextjs.org/)
- Kafka for handeling events from the Mirror itself like a button press and mdoe switch (https://kafka.apache.org/)
- Docker for containerizing the whole application (https://www.docker.com/)
- Postgres for storing the Tempeature and Humidity data (https://www.postgresql.org/)
- Prisma for the ORM (https://www.prisma.io/)
- Websockets for the real time communication between the Mirror and the Web Application (https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- Tailwindcss for the styling of the Web Application (https://tailwindcss.com/)
- Jest for the testing of the Web Application (https://jestjs.io/)

## What we want to achieve with this project
The project features a mobile webapplicaton under localhost:3000/remote and a web application that runs on a raspberry pi. The mirror application will be able to display the time, the weather, the temperature and humidity of the room and the news. The mirror will also have a button that can be used to switch between the different modes of the mirror. The modes are:
- Dashboard 1 A set of widgets that display the time, the weather, the temperature and humidity of the room and the news.
- Wordclock A wordclock that displays the time in words.
- Million Times A set of widgets that display the time, the weather, the temperature and humidity of the room and the news. The time is displayed in a different way than in Dashboard 1.

## Dashboard 1

