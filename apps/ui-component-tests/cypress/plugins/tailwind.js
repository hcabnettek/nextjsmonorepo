/// <reference types="cypress" />

before(() => {
  cy.exec('npx tailwindcss -i ../../apps/myaccountui/pages/styles.css -m').then(
    ({ stdout }) => {
      if (!document.head.querySelector('#tailwind-style')) {
        const link = document.createElement('style');
        link.id = 'tailwind-style';
        link.innerHTML = stdout;

        document.head.appendChild(link);
      }

      if (!document.head.querySelector('#tailwind-cdn')) {
        const script = document.createElement('script');
        script.id = 'tailwind-cdn';
        script.src = 'https://cdn.tailwindcss.com';

        document.head.appendChild(script);
      }
    }
  );
});
