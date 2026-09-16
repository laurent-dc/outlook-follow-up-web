// Clear the token fragment before loading Office.js. Keep it in memory only.
window.scottyConnection = Object.fromEntries(new URLSearchParams(location.hash.slice(1)));
history.replaceState(null, '', location.pathname);
