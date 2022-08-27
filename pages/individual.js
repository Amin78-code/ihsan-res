import Hero from "../components/individual/hero/Hero";
import Content from "../components/individual/content/Content";
import Layout from "../components/layout/layout";
import hands from '../assets/images/services/hands.svg';
import engagement from '../assets/images/services/engagement.svg';
import couple from '../assets/images/services/couple.svg';
import Quran from '../assets/images/services/Quran.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrownSection from "../components/individual/brown-section/BrownSection";

const hero = {
  title: 'Individual coaching',
  paragraph1: " Our one-on-one coaching services can help you build self-confidence, improve your relationships, support your career ambitions, or help you achieve your goals.",
}
const imgText1 = {
  img: hands,
  title: 'Individual coaching',
  paragraph1: "These personalized one-on-one online coaching sessions can help you uncover solutions to a myriad of problems, allowing you to more clearly define and achieve your goals. We can help you build self-confidence, improve relationships, or even provide support for your career.",
  paragraph2: " Whether you need solutions to ongoing problems, need direction in how to achieve your personal goals or just aren’t feeling quite like yourself, our individual coaching services are tailored to your needs."
}
const imgText2 = {
  img: engagement,
  title: 'Premarital coaching',
  paragraph1: "Our premarital coaching services are made for individuals or couples considering a Nikah (marriage). You may not be having any problems with your partner, but couples still regularly sign up for premarital coaching to het ahead of potential challenges, and learn hot to identify issues and handle conflict before it arises.",
  paragraph2: "Topics such as the Islamic concept of marriage, marital preparation, communication and conflict resolution are just some of the areas we educate in and explore."
}
const imgText3 = {
  img: couple,
  title: 'Marital coaching',
  paragraph1: "A healthy marriage requires consistent communication and compromise, but sometimes that can become lost between a couple. Our marital coaches focus on helping couples understand one another, and exploring conflict resolution techniques that work for you both.",
  paragraph2: "Our coaching services focuses on helping you and your partner truly understand on another, how to effectively communicate, and resolving conflicts in a way you’re both comfortable with. By addressing unresolved conflict, couples often feel relieved and more fulfilled after their coaching sessions."
}
const imgText4 = {
  img: Quran,
  title: 'Religious consultation',
  paragraph1: "Mental health is deeply rooted within Islam. We recognize the psycho-spiritual challenges you may face, which are ultimately key to your mental health and/or spiritual state.",
  paragraph2: "Our religious coaching staff have a strong grasp in Islamic Law and are religiously informed. Our religious consultation services are a simpler way to connect and speak directly with an Islamic scholar about any situation you’d like to discuss."
}
export default function HomePage() {
  return (
    <Layout>
      <Hero data={hero} />
      <Content data={imgText1} />
      <BrownSection />
    </Layout>
  );
}
