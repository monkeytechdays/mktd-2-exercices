import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Le module principale de l'application
import { AppModule } from './app.module';

// Active le mode de production si besoin
if (String('<%= ENV %>') === 'prod') { enableProdMode(); }

// Compile et lance le module principale
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('Bootstrap success'))
  .catch(err => console.error(err));
