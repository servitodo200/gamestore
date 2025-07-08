// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Tu configuración de Firebase (pega aquí lo que te dio Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyC6s33u845B3EFlZNm1AHQXc3zEXYy8WrY",
  authDomain: "gamestore-beceb.firebaseapp.com",
  projectId: "gamestore-beceb",
  storageBucket: "gamestore-beceb.firebasestorage.app",
  messagingSenderId: "636722223063",
  appId: "1:636722223063:web:d21829acce28f5f0351d92"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
