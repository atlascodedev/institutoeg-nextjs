import React from "react";
import {
  FaClock,
  FaGraduationCap,
  FaLaptop,
  FaStickyNote,
} from "react-icons/fa";
import { MdChatBubble, MdCheck, MdCheckCircle } from "react-icons/md";
import DefenseSection from "../components/Defense";
import Drawer from "../components/Drawer";
import Hero from "../components/Hero";
import MainLayout from "../components/Layout/main";
import scrollIntoView from "../helper/scrollIntoView";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const homeRef = React.useRef(null);
  const coursesRef = React.useRef(null);
  const aboutUsRef = React.useRef(null);
  const contactRef = React.useRef(null);

  return (
    <div>
      <MainLayout
        title="Instituto Educacional Gnosis"
        contactEmail="atendimento@institutoeg.com"
        contactNumber="(00)0-0000-0000"
        facebook="https://facebook.com"
        instagram="https://instagram.com"
        metaDescription="Instituto Educacional Gnosis - Cursos de pós-graduação na área da medicina"
        navbarColor="primary"
        whatsapp="https//whatsapp.com"
        burguerMenuColor="primary"
        active={drawerOpen}
        onMenuClick={() => setDrawerOpen(true)}
        MenuComponent={
          <Drawer
            closeFn={() => setDrawerOpen(false)}
            open={drawerOpen}
            items={[
              {
                action: () => scrollIntoView("home", homeRef),
                label: "Home",
              },
              {
                action: () => scrollIntoView("courses", coursesRef),
                label: "Cursos",
              },
              {
                action: () => scrollIntoView("aboutUs", aboutUsRef),
                label: "Sobre nós",
              },
              {
                action: () => scrollIntoView("contact", contactRef),
                label: "Contato",
              },
            ]}
          />
        }
      >
        <Hero
          CTAAction={() => console.log("i rather run away")}
          imageURL="https://hyximpsy.sirv.com/InstitutoGnosis/paoduro.png?sharpen=5&w=1920&h=1080"
        />

        <DefenseSection
          defenses={[
            { icon: MdCheckCircle, label: "Cursos reconhecidos pelo MEC" },
            { icon: FaGraduationCap, label: "Cursos 100% EAD" },
            { icon: FaClock, label: "Cursos intensivos e extensivos" },
            { icon: FaLaptop, label: "Ambiente de aprendizado virtual" },
            {
              icon: FaStickyNote,
              label: "TCC opcional",
            },
            {
              icon: MdChatBubble,
              label: "Atendimento personalizado",
            },
          ]}
        />
      </MainLayout>
    </div>
  );
}
