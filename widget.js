(() => {
  const iframeURL = "https://https://sigler-ai-web-git-main-relgis15s-projects.vercel.app/"; 
  const fontURL = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";

  const style = document.createElement('style');
  style.textContent = `
    @import url('${fontURL}');
    #sigler-chat-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #2563eb;
      color: white;
      border: none;
      border-radius: 999px;
      padding: 12px 16px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    #sigler-chat-iframe {
      position: fixed;
      bottom: 70px;
      right: 20px;
      width: 360px;
      height: 500px;
      border: none;
      border-radius: 12px;
      display: none;
      z-index: 9998;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement('button');
  button.id = 'sigler-chat-button';
  button.innerText = '💬 Chat with us';
  document.body.appendChild(button);

  const iframe = document.createElement('iframe');
  iframe.id = 'sigler-chat-iframe';
  iframe.src = iframeURL;
  document.body.appendChild(iframe);

  let isOpen = false;
  button.addEventListener('click', () => {
    isOpen = !isOpen;
    iframe.style.display = isOpen ? 'block' : 'none';
  });
})();
