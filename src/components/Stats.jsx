import Reveal from "../animation/Reveal";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const statsContainerRef = useRef();
  const isInView = useInView(statsContainerRef, { once: true });
  const { t } = useTranslation(); // Initialisation de i18next

  const stats = [
    { id: 1, name: t("homepage.stats.countries"), value: 22 },
    { id: 2, name: t("homepage.stats.clients"), value: 4000 },
    { id: 3, name: t("homepage.stats.projects"), value: 120 },
  ];

  useEffect(() => {
    if (isInView) {
      const statsNumbers = gsap.utils.toArray(".number");

      statsNumbers.forEach((el) => {
        const endValue = parseInt(el.innerText);
        gsap.fromTo(el, 
          { innerText: 0 }, 
          {
            innerText: endValue,
            duration: 3,
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
              el.innerText = Math.floor(el.innerText); // Avoid decimals
            }
          }
        );
      });
    }
  }, [isInView]);

  return (
    <div ref={statsContainerRef} className="bg-primary py-24 sm:py-32 text-white">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <div className="flex justify-center items-center gap-2">
                  <p className="number order-first text-[4.5em] font-extrabold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-4xl font-bold">+</p>
                </div>
                <p className="lg:text-lg/7">{stat.name}</p>    
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Stats;
