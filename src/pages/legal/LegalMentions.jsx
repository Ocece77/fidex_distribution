const LegalMentions = () => {
    return (
      <div className="container mx-auto p-4 h-auto pt-40">
        <h1 className="text-3xl font-bold text-primary mb-6">Mentions Légales</h1>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">1. Présentation de l'entreprise</h2>
          <p className="text-sm">
            En vertu de l'article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, nous vous informons que :
          </p>
          <ul className="list-disc pl-5 text-sm">
            <li><strong>Nom de l'entreprise :</strong> Fidex distribution</li>
            <li><strong>Forme juridique :</strong> SARL</li>
            <li><strong>Adresse du siège social :</strong> Urban Committee 5-C, Kinshasa-Gombe</li>
            <li><strong>Hébergeur du site :</strong>Mercury Group - Boulevard du 30 juin, Immeuble Itimbiri, 3e niveau </li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">2. Conditions d'utilisation</h2>
          <p className="text-sm">
            L'utilisation du site internet www.fidexdistribution.com est soumise aux présentes conditions d'utilisation. En accédant à ce site, vous acceptez sans réserve ces conditions. L'accès à certains services peut nécessiter la création d'un compte ou la fourniture d'informations supplémentaires.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">3. Propriété intellectuelle</h2>
          <p className="text-sm">
            Tous les éléments présents sur ce site, y compris mais sans s'y limiter, les textes, graphiques, logos, images, vidéos, icônes, sont la propriété exclusive de Fidex Distribution SARL ou de ses partenaires, et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction ou distribution non autorisée est interdite.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">4. Protection des données personnelles</h2>
          <p className="text-sm">
            Conformément à la législation applicable en matière de protection des données personnelles, Fidex Distribution SARL s'engage à protéger la vie privée des utilisateurs de son site. Nous collectons uniquement les informations nécessaires pour vous fournir nos services, et nous ne partageons pas vos données personnelles sans votre consentement explicite. Pour plus de détails, veuillez consulter notre <a href="/politique-de-confidentialite" className="text-primary">Politique de Confidentialité</a>.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">5. Responsabilité</h2>
          <p className="text-sm">
            Fidex Distribution SARL met tout en œuvre pour garantir l'exactitude des informations présentes sur ce site. Cependant, nous ne pouvons pas garantir que les informations sont complètes, exactes ou constamment à jour. En cas d'erreur, nous nous engageons à corriger ces informations dans les plus brefs délais.
          </p>
          <p className="text-sm">
            Le site peut contenir des liens vers d'autres sites externes. Fidex Distribution SARL ne pourra être tenu responsable des contenus ou des pratiques de ces sites tiers.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">6. Cookies</h2>
          <p className="text-sm">
            Ce site utilise des cookies pour améliorer l'expérience utilisateur. Un cookie est un fichier texte qui est stocké sur votre appareil lors de votre visite. Vous pouvez paramétrer votre navigateur pour refuser les cookies, mais cela pourrait affecter votre expérience sur le site.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">7. Modification des mentions légales</h2>
          <p className="text-sm">
            Fidex Distribution SARL se réserve le droit de modifier ou d'actualiser les présentes mentions légales à tout moment. Les utilisateurs sont invités à consulter régulièrement cette page pour prendre connaissance des modifications éventuelles.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">8. Contact</h2>
          <p className="text-sm">
            Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:fidexdistribution@gmail.com" className="text-primary">fidexdistribution@gmail.com</a>.
          </p>
        </section>
  
      </div>
    );
  };
  
  export default LegalMentions;
  