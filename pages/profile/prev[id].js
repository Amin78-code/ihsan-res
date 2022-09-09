// import axios from "axios"
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import couple from "../../assets/images/services/couple.svg";
import Content from "../../components/profile/content/Content";
import meeting from "../../assets/images/about-us/meeting.svg";
import person1 from "../../assets/images/about-us/person1.svg";
import person2 from "../../assets/images/about-us/person2.svg";
import person3 from "../../assets/images/about-us/person7.svg";
import person4 from "../../assets/images/about-us/person8.svg";
import person5 from "../../assets/images/about-us/person5.svg";
import person6 from "../../assets/images/about-us/person6.svg";
import person7 from "../../assets/images/about-us/person4.svg";
import person8 from "../../assets/images/about-us/person3.svg";
import BrownSection from "../../components/profile/brown-section/BrownSection";

const profiles = [
  {
    id: "Farhan_Ahmed",
    profileImg: person1,
    name: "Farhan Ahmed",
    slugName: "Farhan_Ahmed",
    designation: "Founder & Coach",
    status: "Masters in Clinical Mental Health Counseling",
    email: "farhan.ahmed@ihsancoaching.com",
    paragraph1:
      "Farhan Ahmed is a Licensed Clinical Professional Counselor and the founder of Ihsan Coaching. He completed his Masters in Clinical Mental Health Counseling from Argosy University. Prior to that, he graduated from Benedictine University with a Bachelors in Psychology. Farhan has worked as a therapist focusing on anxiety, depression, OCD, marital discord, sexual intimacy, self-esteem issues, anger management, manic disorders, and spiritual/personal development.",
    paragraph2:
      "In addition to having his Masters, Farhan also has extensive Islamic knowledge. He was part of the first graduating class of the Dream Program at Bayyinah Institute back in 2010. Afterwards, he went on to study Islamic sciences at both DarusSalam Seminary located in Lombard, IL and Darul Qasim located in Glen Ellyn, IL. There he spent time learning Islamic Jurisprudence, Aqeedah, Tafsir, higher level Arabic, and Hadith. Farhan currently has 3 years left to complete his Aalimiyah degree insha Allah. Farhan lives in the Chicagoland area with his wife and three kids.",
  },
  {
    id: "Maria_Mir",
    profileImg: person2,
    name: "Maria Mir",
    slugName: "Maria_Mir",
    designation: "Coach",
    status: "Master’s in Clinical Psychology",
    email: "maria.mir@ihsancoaching.com",
    paragraph1:
      "Maria Mir is a Licensed Marriage and Family Therapist with a Masters in Clinical Psychology from Pepperdine University. In addition, she graduated with a double major in Psychology and Women’s Studies from the University of California, Riverside. She has over ten years of experience providing mental health services to individuals, couples, children, and families. While Maria is well-versed in helping all types of clients, she specializes in working with mothers and helping them navigate through parenthood. She recognizes the daily struggles mothers go through and helps them deal with the stress of juggling both motherhood and everyday life.",
    paragraph2:
      "Maria genuinely enjoys meeting each client and appreciates the uniqueness that each one brings. Throughout her career, she has helped clients of all ages, backgrounds, and circumstances overcome their struggles. As a life coach, Maria is dedicated to helping her clients overcome the many challenges they face. She sincerely cares for her clients, their well-being and their success. Maria is both fluent in English and Urdu and is currently pursuing a Bachelors in Islamic Studies.",
  },
  {
    id: "Rehena_Rana",
    profileImg: person3,
    name: "Rehena Rana",
    slugName: "Rehena_Rana",
    designation: "Coach",
    status: "Master’s in Clinical Psychology",
    email: "rehana.rana@ihsancoaching.com",
    paragraph1:
      "Rehena Rana is a licensed psychologist in the state of Michigan. She graduated with a Masters in Clinical Psychology from the Michigan School of Professional Psychology and obtained her B.A. in Psychology and Political Science from the University of Michigan-Dearborn. Her professional experience consists of providing crisis therapy, individual therapy, and family therapy in various settings, including but not limited to community mental health, private practice, and the non-profit sector. She is currently serving as a Milieu Director in a child welfare agency that serves children, youth, and families who are abused, neglected, or at risk.",
    paragraph2:
      "Rehena enjoys spending quality time with her family and friends, reading, and traveling in her free time. Rehena currently lives in Boston with her husband and children. As a life coach, Rehena is dedicated to utilizing her skills to motivate clients in setting personalized goals and establishing accountability for personal and professional success.",
  },
  {
    id: "Rawand_Abdelghani",
    profileImg: person4,
    name: "Rawand Abdelghani",
    slugName: "Rawand_Abdelghani",
    designation: "Coach",
    status: "Master’s of Science in Social Work",
    email: "rawand.abdelghani@ihsancoaching.com",
    paragraph1:
      "Rawand Abdelghani is a Licensed Clinical Social Worker (LCSW) and therapist. She earned her Masters of Science in Social Work and her B.A. in Psychology from the University of Texas at Austin. She has over 5 years of experience providing mental health services and counseling to adults, adolescents, children, and families. Throughout her career she’s worked with clients from various backgrounds and different ages. Rawand has a passion for working within the Muslim community and enjoys serving as a mentor to Muslim youth and college students.",
    paragraph2:
      "Rawand utilizes a person-centered and strengths-based approach to empower clients to accomplish their goals and explore their hidden potential. She values the relationship with her clients and is passionate about supporting them through their personal journey and growth. Rawand currently lives in Austin, Texas.",
  },
  {
    id: "Asmaa_Mahran",
    profileImg: person5,
    name: "Asmaa Mahran",
    slugName: "Asmaa_Mahran",
    designation: "Coach",
    status: "Master’s of Science in Psychology",
    email: "asma.mehran@ihsancoaching.com",
    paragraph1:
      "Asmaa Mahran holds a Master’s degree in Science of Psychology from California Southern University, a diploma in hypnosis from Hypnosis Motivation Institute College of Hypnosis, and is certified in neuro-linguistics programming (NLP). Asmaa is also certified in marriage counseling from Gottman Institute and is certified in trauma recovery. Asmaa has experience working with clients dealing with trauma, anxiety, premarital coaching, relationship and marital conflicts, victims of abusing and narcissistic relationships, self-esteem issues, and vocational and avocational-related issues.",
    paragraph2:
      "Furthermore, Asmaa has studied Islamic Studies with various scholars both in the Middle East and the United States and has a diploma in Islamic Psychology from Islamic Online University. She is currently pursuing her PsyD Clinical psychology from California Southern University. As a coach, Asmaa enjoys working with her clients to get their desired outcomes. She conducts coaching sessions in both English and Arabic.",
  },
  {
    id: "Mohammed_Bemat",
    profileImg: person6,
    name: "Mohammed Bemat",
    slugName: "Mohammed_Bemat",
    designation: "Coach",
    status: "Master’s in Pastoral Studies",
    email: "mohammed.bemat@ihsancoaching.com",
    paragraph1:
      "Shaykh Mohammed Bemat memorized the Quran at the age of 13 and then pursued formal Islamic education in South Africa, where he attained a Bachelor of Arts in Arabic and Islamic Studies in 2014 from Darul Uloom Zakariyyah. Upon returning to Canada, while serving the Muslim community, he felt the need to bridge his knowledge of Islamic Sciences and Spirituality with modern-day spiritual care and psychotherapy. This led him to begin and complete his Masters in Pastoral Studies with a specialization in Spiritual Care and Psychotherapy at the University of Toronto.",
    paragraph2:
      "Shaykh Mohammed Bemat currently serves as the Counselor/Imam at ISNA. His clinical experience includes working with youth, couples, and families at North York General Hospital, University of Toronto, Newmarket Islamic Centre and the Ontario College of Arts and Design. Shaykh Bemat’s areas of interest include teaching, mentoring, counseling and working with the youth. As a coach, he plans to use his experience as a scholar and counselor to help clients overcome their challenges. Shaykh Mohammed Bemat is fluent in both English and Urdu. ",
  },
  {
    id: "Mufti_Zeshan_Ahmed",
    profileImg: person7,
    name: "Mufti Zeshan_Ahmed",
    slugName: "Mufti_Zeshan Ahmed",
    designation: "Religious Consultant",
    status: "Resident Scholar at Masjid Uthman",
    email: "zeeshan.ahmed@ihsancoaching.com",
    paragraph1:
      "Mufti Zeshan Ahmed was born and raised in Springfield, OH.  After moving to Chicago in his early teens, he enrolled at the Institute of Islamic Education (Elgin, IL) to memorize the Quran.  Upon successful completion of his memorization in 2011, his desire for higher Islamic education led him to enroll in and successfully complete the Alim course at the same institute.  In 2017, Mufti Zeshan decided to further his education by specializing in the field of issuing legal verdicts (iftaa) at Darul Iftaa Chicago under the tutelage of Mufti Abrar Mirza (may Allah protect him).",
    paragraph2:
      "Mufti Zeshan currently serves as the resident scholar at Masjid Uthman (Lombard, IL).  He continues to pursue his Islamic education through specializing in the various modes of Quran recitation and serving as the assistant Mufti at Darul Iftaa Chicago. In addition, he is also currently persuing his secular studies at a local college. He currently lives in Lombard, IL with his wife and children.",
  },
  {
    id: "Imam_Azhar_Subedar",
    profileImg: person8,
    name: "Imam Azhar Subedar",
    slugName: "Imam_Azhar_Subedar",
    designation: "Religious Consultant",
    status: "Masters in Islamic Sciences",
    email: "azhan.subedar@ihsancoaching.com",
    paragraph1:
      "Imam Azhar Subedar was born and raised in the West. He was also educated on the Religion of Islam in the West. He graduated from his 10-year studies of Islam in the U.K. As a Religious Scholar with a Master’s in Islamic Sciences and Arabic Literature, his vision is to address the current needs of the Muslim community by bringing relevancy to the Holy text while confronting the social issues of today’s world from a moral perspective.",
    paragraph2:
      "He has been serving the needs of Muslim communities across the United States of America, Florida and beyond, since 2002. He is the First Muslim to give the opening prayer at the Florida State Capitol, Florida Senate. He also delivered the opening prayer at the House of Representatives-Tallahassee, Florida. Imam Azhar is the founder of the Quran Trek®️ app. The first of its kind practical spiritual coaching program. Quran Trek®️ takes you on a guided tour through the Quran with a personalized experience and a unique, playful presentation. It guides you to explore the foundation and tools for spiritual and material well-being. ",
  },
];
export default function Profile({ id }) {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    let data = [];
    profiles.map((profile) => {
      profile.id === id && data.push(profile);
    });
    setProfileData({ ...data[0] });
  }, []);
  return (
    <Layout>
      {profileData && <Content data={profileData} />}
      <BrownSection id={profileData.id} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { id } = await ctx.query;
  return {
    props: {
      id,
    },
  };
}
