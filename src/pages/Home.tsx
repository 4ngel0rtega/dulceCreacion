import Navbar from "../components/Navbar";

import { BiChevronRight } from "react-icons/bi";

import imgHero from '../assets/images/img-hero.png'
import imgAboutUs1 from '../assets/images/img-aboutUs-1.png'
import { FaCheckCircle, FaHands, FaHandshake, FaHome, FaLightbulb } from "react-icons/fa";


function Home() {
    return (
        <>
            <Navbar/>

            {/* Hero */}
            <section className='bg-pastelPink-light'>
                <div className="max-w-screen-xl mx-auto p-4 grid lg:gap-18 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl text-pastelPink-dark mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Bienvenido a Dulce Creación</h1>
                        <p className="max-w-2xl mb-6 font-normal text-lightBrown-dark lg:mb-8 md:text-lg lg:text-xl">Donde cada bocado es una obra de arte. Descubre la magia de nuestros pasteles y postres, elaborados con amor y dedicación para endulzar tus momentos más especiales.</p>
                        <a href="" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text rounded-lg bg-darkBrown hover:bg-darkBrown-dark hover:text-white focus:ring-4 focus:ring-pastelPink ">
                            Conoce más
                            <BiChevronRight className="w-5 h-5 ml-2 -mr-1"/>
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={imgHero} alt="Imagen ilustrativa" className="rounded-xl"/>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-screen-xl mx-auto p-4">
                    <h1 className="mb-4 text-pastelPink-dark font-bold text-center text-4xl md:text-2xl lg:text-3xl">¿Quienes somos?</h1>
                    <p className="max-w-2xl mx-auto text-center font-normal text-lightBrown-dark mb-8 md:text-lg lg:text-xl">
                        En Dulce Creación, somos una familia apasionada por la creación y venta de pasteles y repostería personalizada. 
                        Desde nuestros humildes comienzos, hemos trabajado con dedicación y amor para ofrecer productos de alta calidad que
                        endulcen los momentos más especiales de nuestros clientes. Cada bocado es una obra de arte, y nos enorgullece ser parte
                        de tus celebraciones y momentos inolvidables.
                    </p>

                    <div className="grid lg:gap-18 lg:py-16 lg:grid-cols-12">
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src={imgAboutUs1} alt="" className="rounded-sm"/>
                        </div>
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h2 className=" text-pastelPink-dark mb-4 text-lg font-bold tracking-tight leading-none md:text-xl xl:text-2xl">Misión</h2>
                            <p className="font-normal text-lightBrown-dark mb-6 md:text-md lg:text-lg">
                                Nuestra misión es crear pasteles y postres personalizados que no solo sean deliciosos, sino también visualmente impresionantes. 
                                Nos esforzamos por superar las expectativas de nuestros clientes, utilizando ingredientes de la más alta calidad y técnicas innovadoras
                                para hacer realidad sus sueños dulces.
                            </p>

                            <h2 className="text-pastelPink-dark mb-4 text-lg font-bold tracking-tight leading-none md:text-xl xl:text-2xl">Visión</h2>
                            <p className="font-normal text-lightBrown-dark mb-6 md:text-md lg:text-lg">
                                Nuestra visión es convertirnos en la pastelería de referencia en nuestra comunidad y más allá, reconocida por nuestra creatividad, calidad y 
                                compromiso con la satisfacción del cliente. Queremos ser parte de cada celebración, grande o pequeña, y seguir creciendo como una empresa familiar 
                                que valora la tradición y la innovación.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div>
                            <div className="flex gap-2 items-center justify-center">
                                <span className="p-1 bg-pastelPink-dark text-white rounded-full">
                                    <FaCheckCircle className="text-white"/>
                                </span>
                                <h3 className="text-pastelPink-dark text-xl font-bold">Calidad</h3>
                            </div>
                        
                            <p className="text-center text-lightBrown-dark text-lg">Nos comprometemos a utilizar solo los mejores ingredientes y a mantener altos estándares en cada uno de nuestros productos.</p>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center justify-center">
                                <span className="p-1 bg-pastelPink-dark text-white rounded-full">
                                    <FaLightbulb/>
                                </span>
                                
                                <h3 className="text-pastelPink-dark text-xl font-bold">Creatividad</h3>
                            </div>

                            <p className="text-center text-lightBrown-dark text-lg">Nos apasiona la innovación y la creatividad en la repostería, siempre buscando nuevas formas de sorprender y deleitar a nuestros clientes.</p>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center justify-center">
                                <span className="p-1 bg-pastelPink-dark text-white rounded-full">
                                    <FaHandshake/>
                                </span>
                             
                                <h3 className="text-pastelPink-dark text-xl font-bold">Compromiso</h3>
                            </div>

                            <p className="text-center text-lightBrown-dark text-lg">Valoramos la confianza de nuestros clientes y nos esforzamos por superar sus expectativas en cada pedido, grande o pequeño.</p>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center justify-center">
                                <span className="p-1 bg-pastelPink-dark text-white rounded-full">
                                    <FaHome/>
                                </span>
                                <h3 className="text-pastelPink-dark text-xl font-bold">Tradición</h3>
                            </div>

                            <p className="text-center text-lightBrown-dark text-lg">Como empresa familiar, valoramos la tradición y el amor que ponemos en cada creación, transmitiendo esos valores a nuestros clientes.</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Home;