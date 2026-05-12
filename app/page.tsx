import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ProcessFlow3D from "@/components/ProcessFlow3D";
import QualificationForm from "@/components/QualificationForm";
import VideoTestimonials from "@/components/VideoTestimonials";
import WhatWeDoAndDont from "@/components/WhatWeDoAndDont";
import WhoQualifies from "@/components/WhoQualifies";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Founder from "@/components/Founder";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANP Health Solutions",
  url: "https://usa.anphealthsolutions.com",
  description:
    "Programa de validación de credenciales para enfermeros latinos que desean ejercer en Estados Unidos.",
  founder: {
    "@type": "Person",
    name: "Nelson Hurtado",
  },
  knowsAbout: [
    "validar título enfermería Estados Unidos",
    "homologación enfermería USA",
    "NCLEX-RN preparación",
    "enfermeros latinos Estados Unidos",
    "licencia RN enfermería",
    "validación credenciales enfermería",
    "TruMerit CGFNS",
    "sponsor migratorio enfermería USA",
    "trabajar como enfermero en Estados Unidos",
    "ANP Health programa enfermería",
  ],
  areaServed: {
    "@type": "Place",
    name: "Latinoamérica y Estados Unidos",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Necesito inglés avanzado para comenzar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Puedes iniciar el proceso sin inglés avanzado. Durante el acompañamiento te orientamos sobre los requisitos de idioma según tu etapa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo aplicar si soy técnico en enfermería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de tu país. Actualmente aceptamos técnicos superiores de Venezuela, Argentina y El Salvador. En la asesoría evaluamos tu caso particular.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mi familia puede migrar conmigo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El sponsor migratorio incluye a tu cónyuge e hijos menores de 21 años.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el programa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los costos varían según tu perfil y país de origen. Agenda una asesoría gratuita para recibir información personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma el proceso completo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tiempo varía según cada perfil, país de origen y documentación disponible. En la asesoría te damos un estimado personalizado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito experiencia profesional para iniciar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesitas experiencia profesional para iniciar el proceso de validación de credenciales.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Programa de Validación de Credenciales de Enfermería",
  provider: {
    "@type": "Organization",
    name: "ANP Health Solutions",
  },
  description:
    "Acompañamiento completo para enfermeros latinos que desean validar su título y obtener la licencia RN en Estados Unidos.",
  serviceType: "Validación de credenciales profesionales",
  areaServed: "Latinoamérica y Estados Unidos",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2000",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ProcessFlow3D />
        <QualificationForm />
        <VideoTestimonials />
        <WhatWeDoAndDont />
        <WhoQualifies />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
