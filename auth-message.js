Office.onReady(() => {
  const data = window.scottyConnection;
  delete window.scottyConnection;
  if (!data || !/^[a-f0-9]{64}$/.test(data.state || '') || !data.token?.startsWith('sfu1.')) {
    document.getElementById('status').textContent = 'Open de verbinding opnieuw vanuit Outlook.';
    return;
  }
  Office.context.ui.messageParent(JSON.stringify(data), { targetOrigin: location.origin });
  document.getElementById('status').textContent = 'Verbonden. Dit venster wordt gesloten.';
});
