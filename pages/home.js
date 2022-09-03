import DarkSection from "../components/home/dark-section/DarkSection";
import Testimonial from "../components/home/testimonial/Testimonial";
import FAQ from "../components/home/faq/FAQ";
import HeadingText from "../components/home/heading-text/HeadingText";
import Hero from "../components/home/hero/Hero";
import Layout from "../components/layout/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from "../assets/images/profile.jpeg";
import testiominal1 from "../assets/images/home/testimonial2.jpeg";
import testiominal2 from "../assets/images/home/testimonial1.jpeg";

export default function HomePage() {

  const testimonials = [
    {
      paragraphs: [
        "Ibn Abbas related that the Messenger of Allah (S) ““There is nothing like marriage, for two who love one another.”",
        "Marriage is God’s civilizational sunnah and from the great gifts given to humankind and an obligation for able Muslims. Amongst the great challenges that our Muslim community is facing in America is the facilitation of marriage and in particular healthy marriages. Ihsan coaching’s earnest and contextualized approach towards marital coaching is critical in our time given the predicament we find ourselves in. Ihsaans multi dimensional approach includes modern tools and resources, but most importantly is rooten in Islamic values and presented a spiritual dimension towards marital coaching, something missing in our time. We ask Allah to open doors for Farhan and his team, and benefit the ummah by them.",
      ],
      profileImg: testiominal2,
      name: 'Shaykh Umair Haseeb',
      designation: 'Director of Religious Affairs at Taleef',
    },
    {
      paragraphs: [
        "Ihsaan Coaching fills a much needed void in muslim communities. As an Imam I have personally worked with Ihsaan coaching and also have recommended many congregants to use Ihsaan for help with marriage, anxiety, and depression and have seen nothing but positive results alhamdulilah",
      ],
      profileImg: testiominal1,
      name: 'Shaykh Ilir Aliji',
      designation: 'Imam at Masjid Albani and Instructor at Islamic Institute of Texas',
    },
    {
      paragraphs: [
        "In a time where members of our communities are increasingly facing mental health issues, marital disputes etc, it is imperative to have services which cater to their needs. Alhamdulillah, it is a breath of fresh air that Br. Farhan and his team at Ihsan Coaching have been doing just that. They have stepped up to provide a needed platform for Muslims facing these realistic issues. Their coaches provide a balance of both the Islamic as well as secular perspectives when dealing with their clients. Alhamdulillah, our community has also established a partnership with Ihsan Coaching, so that our members also benefit from their services. I hope many others realize that there is someone to talk to when needing help. Please do not be silent and reach out to them! I highly recommend their organization. May Allah continue to grant them success and the ability to help others.",
      ],
      profileImg: profile,
      name: 'Mufti Asif Umar',
      designation: 'Islamic Wills USA',
    },
  ];

  return (
    <Layout>
      <Hero />
      <HeadingText />
      <DarkSection />
      <Testimonial testimonials={testimonials} mainHeading={"Trusted throughout local communities"}/>
      <FAQ />
    </Layout>
  );
}
