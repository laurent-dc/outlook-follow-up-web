const state = new URLSearchParams(location.search).get('state');
if (/^[a-f0-9]{64}$/.test(state || '')) location.replace('https://scotty.vangils.pro/outlook-connect?state=' + state);
else document.body.textContent = 'Open deze verbinding vanuit Outlook.';
