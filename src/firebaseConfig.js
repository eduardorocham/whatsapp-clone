import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBM4AeM2hpFFMCfRT4YJPc5mm1vzuQhRWs",
    authDomain: "whatsappclone-66eea.firebaseapp.com",
    projectId: "whatsappclone-66eea",
    storageBucket: "whatsappclone-66eea.appspot.com",
    messagingSenderId: "379218433408",
    appId: "1:379218433408:web:0c1c8f847152575d861d65"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
