import { Button, Label, TextInput, Textarea } from "flowbite-react";
import photo1 from "../assets/photos/about/photoLocalFidex2.jpeg";


const ContactSection = () => {
  return (
    <section className="flex justify-center items-center p-10 ">

    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-5">
       {/*partie gauche - photo*/}
         <div className="h-full overflow-hidden">
           <img src={photo1} alt="photo des locaux" className="h-full object-cover" />
         </div>

      {/*partie droite - formulaire */}
      <form className="flex flex-col gap-4 bg-white lg:p-6 rounded-lg">

        {/*Titre*/}
          <div className="flex flex-col gap-4">  
            <h1 className="lg:text-6xl text-4xl font-bold text-primary">Contactez-nous dès aujourd'hui !</h1>
            <p className="text-sm font-light">N’hésitez pas à nous contacter, notre équipe est prête à vous aider et à vous accompagner dans vos projets.</p>
          </div>

        {/*Nom et email */}
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Nom*</Label>
              </div>
              <TextInput id="name" type="text" placeholder="Dupont" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Prénom*</Label>
              </div>
              <TextInput id="name" type="text" placeholder="Jean" required shadow />
            </div>

      
          </div>

        {/* email et téléphone */}
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Email*</Label>
                </div>
                <TextInput id="email" type="email" placeholder="jean@exemple.com" required shadow />
              </div>
              
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone">Téléphone</Label>
                </div>
                <TextInput id="phone" type="tel" placeholder="+243 123 456 789" shadow />
              </div>
      
          </div>

        {/* objet*/}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="subject">Sujet</Label>
            </div>
            <TextInput id="subject" type="text" placeholder="Sujet de votre message" shadow />
          </div>

        {/* contenue du message */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="message">Message</Label>
            </div>
            <Textarea id="message" rows={4} placeholder="Votre message ici..." required />
          </div>

        {/* bouton pour envoyer */}
          <Button type="submit" className="bg-primary">
            Envoyer le message
          </Button>
          
      </form>

    </div>
     
    </section>

  );
};

export default ContactSection;
