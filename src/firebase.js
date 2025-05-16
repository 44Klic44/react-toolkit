
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Добавьте этот импорт

// моя конфигурация Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyBS7zwr26n_HCRQH09FkqhTUdJ-BiBIlxM",
  authDomain: "test-abae6.firebaseapp.com",
  projectId: "test-abae6",
  storageBucket: "test-abae6.firebasestorage.app",
  messagingSenderId: "952624919421",
  appId: "1:952624919421:web:4300d96ef8a4f02fa2d214",
  measurementId: "G-G46V53PHBT"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация аутентификации
const auth = getAuth(app);

// Экспортируем auth и app
export { auth };
export default app;