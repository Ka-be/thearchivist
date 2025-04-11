document.addEventListener('DOMContentLoaded', function() {
  // Récup l'onglet actif pour afficher l'url
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentTab = tabs[0];
    const currentUrlElement = document.getElementById('currentUrl');
    const copyNotification = document.getElementById('copyNotification');
    
    if (currentTab && currentTab.url) {
      // affiche url actuelle
      currentUrlElement.textContent = currentTab.url;
      // Utilisation de /latest/ pour accéder directement à la dernière archive
      const archiveUrl = "https://archive.ph/latest/" + currentTab.url;
      
      // Configure le bouton d'archivage
      const archiveButton = document.getElementById('archiveButton');
      archiveButton.addEventListener('click', function() {
        chrome.tabs.create({ url: archiveUrl });
      });
      
      // Configure le bouton de copie
      const copyButton = document.getElementById('copyButton');
      copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(archiveUrl).then(function() {
          // Afficher la notification de succès
          copyNotification.classList.add('visible');
          
          // Cacher la notification après 2 secondes
          setTimeout(function() {
            copyNotification.classList.remove('visible');
          }, 2000);
        }, function(err) {
          console.error('Impossible de copier le texte: ', err);
        });
      });
    } else {
      // Cas si URL n'est pas disponible
      currentUrlElement.textContent = "Aucune URL disponible";
      document.getElementById('archiveButton').disabled = true;
      document.getElementById('copyButton').disabled = true;
    }
  });
}); 