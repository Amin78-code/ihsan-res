import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";
import Hero from "../components/premarital/hero/Hero";
import Content from "../components/premarital/content/Content";
import engagement from "../assets/images/services/engagement.svg";
import BrownSection from "../components/premarital/brown-section/BrownSection";

const heroContent = {
  title: " Premarital coaching",
  paragraph1:
    "Our one-on-one coaching services can help you build self-confidence, improve your relationships, support your career ambitions, or help you achieve your goals.",
};
const imgText1 = {
  sessions: [
    {
      title: "Session 1",
      text: "The first session starts with an open discussion between the potential couple led by the Marital Coach. We’ll delve into key topics such as religion, culture, personalities, finances, intimacy, family, expectations, etc. This session will help identify key differences and seek to resolve them.",
    },
    {
      title: "Session 2 and 3",
      text: "The Marital Coach will meet with each individual separately to review the outcomes of Session 1, and provide an open platform for each individual to disclose any thoughts or concerns.",
    },
    {
      title: "Session 4",
      text: "In this collective session, the Marital Coach will present their assessment of the previous three sessions and identify areas of development. The potential couple will try to reconcile any areas of concern through discussion.",
    },
    {
      title: "Session 5",
      text: "The last session will be a consultation with an Islamic Scholar who will review the Islamic principles and responsibilities of marriage. The potential couple will have an opportunity to ask any questions they may have.",
    },
  ],
  img: engagement,
  title: "Who is this for?",
  paragraph1:
    "Premarital coaching is made for people thinking about or who want to prepare for a Nikah.",
  paragraph2:
    "You may not be having any problems with your partner, but couples still regularly sign up for premarital coaching to get ahead of potential challenges, and learn how to identify issues and handle conflict before it arises.",
};

export default function HomePage() {
  return (
    <Layout>
      <Hero data={heroContent} />
      <Content data={imgText1} />
      <BrownSection />
    </Layout>
  );
}
