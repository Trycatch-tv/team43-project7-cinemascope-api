# CinemaScope API
[![Build Status](https://dev.azure.com/LuisLopezOrg/CinemaScope/_apis/build/status%2FBuild%20CinemaScope%20WEB%20-%20DEV?branchName=develop)](https://dev.azure.com/LuisLopezOrg/CinemaScope/_build/latest?definitionId=6&branchName=develop)

This repository contains the backend code for the CinemaScope application, built with Node.Js and Express.Js. It also uses a MySQL database for data storage.

## 🇺🇸 About this project
> This project has been developed for educational purposes, non-profitably, and with the sole aim of learning about the technologies used in its implementation. It is part of the initiative promoted by [TryCatch.TV](https://linktr.ee/trycatch.tv) (Collaborative Learning) to carry out projects collaboratively with various developers who are aiming to improve their skills in certain areas and for those who are looking for their first jobs as software developers.
> 
> We are not responsible for how this project is used or for any consequences that may arise from its use. All participants in this project have contributed voluntarily, and no one has been paid for their collaboration. The source code of this project is provided as-is, without any guarantees.
> 
> If you have any questions or comments, please do not hesitate to contact us.

## 🇨🇴 Sobre este proyecto
> Este proyecto se ha realizado con fines educativos, sin ánimo de lucro y con el objetivo meramente de aprender sobre las tecnologías con las que se ha implementado. Forma parte de la iniciativa impulsada por [TryCatch.TV](https://linktr.ee/trycatch.tv) (Aprendizaje colaborativo) para realizar proyectos de forma colaborativa con varios desarrolladores que están apuntando a mejorar sus habilidades en ciertas áreas y para aquellos que están en búsqueda de sus primeros empleos como desarrolladores de software.
> 
> Nosotros no somos responsables de cómo se use este proyecto ni de las consecuencias que puedan derivarse de su uso. Todos los participantes en este proyecto han contribuido de manera voluntaria y no se ha pagado a nadie por su colaboración. El código fuente de este proyecto se proporciona tal cual, sin garantías de ningún tipo.
> 
> Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros. 

## 📋 Prerequisites
Before running the code, the following prerequisites must be met:

- Node.Js must be installed (version 18 or higher)
- MySQL must be installed

## 🚀 Installation
1. Clone the repository on your local machine.
```sh
git https://github.com/Trycatch-tv/team43-project7-cinemascope-api.git
```

2. Navigate to the repository folder.
```sh
cd team43-project7-cinemascope-api
```

3. Install the dependencies.
```sh
npm install
```

4. Create a **'.env'** file in the project root and configure the necessary environment variables for the MySQL database connection.
```javascript
PORT=3010
DB_HOST=serverUrl
DB_USER=username
DB_PASSWORD=password
DB_NAME=CinemaScopeDB
```

5. Run the server.
```sh
npm start
```

The server will run on http://localhost:3010.

## 📖 Usage
The CinemaScope backend API is designed to be consumed by the application frontend. In addition to the documentation available at [Google Docs](https://docs.google.com/document/d/1Xie4OuQQERWbxGg42jhRy4DHsqGjC3w8yvWq9H2P6hU/edit?usp=sharing), we also have a Swagger page available [here](https://dev-cinemascope-api.azurewebsites.net/api-docs/).

## 🎉 Demo
To see a live demo of the CinemaScope application, please visit the following URL:
https://dev-cinemascope-web.azurewebsites.net/

## 🤝 Contributions
If you wish to contribute to the development of CinemaScope, please submit a pull request with your proposed changes. Make sure your changes are compatible with the MIT license.

## 📝 License
This project is licensed under the MIT License. See the LICENSE file for more information.
