import ChatBot from "react-chatbotify";


const ChatWidget = () => {

  const settings = {
    botName: "SuperBot",  // Nom du bot que tu veux afficher
    showBotAvatar: true,  // Afficher l'avatar du bot
    showUserAvatar: false,  // Afficher l'avatar de l'utilisateur
    customStyles: {
      botMessageBox: {
        backgroundColor: "#2f9cdb",
      },
      chatButton: {
        backgroundColor: "#0f5a77",
      },
    },
  };


  const styles = {
    tooltipStyle:{
      display: "none"
    },
    chatButtonStyle:{
      background: '#000e28',
      padding:"20px",
      width:"70px",
      height:"70px"
    },
    headerStyle: {
      background: '#000e28',
      color: '#ffffff',
      padding: '10px',
    },
    notificationBadgeStyle:{
      display: "none"
    },
    botBubbleStyle:{
      background: '#000e28',
    }
  };

  const flowItemsList = ["Voiture", "Exploitation minière", "livraison", "expédition"];
  const flow = {
    "start": {
      "message": "Bienvenue, sur quel sujet souhaitez vous avoir plus de renseignement ?",
      options:flowItemsList,
    } 
    ,
    loop: {
      message: "Avez vous besoin de plus d'aide ?",
      options:flowItemsList,
      path: "process_options"
    },
    end: {
      message: "J'espère que j'ai répondu à toutes vos questions, au revoir !",
      chatDisabled: true
    }
  }

  return (
    <button className="w-fit h-fit">
      <ChatBot settings={settings}  
                flow={flow} 
                styles={styles} />
    </button>
  );
};

export default ChatWidget;