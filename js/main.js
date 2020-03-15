import '../sass/style.scss';

import * as data from './functions/fetchData';

window.addEventListener('load', () => {
    data.init();
    registerSW();
});

async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js');
      } catch (e) {
        console.log(`SW registration failed`);
      }
    }
  }

