import React from "react";
import Drawer from "../components/Drawer";
import MainLayout from "../components/Layout/main";
import scrollIntoView from "../helper/scrollIntoView";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const homeRef = React.useRef(null);
  const coursesRef = React.useRef(null);
  const aboutUsRef = React.useRef(null);
  const contactRef = React.useRef(null);

  return (
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
    ></MainLayout>
  );
}
