import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = ({titre , desc, btn={} , img}) => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

   useGSAP(() =>{
    gsap.to(bgRef.current, {
        y: "-20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

   } , [])



  return (
    <section
      ref={containerRef}
      className="relative h-100 overflow-hidden flex items-center justify-center"
    >
     {/*Image d'arrière plan */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[150%] bg-cover bg-center z-0"
        style={{
          backgroundImage:`url(${img})`
        }}
      ></div>

     {/*contenue de gauche */}
      <div className="relative z-10 grid grid-cols-12 w-full h-full md:ml-10 md:py-15 p-5">
        <div className="h-full lg:col-span-6 md:col-span-7 col-span-full bg-white rounded-lg shadow-[0_0px_10px_rgba(150,150,150,0.15)] ">
             <div className='grid grid-cols-1 flex-col w-full h-full rounded-lg overflow-hidden p-10 gap-3'>

                        <div className="grid grid-cols-1 gap-3">
                            <p className='text-primary font-extrablack xl:text-5xl lg:text-4xl text-3xl'>{titre}</p>
                            <p className="lg:text-base text-lg text-neutral-500 font-light">{desc}</p>
                        </div>
                   

                        <Link to={btn.btnLink || "/contacts"} className="flex items-center gap-2 hover:gap-3 justify-center max-w-fit h-fit p-3  text-sm font-medium text-center rounded-lg bg-primary hover:bg-red-800 text-white transition-all ">
                                  {btn.btnTitre || "En savoir plus"}
                                  <svg className="w-3 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
              </div>
        </div>      
      </div>
    </section>
  );
}

ParallaxSection.propTypes={
    titre: PropTypes.string,
    desc: PropTypes.string,
    btn : PropTypes.shape({
       btnTitre : PropTypes.string.isRequired,
       btnLink : PropTypes.string.isRequired
     })
}
export default ParallaxSection;