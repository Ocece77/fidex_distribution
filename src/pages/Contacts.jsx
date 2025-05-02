import React from 'react'
import Map from '../components/Map'
import ContactSection from '../components/ContactSection'
import HeaderComponent from '../components/HeaderComponent'
import about1  from "../assets/photos/home/about4.jpg"
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className='grid grid-cols-1 gap-40'>
      <HeaderComponent
        titre={t("contactPage.title")}
        backgroundImage={about1}
        desc={t("contactPage.description")}
        btns={{
          [t("contactPage.callButton")]: "/contacts"
        }}
      />

      <ContactSection />
      <Map titre={t("contactPage.mapTitle")} />
    </section>
  );
}

export default Contacts