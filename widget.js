(() => {
  const iframeURL = "https://sigler-ai-web.vercel.app/"; // Replace with your live URL
  const imageIconURL = "https://yourdomain.com/chat-icon.png";

  // Inject Tailwind from CDN
  const tailwind = document.createElement("script");
  tailwind.src = "https://cdn.tailwindcss.com";
  document.head.appendChild(tailwind);

  // Inject Inter font
  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);

  // Wait for Tailwind to load
  tailwind.onload = () => {
    const style = document.createElement("style");
    style.innerHTML = `body { font-family: 'Inter', sans-serif; }`;
    document.head.appendChild(style);

    const button = document.createElement("button");
    button.innerHTML = '<img src="' + imageIconURL + '" alt="Chat Icon" class="w-6 h-6 mr-2 inline" /> Chat with us';
    button.className = "fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full shadow-lg flex items-center space-x-2 text-lg transition-transform transform hover:scale-105";
    button.id = "sigler-chat-button";

    const iframe = document.createElement("iframe");
    iframe.src = iframeURL;
    iframe.className = "fixed bottom-24 right-6 w-[360px] h-[500px] border-none rounded-xl shadow-2xl hidden z-40 transition-opacity duration-300";
    iframe.id = "sigler-chat-iframe";

    document.body.appendChild(button);
    document.body.appendChild(iframe);

    let isOpen = false;
    button.addEventListener("click", () => {
      isOpen = !isOpen;
      iframe.classList.toggle("hidden", !isOpen);
    });
  };
})();
