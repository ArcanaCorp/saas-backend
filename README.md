# Arcana SaaS – Backend API

Backend oficial del sistema SaaS de Gestión Empresarial.

Este servicio expone una API REST que permite:

- Autenticación con JWT
- Gestión de usuarios
- Gestión de clientes
- Gestión de proyectos
- Métricas para dashboard
- Control de roles y permisos

---

## 🧠 Arquitectura

El proyecto sigue una arquitectura por capas:

src/
- routes → Definición de endpoints
- controllers → Manejo de request/response
- services → Lógica de negocio
- models → Modelado de datos
- middlewares → Autenticación y permisos
- config → Configuración global
- utils → Funciones auxiliares

---

## ⚙️ Stack Tecnológico

- Node.js
- Express
- JWT
- bcrypt
- dotenv

---

## 🚀 Instalación

1. Clonar el repositorio


git clone <REPO_URL>
cd arcana-saas-backend


2. Instalar dependencias


npm install


3. Crear archivo `.env`


PORT=4000
JWT_SECRET=supersecret


4. Levantar servidor en modo desarrollo


npm run dev


Servidor disponible en:
http://localhost:4000

---

## 📦 Scripts


npm run dev → modo desarrollo con nodemon
npm start → modo producción


---

## 🔐 Autenticación

El sistema utiliza JWT.

El token debe enviarse en el header:


Authorization: Bearer <token>


---

## 🌿 Convención de Ramas

- main → versión estable
- develop → integración
- feature/nombre-feature
- fix/nombre-fix

No se permite trabajar directamente en main.

---

## 📌 Reglas del Proyecto

- No subir archivos .env
- No hacer merge sin Pull Request
- Todo endpoint debe manejar errores
- Todo endpoint debe validar datos
- Código limpio y organizado

---

## 🎯 Objetivo del Proyecto

Este backend es el núcleo del SaaS y será utilizado por:

- Frontend Web (panel admin)
- Frontend Mobile (app cliente)

Debe mantenerse escalable, seguro y modular.