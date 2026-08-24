import React from "react";
import ChatBot from "react-chatbotify";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ChatWidget = () => {
  const { t } = useTranslation();

  const logoMarques = [
    { liendulogo: "/vehicules/marques/ford", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ford-Motor-Company-Logo.png/1200px-Ford-Motor-Company-Logo.png' },
    { liendulogo: "/vehicules/marques/toyota", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28Red%29.svg/2560px-Toyota_logo_%28Red%29.svg.png' },
    { liendulogo: "/vehicules/marques/nissan", logo: 'https://logo-marque.com/wp-content/uploads/2020/04/Nissan-Logo-2001%E2%80%93pr%C3%A9sent.jpg' },
  ];

  const settings = {
    botName: "SuperBot",
    showBotAvatar: true,
    showUserAvatar: false,

    customStyles: {
      botMessageBox: {
        backgroundColor: "#2f9cdb",
      },
      chatButton: {
        backgroundColor: "#0f5a77",
      },
      notificationIconStyle:{
        display: "none",
      }
    },
    header: {
      title: (
          <h3 style={{cursor: "pointer", margin: 0}} className="font-bold text-xl" >{t('chatbot.header_title')}
          </h3>
      ),
      showAvatar: true,
      avatar: logo,
    },
    chatHistory: {
      disabled: true,
    },
    notification: {
      disabled: true,
    },
    chatWindow: {
      showScrollbar: true,
    },
    fileAttachment: {
      disabled: true,
    },
    emoji: {
      disabled: true,
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

  // Use translated options lists
  const flowItemsList = [
    t('chatbot.option_car'),
    t('chatbot.option_mining'),
    t('chatbot.option_delivery'),
    t('chatbot.option_shipping')
  ];
  const vehiculeList = [
    t('chatbot.car_option_suv'),
    t('chatbot.car_option_4x4'),
    t('chatbot.car_option_minibus'),
    t('chatbot.car_option_pickup')
  ];
  const miningList = [
    t('chatbot.mining_option_coltan'),
    t('chatbot.mining_option_cobalt'),
    t('chatbot.mining_option_lithium'),
    t('chatbot.mining_option_casserite')
  ];
  const deliveryList = [
    t('chatbot.delivery_option_parcel'),
    t('chatbot.delivery_option_document'),
    t('chatbot.delivery_option_food')
  ];
  const shippingList = [
    t('chatbot.shipping_option_sea'),
    t('chatbot.shipping_option_air'),
    t('chatbot.shipping_option_express'),
    t('chatbot.shipping_option_customs')
  ];


  const flow = {
    start: {
      message: t('chatbot.welcome_message'),
      options: flowItemsList,
      path: "handle_start_option"
    },

    prompt_again: {
      message: t('chatbot.prompt_again'),
      options: flowItemsList,
      path: "handle_start_option"
    },

    handle_start_option: {
      transition: { duration: 0 },
      path: async (params) => {
        // Use the translated options to match user input
        switch (params.userInput) {
          case t('chatbot.option_car'):
            await params.injectMessage(t('chatbot.car_intro'));
            return "process_vehicule";
          case t('chatbot.option_mining'):
            await params.injectMessage(t('chatbot.mining_intro'));
            return "process_mining";
          case t('chatbot.option_delivery'):
            await params.injectMessage(t('chatbot.delivery_intro'));
            return "process_delivery";
          case t('chatbot.option_shipping'):
            await params.injectMessage(t('chatbot.shipping_intro'));
            return "process_shipping";
          default:
            return "unknown_input";
        }
      }
    },

    process_vehicule: {
      message: t('chatbot.car_question'),
      options: vehiculeList,
      path: "show_vehicle_brands"
    },

    show_vehicle_brands: {
      message: t('chatbot.car_brands_message'),
      component: () => (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "10px" }}>
          {logoMarques.map((brand, i) => (
            <a key={i} href={brand.liendulogo} target="_blank" rel="noreferrer">
              <img src={brand.logo} alt={`logo-${i}`} style={{ height: "30px" }} />
            </a>
          ))}
        </div>
      ),
      options: [t('chatbot.back_to_main_menu')],
      path: (params) => (params.userInput === t('chatbot.back_to_main_menu') ? "prompt_again" : "repeat_brands")
    },

    repeat_brands: {
      path: "prompt_again"
    },

    process_mining: {
      message: t('chatbot.mining_question'),
      options: miningList,
      path: "link_mining"
    },

    link_mining: {
      message: t('chatbot.mining_link_message'),
      component: () => (
        <Link to="/exploitation_miniere" style={{ color: "#2f9cdb", marginLeft: "10px" }}>
          {t('chatbot.mining_link_text')}
        </Link>
      ),
      options: [t('chatbot.back_to_main_menu')],
      path: (params) => (params.userInput === t('chatbot.back_to_main_menu') ? "prompt_again" : "repeat_mining")
    },

    repeat_mining: {
      path: "prompt_again"
    },

    process_delivery: {
      message: t('chatbot.delivery_question'),
      options: deliveryList,
      path: "link_delivery"
    },

    link_delivery: {
      message: t('chatbot.delivery_link_message'),
      component: () => (
        <Link to="/livraison" style={{ color: "#2f9cdb", marginLeft: "10px" }}>
          {t('chatbot.delivery_link_text')}
        </Link>
      ),
      options: [t('chatbot.back_to_main_menu')],
      path: (params) => (params.userInput === t('chatbot.back_to_main_menu') ? "prompt_again" : "repeat_delivery")
    },

    repeat_delivery: {
      path: "prompt_again"
    },

    process_shipping: {
      message: t('chatbot.shipping_question'),
      options: shippingList,
      path: "link_shipping"
    },

    link_shipping: {
      message: t('chatbot.shipping_link_message'),
      component: () => (
        <Link to="/expedition" style={{ color: "#2f9cdb", marginLeft: "10px" }}>
          {t('chatbot.shipping_link_text')}
        </Link>
      ),
      options: [t('chatbot.back_to_main_menu')],
      path: (params) => (params.userInput === t('chatbot.back_to_main_menu') ? "prompt_again" : "repeat_shipping")
    },

    repeat_shipping: {
      path: "prompt_again"
    },

    unknown_input: {
      message: t('chatbot.unknown_input'),
      options: flowItemsList,
      path: "handle_start_option"
    }
  };

  return (
      <ChatBot
                settings={settings}
                flow={flow}
                styles={styles} />
  );
};

export default ChatWidget;