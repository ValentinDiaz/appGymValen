import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"gym-app-a5e43","appId":"1:1022588656162:web:b3b3007927a773944fc87b","storageBucket":"gym-app-a5e43.firebasestorage.app","apiKey":"AIzaSyBDUr3Fqb0j-UMKPU1LThJVarIaNZXknQo","authDomain":"gym-app-a5e43.firebaseapp.com","messagingSenderId":"1022588656162","measurementId":"G-32245C9GR6"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
