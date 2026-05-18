# 💼 HeadHunter Mini-Clone (SPA)

Современное Single Page Application (SPA) для поиска и просмотра вакансий, реализующее базовый функционал платформы HeadHunter.

---

## 🔗 Demo & Links

⚡ Frontend (GitHub Pages):  
https://sultan-magomedov.github.io/hh/

🔌 Backend API (Render):  
https://hh-backend-cqgz.onrender.com

⏳ Важно: backend работает на бесплатном тарифе Render и может уходить в sleep mode (Cold Start ~30–40 секунд). Если вакансии не загружаются — подождите или откройте backend ссылку.

---

## 🔑 Тестовые данные

Для входа в систему:

Email: qwer@test.com  
Password: 12345678

---

## 🛠 Технологии

Frontend:
- React + TypeScript
- Redux Toolkit
- RTK Query
- React Router v6
- React Hook Form

Backend:
- JSON Server
- JSON Server Auth (JWT-подобная авторизация)
- REST API (mock server)

Deploy:
- GitHub Pages (frontend)
- Render (backend)

---

## 🚀 Функциональность

- Авторизация и регистрация пользователей
- Просмотр списка вакансий
- Детальная страница вакансии
- Фильтрация вакансий
- Сохранение сессии (localStorage)
- Работа с API через RTK Query
- Обработка loading / error состояний

---

## 🌐 API

Base URL:  
https://hh-backend-cqgz.onrender.com

Endpoints:
- GET /jobs — список вакансий
- GET /jobs/:id — вакансия по ID
- GET /users — пользователи

---

## 🧱 Архитектура

Frontend (React SPA)
→ RTK Query
→ REST API (Render)
→ json-server-auth
→ db.json (mock database)

---

## ⏳ Примечание

Backend размещён на бесплатном тарифе Render, поэтому возможна задержка первого ответа (cold start ~30–40 секунд). Это нормальное поведение сервиса.
