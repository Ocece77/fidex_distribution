import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = ({titre , desc, btn}) => {
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
          backgroundImage:
            "url('https://img.freepik.com/photos-gratuite/personnes-au-bureau-pendant-journee-travail_23-2150690162.jpg?semt=ais_hybrid&w=740')", // Remplace par une image McDo si tu veux
        }}
      ></div>

     {/*contenue de gauche */}
      <div
        className="relative z-10 grid grid-cols-12 w-full h-full p-10">
        <div className=" h-full col-span-5 bg-white rounded-lg shadow-[0_0px_10px_rgba(150,150,150,0.15)] ">
                    <div className='grid grid-cols-1 flex-col gap-3 w-full h-full rounded-lg overflow-hidden'>

                        <div className="grid grid-cols-1 gap-3 px-5 ">
                            <p className='text-primary font-extrablack text-2xl'>titre</p>
                            <p className="h-25 text-neutral-500 font-light">desc</p>
                        </div>
                   

                       <Link to="" className="flex items-center px-5 py-3 bg-primary text-white transition-all hover:text-white hover:bg-red-800 hover:gap-5 gap-2  ">
                           En savoir plus
                           <svg className="w-4 h-4 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
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