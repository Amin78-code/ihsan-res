import Hero from "../components/about-us/hero/Hero"; 
import TextSection from "../components/about-us/text-section/TextSection"; 
import BrownSection from "../components/about-us/brown-section/BrownSection"; 
import Team from "../components/about-us/team/Team"; 
import JoinTeam from "../components/about-us/join-team/JoinTeam"; 
import Layout from "../components/layout/layout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <TextSection />
      <BrownSection />
      <Team />
      <JoinTeam />
    </Layout>
  );
}
