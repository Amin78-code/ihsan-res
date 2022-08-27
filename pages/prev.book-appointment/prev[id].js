import Layout from "../../components/layout/layout";
// import Hero from "../../components/book-appointment/hero/Hero";
import Content from "../../components/book-appointment/content/Content";
// import BrownSection from "../../components/book-appointment/brown-section/BrownSection";
import hands from '../../assets/images/services/hands.svg';
import engagement from '../../assets/images/services/engagement.svg';
import { useEffect, useState } from "react";

const heroContent = {
  title: ' Premarital coaching',
  paragraph1: "Our one-on-one coaching services can help you build self-confidence, improve your relationships, support your career ambitions, or help you achieve your goals.",
} 
const appointmentDetails = 
[
    {
        id:'Farhan_Ahmed',
        sessions: [
    {
        title: "INDIVIDUAL SESSION",
        price: '99.00',
        text: 'This includes 1 one on one session for 50 minutes.',
    },
    {
        title: "COUPLES SESSION",
        price: '125.00',
        text: 'This includes one couples session. Each session will be 50 minutes long.',
    },
    {
        title: "PREMARITAL COACHING",
        price: '500.00',
        text: 'This includes 5 sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR INDIVIDUAL SESSIONS",
        price: '350.00',
        text: ' This includes 4 one on one sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR COUPLES SESSIONS",
        price: '400.00',
        text: 'This includes 4 couples session. Each session will be 50 minutes long.',
    },
    {
        title: "RELIGIOUS CONSULTATION",
        price: '99.00',
        text: 'This includes 1 session either individually or with multiple people. Each session will be 50 minutes.',
    },
    ],
   },
    {
        id:'Maria_Mir',
        sessions: [
    {
        title: "INDIVIDUAL SESSION",
        price: '99.00',
        text: 'This includes 1 one on one session for 50 minutes.',
    },
    {
        title: "COUPLES SESSION",
        price: '125.00',
        text: 'This includes one couples session. Each session will be 50 minutes long.',
    },
    {
        title: "PREMARITAL COACHING",
        price: '500.00',
        text: 'This includes 5 sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR INDIVIDUAL SESSIONS",
        price: '350.00',
        text: ' This includes 4 one on one sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR COUPLES SESSIONS",
        price: '400.00',
        text: 'This includes 4 couples session. Each session will be 50 minutes long.',
    },
    {
        title: "RELIGIOUS CONSULTATION",
        price: '99.00',
        text: 'This includes 1 session either individually or with multiple people. Each session will be 50 minutes.',
    },
    ],
   },
    {
        id:'Rehena_Rana',
        sessions: [
    {
        title: "INDIVIDUAL SESSION",
        price: '99.00',
        text: 'This includes 1 one on one session for 50 minutes.',
    },
    {
        title: "COUPLES SESSION",
        price: '125.00',
        text: 'This includes one couples session. Each session will be 50 minutes long.',
    },
    {
        title: "PREMARITAL COACHING",
        price: '500.00',
        text: 'This includes 5 sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR INDIVIDUAL SESSIONS",
        price: '350.00',
        text: ' This includes 4 one on one sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR COUPLES SESSIONS",
        price: '400.00',
        text: 'This includes 4 couples session. Each session will be 50 minutes long.',
    },
    {
        title: "RELIGIOUS CONSULTATION",
        price: '99.00',
        text: 'This includes 1 session either individually or with multiple people. Each session will be 50 minutes.',
    },
    ],
   },
    {
        id:'Rawand_Abdelghani',
        sessions: [
    {
        title: "INDIVIDUAL SESSION",
        price: '99.00',
        text: 'This includes 1 one on one session for 50 minutes.',
    },
    {
        title: "COUPLES SESSION",
        price: '125.00',
        text: 'This includes one couples session. Each session will be 50 minutes long.',
    },
    {
        title: "PREMARITAL COACHING",
        price: '500.00',
        text: 'This includes 5 sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR INDIVIDUAL SESSIONS",
        price: '350.00',
        text: ' This includes 4 one on one sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR COUPLES SESSIONS",
        price: '400.00',
        text: 'This includes 4 couples session. Each session will be 50 minutes long.',
    },
    {
        title: "RELIGIOUS CONSULTATION",
        price: '99.00',
        text: 'This includes 1 session either individually or with multiple people. Each session will be 50 minutes.',
    },
    ],
   },
    {
        id:'Asmaa_Mahran',
        sessions: [
    {
        title: "INDIVIDUAL SESSION",
        price: '99.00',
        text: 'This includes 1 one on one session for 50 minutes.',
    },
    {
        title: "COUPLES SESSION",
        price: '125.00',
        text: 'This includes one couples session. Each session will be 50 minutes long.',
    },
    {
        title: "PREMARITAL COACHING",
        price: '500.00',
        text: 'This includes 5 sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR INDIVIDUAL SESSIONS",
        price: '350.00',
        text: ' This includes 4 one on one sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR COUPLES SESSIONS",
        price: '400.00',
        text: 'This includes 4 couples session. Each session will be 50 minutes long.',
    },
    {
        title: "RELIGIOUS CONSULTATION",
        price: '99.00',
        text: 'This includes 1 session either individually or with multiple people. Each session will be 50 minutes.',
    },
    ],
   },
    {
        id:'Mohammed_Bemat_Coach',
        sessions: [
    {
        title: "INDIVIDUAL SESSION",
        price: '99.00',
        text: 'This includes 1 one on one session for 50 minutes.',
    },
    {
        title: "COUPLES SESSION",
        price: '125.00',
        text: 'This includes one couples session. Each session will be 50 minutes long.',
    },
    {
        title: "PREMARITAL COACHING",
        price: '500.00',
        text: 'This includes 5 sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR INDIVIDUAL SESSIONS",
        price: '350.00',
        text: ' This includes 4 one on one sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR COUPLES SESSIONS",
        price: '400.00',
        text: 'This includes 4 couples session. Each session will be 50 minutes long.',
    },
    {
        title: "RELIGIOUS CONSULTATION",
        price: '99.00',
        text: 'This includes 1 session either individually or with multiple people. Each session will be 50 minutes.',
    },
    ],
   },
    {
        id:'Mufti_Zeshan_Ahmed',
        sessions: [
    {
        title: "INDIVIDUAL SESSION",
        price: '99.00',
        text: 'This includes 1 one on one session for 50 minutes.',
    },
    {
        title: "COUPLES SESSION",
        price: '125.00',
        text: 'This includes one couples session. Each session will be 50 minutes long.',
    },
    {
        title: "PREMARITAL COACHING",
        price: '500.00',
        text: 'This includes 5 sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR INDIVIDUAL SESSIONS",
        price: '350.00',
        text: ' This includes 4 one on one sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR COUPLES SESSIONS",
        price: '400.00',
        text: 'This includes 4 couples session. Each session will be 50 minutes long.',
    },
    {
        title: "RELIGIOUS CONSULTATION",
        price: '99.00',
        text: 'This includes 1 session either individually or with multiple people. Each session will be 50 minutes.',
    },
    ],
   },
    {
        id:'Imam_Azhar_Subedar',
        sessions: [
    {
        title: "INDIVIDUAL SESSION",
        price: '99.00',
        text: 'This includes 1 one on one session for 50 minutes.',
    },
    {
        title: "COUPLES SESSION",
        price: '125.00',
        text: 'This includes one couples session. Each session will be 50 minutes long.',
    },
    {
        title: "PREMARITAL COACHING",
        price: '500.00',
        text: 'This includes 5 sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR INDIVIDUAL SESSIONS",
        price: '350.00',
        text: ' This includes 4 one on one sessions. Each session will be 50 minutes long.',
    },
    {
        title: "FOUR COUPLES SESSIONS",
        price: '400.00',
        text: 'This includes 4 couples session. Each session will be 50 minutes long.',
    },
    {
        title: "RELIGIOUS CONSULTATION",
        price: '99.00',
        text: 'This includes 1 session either individually or with multiple people. Each session will be 50 minutes.',
    },
    ],
   },


]

export default function BookAppointment({id}) {
    const [sessionDetails, setSessionDetails] = useState({})
    useEffect( () => {
        let data =[]
        appointmentDetails.map(profile=>{
            profile.id === id && data.push({...profile})
        })
        setSessionDetails({...data[0]})
         
    }, [])
    console.log(sessionDetails)
  return (
    <Layout>
       {sessionDetails && <Content data={sessionDetails.sessions} />
 } </Layout>
  );
}

export async function getServerSideProps(ctx){
    const  {id} =  await ctx.query
    return{
        props:{
            id
        }
    }
  }