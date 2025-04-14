# 🩺 API de Gestión de Pacientes - NestJS

Una API RESTful desarrollada con **NestJS**, que permite registrar, consultar y analizar pacientes, utilizando **PostgreSQL**, **Docker**, **JWT**, y documentación integrada con **Swagger**.

---

## 🚀 Instalación rápida

1. **Clona el repositorio**

```bash
git clone https://github.com/jorge7712051/hospital.git
cd hospital

```
2. **Instale las dependencias**

```bash
npm install
```


3. **Valide el archivo `.env`**

> ⚠️ **Nota:** Si bien el archivo `.env` no se recomienda subir, para esta prueba se subira con variables temporales.  
> ⚠️ **Nota:** La clave de OpenAI proporcionada estará disponible solo hasta el **15 de abril de 2025**.  
> ⚠️ **Nota:** Valide que los puertos **DB_PORT** y **SERVICE_PORT** esten libres de no ser asi cambie sus valores en el archivo `.env`.

4. **Levanta la app con Docker**

```bash
docker-compose up -d
```

> Esto levanta:  
> 🐘 PostgreSQL  
> 🚀 API NestJS en modo desarrollo

5. **Importe la coleccion de postman**

Si esta usando Postman importe el archivo **hospital-3-astronautas.postman_collection.json**.

---

## 🧪 Endpoints

Una vez levantado, accedé a la documentación Swagger:

📘 [http://localhost:3000/api](http://localhost:3000/api)

---

## 🔐 Autenticación JWT

Login simulado:

```http
POST /auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin"
}
```

> Devuelve un token JWT que se puede usar en Swagger con el botón **Authorize**.

---

## 🧬 Endpoint especial: Diagnóstico AI

```http
POST /pacientes/:id/diagnostico-ai
Authorization: Bearer <token>
```

Este endpoint toma el `historial_medico` del paciente y genera un diagnóstico sugerido utilizando la API de OpenAI (ChatGPT).

---

## 🧠 Stack principal

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)
- [JWT](https://jwt.io/)
- [OpenAI API](https://platform.openai.com/)

---

## 📁 Estructura del proyecto (simplificada)

```
src/
├── auth/
├── config/
├── db/
├── modules/
├── shared/
├── main.ts
├── app.module.ts
.env
docker-compose.yml
Dockerfile
```

---

## ✅ TODOs

- [x] CRUD de pacientes
- [x] Seguridad con JWT
- [x] Diagnóstico AI
- [x] Auditoria del consumo de Diagnostico basado en AI
- [x] Docker y migraciones automáticas

---

## 👨‍⚕️ Autor

Desarrollado por Jorge leonardo Correa.

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.
