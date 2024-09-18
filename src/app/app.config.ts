import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpHwrWMzjmK72-9KDazv560Ht4AHaWmPo",
  authDomain: "simple-crm-89ede.firebaseapp.com",
  projectId: "simple-crm-89ede",
  storageBucket: "simple-crm-89ede.appspot.com",
  messagingSenderId: "71568165541",
  appId: "1:71568165541:web:49c7b191ba286a95589b4c",
  measurementId: "G-FH0X62BJGM"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  
};
