const PrivacyPolicy = () => {
    return (
      <div className="container mx-auto p-4 h-auto  pt-40">
        <h1 className="text-3xl font-bold text-primary mb-6">Politique de Confidentialité</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-sm">
            Nous, Fidex distribution, nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles lorsque vous utilisez nos services.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">2. Informations collectées</h2>
          <p className="text-sm">
            Nous collectons différents types d’informations dans le cadre de nos services. Cela inclut, mais ne se limite pas à :
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>Informations personnelles que vous nous fournissez directement (par exemple, nom, adresse e-mail, numéro de téléphone, etc.)</li>
            <li>Informations collectées automatiquement lors de votre utilisation de nos services (par exemple, adresse IP, type de navigateur, informations de connexion, etc.)</li>
            <li>Cookies et technologies similaires utilisés pour améliorer votre expérience en ligne.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">3. Utilisation des informations</h2>
          <p className="text-sm">
            Nous utilisons vos informations pour :
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>Fournir nos services et répondre à vos demandes.</li>
            <li>Améliorer notre site web et l’expérience utilisateur.</li>
            <li>Vous envoyer des informations marketing ou des mises à jour, si vous avez donné votre consentement.</li>
            <li>Respecter nos obligations légales et réglementaires.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">4. Partage des informations</h2>
          <p className="text-sm">
            Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers, sauf dans les cas suivants :
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>Avec des prestataires de services qui nous aident à gérer nos opérations (par exemple, hébergement de site web, envoi d'e-mails, etc.).</li>
            <li>Si la loi nous oblige à divulguer vos informations ou si cela est nécessaire pour protéger nos droits ou ceux d'autres personnes.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">5. Sécurité des informations</h2>
          <p className="text-sm">
            Nous mettons en place des mesures de sécurité pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation, altération ou destruction. Cependant, aucun système de sécurité n'est totalement infaillible.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">6. Vos droits</h2>
          <p className="text-sm">
            Conformément aux lois sur la protection des données, vous avez certains droits concernant vos informations personnelles, notamment :
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li>Accéder à vos informations personnelles que nous détenons.</li>
            <li>Demander la correction ou la suppression de vos informations personnelles.</li>
            <li>Limiter ou vous opposer au traitement de vos informations personnelles.</li>
          </ul>
          <p className="text-sm">
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : [email@domaine.com].
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">7. Modifications de cette politique de confidentialité</h2>
          <p className="text-sm">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé de toute modification.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">8. Contact</h2>
          <p className="text-sm">
            Si vous avez des questions concernant cette politique de confidentialité, n'hésitez pas à nous contacter à l'adresse suivante : <a href="mailto:fidexdistribution@gmail.com" className="text-primary">fidexdistribution@gmail.com</a>.
          </p>
        </section>
  
      </div>
    );
  };
  
  export default PrivacyPolicy;
  