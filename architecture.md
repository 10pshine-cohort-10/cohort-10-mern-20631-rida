# Architecture

## Overview

MERN Notes App: users sign up, log in and manage private notes with a rich text editor.

## Tech Stack

Node.js, Express 5, MongoDB (Mongoose), React, JWT auth, Pino (planned), Mocha/Chai and Jest (planned), SonarQube (planned).

## Backend Structure

backend/src: config (db), models (User, Note), controllers, routes, middleware, utils.
Flow: request → route → middleware (auth) → controller → model → response.

## Database Schema

- User: name, email (unique), password (hashed, hidden by default), timestamps
- Note: title, content, user (ObjectId → User), timestamps

## Authentication

- Passwords hashed with bcrypt (10 salt rounds)
- JWT issued on signup/login, sent as `Authorization: Bearer <token>`
- `protect` middleware verifies the token and attaches the user to `req`

## API Endpoints

| Method | Route            | Auth | Purpose      |
| ------ | ---------------- | ---- | ------------ |
| POST   | /api/auth/signup | No   | Register     |
| POST   | /api/auth/login  | No   | Log in       |
| POST   | /api/auth/logout | Yes  | Log out      |
| GET    | /api/auth/me     | Yes  | Current user |
