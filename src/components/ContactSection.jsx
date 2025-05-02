import { Button, Label, TextInput, Textarea } from "flowbite-react";
import photo1 from "../assets/photos/about/photoLocalFidex2.jpeg";
import DOMPurify from "dompurify"; // Import de DOMPurify
import { useTranslation } from "react-i18next"; // Importation du hook i18next

const ContactSection = () => {
  const { t } = useTranslation(); // Initialisation de i18next

  // Fonction de gestion de l'envoi du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher l'envoi par défaut du formulaire

    // Récupération des valeurs du formulaire
    const name = event.target.name.value;
    const firstName = event.target.firstName.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    // Assainir les données -> DOMPurify
    const sanitizedMessage = DOMPurify.sanitize(message);

    // données assainies pour le serveur
    console.log("Nom:", name);
    console.log("Prénom:", firstName);
    console.log("Email:", email);
    console.log("Téléphone:", phone);
    console.log("Sujet:", subject);
    console.log("Message assaini:", sanitizedMessage);

    // eslint-disable-next-line no-unused-vars
    const formData = {
      name,
      firstName,
      email,
      phone,
      subject,
      message: sanitizedMessage,
    };
  };

  return (
    <section className="flex justify-center items-center p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-5">
        {/* Partie gauche - photo */}
        <div className="h-full overflow-hidden">
          <img src={photo1} alt="photo des locaux" className="h-full object-cover" />
        </div>

        {/* Partie droite - formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white lg:p-6 rounded-lg">
          {/* Titre */}
          <div className="flex flex-col gap-4">
            <h1 className="lg:text-6xl text-4xl font-bold text-primary">
              {t("contact.title")}
            </h1>
            <p className="text-sm font-light">{t("contact.description")}</p>
          </div>

          {/* Nom et prénom */}
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">{t("contact.name")}</Label>
              </div>
              <TextInput 
                id="name" 
                name="name" 
                type="text" 
                placeholder={t("contact.namePlaceholder")} 
                required shadow 
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstName">{t("contact.firstName")}</Label>
              </div>
              <TextInput 
                id="firstName" 
                name="firstName" 
                type="text" 
                placeholder={t("contact.firstNamePlaceholder")} 
                required shadow 
              />
            </div>
          </div>

          {/* Email et téléphone */}
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">{t("contact.email")}</Label>
              </div>
              <TextInput 
                id="email" 
                name="email" 
                type="email" 
                placeholder={t("contact.emailPlaceholder")} 
                required shadow 
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone">{t("contact.phone")}</Label>
              </div>
              <TextInput 
                id="phone" 
                name="phone" 
                type="tel" 
                placeholder={t("contact.phonePlaceholder")} 
                shadow 
              />
            </div>
          </div>

          {/* Sujet */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="subject">{t("contact.subject")}</Label>
            </div>
            <TextInput 
              id="subject" 
              name="subject" 
              type="text" 
              placeholder={t("contact.subjectPlaceholder")} 
              shadow 
            />
          </div>

          {/* Contenu du message */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="message">{t("contact.message")}</Label>
            </div>
            <Textarea 
              id="message" 
              name="message" 
              rows={4} 
              placeholder={t("contact.messagePlaceholder")} 
              required 
            />
          </div>

          {/* Bouton pour envoyer */}
          <Button type="submit" className="bg-primary">
            {t("contact.send")}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
