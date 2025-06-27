
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en Menos de 24 Horas" subheadline="Creamos tu web de ventas exprés con soporte 24/7, ideal para dueños de negocios ocupados en Santiago." cta1="Comienza Ahora" />
<How step1Title="Contáctanos" step1Desc="Te escuchamos y entendemos tu negocio." step2Title="Creación Express" step2Desc="Web de ventas en 24 horas." step3Title="Soporte Continuo" step3Desc="Ayuda 24/7 para tus consultas." />
<Aboutus headline="WebGo: Digitaliza y Aumenta Ventas" subheadline="WebGo transforma recomendaciones en ventas online eficientemente. Nos encargamos de todo." beneficiotitulo1="Gestión Completa" beneficio1="Creamos y manejamos tu sitio web" beneficiotitulo2="Ventas Aumentadas" beneficio2="Convertimos visitas en clientes fieles" />
<Services heading="Impulsa Tus Ventas Ahora" description="Asdasd digitaliza tu negocio en 24 horas, sin complicaciones." services={[{"name":"Desarrollo Express","icon":"rocket","description":"Web lista en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Ayuda continua para tu tranquilidad."},{"name":"Optimización SEO","icon":"search","description":"Aparece en los primeros lugares."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualizaciones sin esfuerzo."},{"name":"Marketing Digital","icon":"megaphone","description":"Estrategias que atraen más clientes."},{"name":"Análisis de Datos","icon":"chart-line","description":"Impulsa decisiones con datos precisos."}]} />
<BeforeAndAfter subheadline="Transformaciones digitales que elevan tu presencia online al siguiente nivel." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo te ofrece una solución completa para llevar tu negocio al mundo digital. Con nuestros servicios, puedes crear una presencia online efectiva, atraer nuevos clientes y aumentar tus ventas sin depender únicamente de las recomendaciones."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"Al elegir WebGo, te beneficias de un enfoque integral para digitalizar tu negocio. Nuestros servicios como asdas y asdasd no solo optimizan tu presencia en línea, sino que también facilitan la generación de ventas online, permitiéndote enfocarte en otras áreas de tu negocio."},{"pregunta":"¿WebGo ofrece apoyo para gestionar un sitio web si no tengo tiempo?","respuesta":"Sí, WebGo entiende que el tiempo es limitado para los dueños de negocios. Ofrecemos gestión completa del sitio web para que puedas concentrarte en lo que haces mejor mientras nosotros nos encargamos de tu presencia digital."},{"pregunta":"¿Cuánto cuesta el servicio de asdas de WebGo?","respuesta":"El servicio de asdas de WebGo tiene un precio accesible de 123. Esta inversión asegura que recibas una solución profesional para potenciar tus ventas online, diseñada especialmente para pequeños negocios en Santiago."},{"pregunta":"¿Cómo puedo saber si WebGo es la solución adecuada para mi negocio?","respuesta":"WebGo está pensado para pequeños empresarios como tú que desean digitalizar sus ventas. Ofrecemos resultados tangibles y personalizados, asegurando que cada estrategia esté alineada con tus objetivos comerciales. Contáctanos para una consulta gratuita y descubre cómo podemos transformar tu negocio."}]} />
<BookAppointment 
                      heading="Transforma tu negocio y conquista el mundo digital" 
                      description="En WebGo, te ayudamos a digitalizar tus ventas para que dejes de depender solo de recomendaciones. No más pérdidas de tiempo, nosotros gestionamos tu sitio web por ti. Precio: 123 - asdasd."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
