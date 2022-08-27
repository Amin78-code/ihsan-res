import Layout from "../components/layout/layout";
import Hero from "../components/marital/hero/Hero";
import Content from "../components/marital/content/Content";
import BrownSection from "../components/marital/brown-section/BrownSection";
import couple from '../assets/images/services/couple.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const hero = {
    title: 'Marital coaching',
    paragraph1: "Our marital coaching focuses on helping you and your partner understand one another, how to effectively communicate and conflict resolution.",
}
const imgText1 = {
    img: couple,
    title: 'Individual coaching',
    paragraph1: "These personalized one-on-one online coaching sessions can help you uncover solutions to a myriad of problems, allowing you to more clearly define and achieve your goals. We can help you build self-confidence, improve relationships, or even provide support for your career.",
    paragraph2: " Whether you need solutions to ongoing problems, need direction in how to achieve your personal goals or just aren’t feeling quite like yourself, our individual coaching services are tailored to your needs."
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
