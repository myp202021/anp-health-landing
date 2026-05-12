import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import SocialProof from "@/components/SocialProof";
import ProcessFlow3D from "@/components/ProcessFlow3D";
import WhyANP from "@/components/WhyANP";
import QualificationForm from "@/components/QualificationForm";
import Benefits from "@/components/Benefits";
import VideoTestimonials from "@/components/VideoTestimonials";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANP Health Solutions",
  url: "https://usa.anphealthsolutions.com",
  description:
    "Programa de validacion de credenciales para enfermeros latinos que desean ejercer en Estados Unidos.",
  founder: {
    "@type": "Person",
    name: "Nelson Hurtado",
  },
  knowsAbout: [
    "validar titulo enfermeria Estados Unidos",
    "homologacion enfermeria USA",
    "NCLEX-RN preparacion",
    "enfermeros latinos Estados Unidos",
    "licencia RN enfermeria",
    "validacion credenciales enfermeria",
    "TruMerit CGFNS",
    "sponsor migratorio enfermeria USA",
    "trabajar como enfermero en Estados Unidos",
    "ANP Health programa enfermeria",
  ],
  areaServed: {
    "@type": "Place",
    name: "Latinoamerica y Estados Unidos",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Necesito ingles avanzado para comenzar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Puedes iniciar el proceso sin ingles avanzado. Durante el acompanamiento te orientamos sobre los requisitos de idioma segun tu etapa.",
      },
    },
    {
      "@type": "Question",
      name: "Puedo aplicar si soy tecnico en enfermeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de tu pais. Actualmente aceptamos tecnicos superiores de Venezuela, Argentina y El Salvador. En la asesoria evaluamos tu caso particular.",
      },
    },
    {
      "@type": "Question",
      name: "Mi familia puede migrar conmigo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. El sponsor migratorio incluye a tu conyuge e hijos menores de 21 anos.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto cuesta el programa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los costos varian segun tu perfil y pais de origen. Agenda una asesoria gratuita para recibir informacion personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto tiempo toma el proceso completo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tiempo varia segun cada perfil, pais de origen y documentacion disponible. En la asesoria te damos un estimado personalizado.",
      },
    },
    {
      "@type": "Question",
      name: "Necesito experiencia profesional para iniciar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesitas experiencia profesional para iniciar el proceso de validacion de credenciales.",
      },
    },
    {
      "@type": "Question",
      name: "ANP Health gestiona visas o empleo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ANP Health no es agencia de empleo ni firma migratoria. Somos especialistas en acompanamiento tecnico y administrativo para la validacion de credenciales de enfermeria.",
      },
    },
    {
      "@type": "Question",
      name: "Que pasa si no apruebo el NCLEX a la primera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es posible retomar el examen. Te orientamos sobre los tiempos de espera, recursos de estudio y estrategias para tu siguiente intento.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Programa de Validacion de Credenciales de Enfermeria",
  provider: {
    "@type": "Organization",
    name: "ANP Health Solutions",
  },
  description:
    "Acompanamiento completo para enfermeros latinos que desean validar su titulo y obtener la licencia RN en Estados Unidos.",
  serviceType: "Validacion de credenciales profesionales",
  areaServed: "Latinoamerica y Estados Unidos",
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
        <SocialProof />
        <ProcessFlow3D />
        <WhyANP />
        <QualificationForm />
        <Benefits />
        <VideoTestimonials />
        <BlogPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
