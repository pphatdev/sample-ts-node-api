<div align="center">
    <h1> Sample TS Node API 🌈🌞 </h1>
    <p>This Project Built form Sample project that using NodeJs [es6] with Postgres SQL</p>
</div>

## Project Structure 📂

### Project Sources
Control the APIs
```sh
├───configs
└───src
    ├───apis
    ├───controllers
    ├───helpers
    ├───middlewares
    └───models
```

## Clone the project 📂

```sh
git clone https://github.com/pphatdev/sample-ts-node-api.git
```

```sh
cd ./sample-ts-node-api
```

## To Start Project ♻️

### Config Database ⚙️

make sure your database local is working. copy `.env.exmaple` to `.env` than change the env configuration.

> If you skip this step you can't start the node service.

```env
# App Enviroment
VERSION="v1"
APP_NAME="REST APIs with NodeJs"
NODE_ENV="development"

# DB Connection
DB_HOST="your host"
DB_NAME="your database name"
DB_PORT="your PORT"
DB_USER="your username"
DB_PWD="your password"
```

```sh
cp .env.example .env
```

```sh
npm install
```

### Starting Server 〽️

Finally you can start the project.

```sh
npm start
```

and these what you see on terminal! 😎

```bash
♻️  Starting with: [development] Mode!

🌞 API development:
🚀 Localhost: http://localhost:3000/api/v1/
🚀 Local Service: http://127.0.0.1:3000/api/v1/
🚀 Host Service: http://{ipv4}:3000/api/v1/
```


## Bug Report

[Help me to Improve](https://github.com/pphatdev/sample-ts-node-api/discussions/new?category=general)
