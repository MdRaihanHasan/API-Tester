document.addEventListener('DOMContentLoaded', () => {
  // Load saved collections and settings
  chrome.storage.local.get(['collections', 'darkMode'], (data) => {
    if (data.darkMode) {
      document.body.classList.add('dark-mode');
      document.getElementById('dark-mode').checked = true;
    }
  });

  // Handle form submission
  document.getElementById('api-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Replace environment variables
    const envVars = JSON.parse(document.getElementById('env-vars').value || '{}');
    const replaceEnvVars = (str) => str.replace(/{{(.*?)}}/g, (match, p1) => envVars[p1] || match);

    const method = document.getElementById('method').value;
    const url = replaceEnvVars(document.getElementById('url').value);
    const headers = JSON.parse(replaceEnvVars(document.getElementById('headers').value || '{}'));
    const body = replaceEnvVars(document.getElementById('body').value);

    // Handle authentication
    const authType = document.getElementById('auth-type').value;
    switch (authType) {
      case 'api-key':
        headers['Authorization'] = `APIKey ${document.getElementById('api-key').value}`;
        break;
      case 'bearer':
        headers['Authorization'] = `Bearer ${document.getElementById('bearer-token').value}`;
        break;
      case 'oauth2':
        headers['Authorization'] = `OAuth ${document.getElementById('oauth-token').value}`;
        break;
    }

    // Execute pre-request script
    const preRequestScript = document.getElementById('pre-request-script').value;
    if (preRequestScript) {
      new Function(preRequestScript)();
    }

    // Send the request
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: method !== 'GET' ? body : null,
      });

      const data = await response.json();
      document.getElementById('response').textContent = JSON.stringify(data, null, 2);
      hljs.highlightElement(document.getElementById('response'));

      // Execute post-request script
      const postRequestScript = document.getElementById('post-request-script').value;
      if (postRequestScript) {
        new Function('response', postRequestScript)(response);
      }
    } catch (error) {
      document.getElementById('response').textContent = `Error: ${error.message}`;
    }
  });

  // Handle dark mode toggle
  document.getElementById('dark-mode').addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode', e.target.checked);
    chrome.storage.local.set({ darkMode: e.target.checked });
  });

  // Handle authentication type change
  document.getElementById('auth-type').addEventListener('change', (e) => {
    const authFields = document.getElementById('auth-fields');
    authFields.innerHTML = '';

    switch (e.target.value) {
      case 'api-key':
        authFields.innerHTML = `
          <label for="api-key">API Key:</label>
          <input type="text" id="api-key" placeholder="Enter API Key">
        `;
        break;
      case 'bearer':
        authFields.innerHTML = `
          <label for="bearer-token">Bearer Token:</label>
          <input type="text" id="bearer-token" placeholder="Enter Bearer Token">
        `;
        break;
      case 'oauth2':
        authFields.innerHTML = `
          <label for="oauth-token">OAuth Token:</label>
          <input type="text" id="oauth-token" placeholder="Enter OAuth Token">
        `;
        break;
    }
  });
});