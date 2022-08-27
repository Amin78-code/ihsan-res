import Link from "next/link";
import "slick-carousel/slick/slick.css";
import FAQ from "../components/home/faq/FAQ";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";
import Hero from "../components/services/hero/Hero";
import hands from "../assets/images/services/hands.svg";
import Quran from "../assets/images/services/Quran.svg";
import couple from "../assets/images/services/couple.svg";
import ImgText from "../components/services/img-text/ImgText";
import engagement from "../assets/images/services/engagement.svg";
import DarkSection from "../components/home/dark-section/DarkSection";
import HeadingText from "../components/home/heading-text/HeadingText";
import GraySection from "../components/services/gray-section/GraySection";

const imgText1 = {
  img: hands,
  title: "Individual coaching",
  paragraph1:
    "These personalized one-on-one online coaching sessions can help you uncover solutions to a myriad of problems, allowing you to more clearly define and achieve your goals. We can help you build self-confidence, improve relationships, or even provide support for your career.",
  paragraph2:
    " Whether you need solutions to ongoing problems, need direction in how to achieve your personal goals or just aren’t feeling quite like yourself, our individual coaching services are tailored to your needs.",
  link: "individual",
};
const imgText2 = {
  img: engagement,
  title: "Premarital coaching",
  paragraph1:
    "Our premarital coaching services are made for individuals or couples considering a Nikah (marriage). You may not be having any problems with your partner, but couples still regularly sign up for premarital coaching to het ahead of potential challenges, and learn hot to identify issues and handle conflict before it arises.",
  paragraph2:
    "Topics such as the Islamic concept of marriage, marital preparation, communication and conflict resolution are just some of the areas we educate in and explore.",
  link: "premarital",
};
const imgText3 = {
  img: couple,
  title: "Marital coaching",
  paragraph1:
    "A healthy marriage requires consistent communication and compromise, but sometimes that can become lost between a couple. Our marital coaches focus on helping couples understand one another, and exploring conflict resolution techniques that work for you both.",
  paragraph2:
    "Our coaching services focuses on helping you and your partner truly understand on another, how to effectively communicate, and resolving conflicts in a way you’re both comfortable with. By addressing unresolved conflict, couples often feel relieved and more fulfilled after their coaching sessions.",
  link: "marital",
};
const imgText4 = {
  img: Quran,
  title: "Religious consultation",
  paragraph1:
    "Mental health is deeply rooted within Islam. We recognize the psycho-spiritual challenges you may face, which are ultimately key to your mental health and/or spiritual state.",
  paragraph2:
    "Our religious coaching staff have a strong grasp in Islamic Law and are religiously informed. Our religious consultation services are a simpler way to connect and speak directly with an Islamic scholar about any situation you’d like to discuss.",
  link: "religious",
};
export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ImgText data={imgText1} />
      <ImgText data={imgText2} flip={true} />
      <GraySection />
      <ImgText data={imgText3} />
      <ImgText data={imgText4} pb flip={true} />
    </Layout>
  );
}
