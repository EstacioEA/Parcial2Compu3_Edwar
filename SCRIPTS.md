# Instalación y Configuración Básica

## 1. Instalar el CLI de NestJS
```bash
npm install -g @nestjs/cli
```

## 2. Crear un nuevo proyecto
```bash
nest new my-nest-app
```

## 3. Ejecutar el servidor en modo desarrollo
```bash
npm run start:dev
```

---

## 4. Instalar dependencias para TypeORM y PostgreSQL
```bash
npm install --save @nestjs/typeorm typeorm @nestjs/config pg
```

---

## 5. Instalar validaciones
```bash
npm install class-validator class-transformer
```

---

## 6. Env file que podrías utilizar
```plainttext
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5433
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=mydatabase
DB_SYNCHRONIZE=true
```
