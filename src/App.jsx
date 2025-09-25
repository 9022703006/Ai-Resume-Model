import { useEffect } from "react";
import "@n8n/chat/style.css";
import "./App.css"; 


function App() {
  useEffect(() => {
    const loadChat = async () => {
      const { createChat } = await import(
        "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"
      );

      createChat({
        webhookUrl:"https://resumechartai.onrender.com/webhook/e3ec82ae-3e8e-4e46-a945-97cb762218c7/chat",
        mode: "fullscreen", 
        target: "#n8n-chat",
        initialMessages: [
          `👋 Hi, I'm **Prathmesh Sanjay Patil!** This is my AI Resume Assistant.  

✨ Skills – What are your skills?  
🎓 Education – Tell me about your education.  
🛠 Projects – Show me your projects.  
📜 Certifications – What certifications have you earned?  
🏆 Achievements – Any extracurricular achievements?  

👉 What would you like to know about me first?`,
        ],
        footer: "🚀 Built by Prathmesh Sanjay Patil"
        ,
      });
    };

    loadChat();
  }, []);

  return (
    <div
      id="n8n-chat"
      style={{
        height: "100vh",  
        width: "100vw",   
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    ></div>
  );
}

export default App;
