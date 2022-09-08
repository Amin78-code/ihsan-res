import Layout from "../../components/layout/layout";
// import Hero from "../../components/book-appointment/hero/Hero";
import Content from "../../components/book-appointment/content/Content";
// import BrownSection from "../../components/book-appointment/brown-section/BrownSection";
import hands from "../../assets/images/services/hands.svg";
import engagement from "../../assets/images/services/engagement.svg";
import { useEffect, useState } from "react";
import TextImg from "../../components/blog-details/textImg";
import Hero from "../../components/blog-details/hero/Hero";
import anxiety from "../../assets/images/blogs/Anxiety-Management-image1-blog1.jpg";
import anxiety2 from "../../assets/images/blogs/Anxiety-Management-image2-blog1.jpg";
import parentCoaching1 from "../../assets/images/blogs/Parent-Coaching-blog-image-2.jpg";
import parentCoaching2 from "../../assets/images/blogs/Parent-Coaching-blog-image-3.jpg";

const heroContentAnxiety = {
  title: "Anxiety Management Techniques",
  // paragraph1: "August 26, 2022",
};
const heroContentParenting = {
  title: "Parenting Management Techniques",
  // paragraph1: "August 26, 2022",
};
const AnxietyManagement = [
  {
    type: "p",
    text: "Fear, uncertainty, risks, and mistakes break us down in many ways. Sometimes the impact is so significant that it takes us a long time to recover. Even when we do finally recover, we are afraid of what can happen in the future. The struggle with anxiety is real and is at times challenging to overcome. Ignoring the issue will only complicate the problem and cause more stress and anxiety. This is why learning anxiety management techniques is essential.",
  },
  {
    type: "h-level-1",
    text: "What is anxiety?",
  },
  {
    type: "p",
    text: "Everybody worries from time to time, which is normal. However, when we excessively and constantly think about something that may or may not happen in the future, that is when it becomes a problem. In other words, we need to be concerned when the anxiety builds up to such a point where it starts to impact our daily life and the things we want to do. Anxiety has been labeled as one of the most common mental health diagnoses. Approximately 40 million people suffer from the same battle on a yearly basis.  However, most people do not learn any anxiety management techniques to help them overcome their anxiety. One of the best ways to manage anxiety is to seek the assistance of a life coach. A life coach will help support you in recognizing the mental and physical symptoms, talk you through your reactions, provide you with proactive tips, and help you track your progress. Life coaches can also help you learn effective anxiety management techniques.  ",
  },
  {
    type: "h-level-2",
    text: "How To Help Someone With Anxiety?",
  },
  {
    type: "p",
    text: "Anxiety effects people both psychologically and physically. Often when we see a loved one dealing with anxiety, we don’t know what to do. It is easier for us to avoid the issue altogether and act like we don’t even notice them dealing with it. However, in this article we want to mention five anxiety management techniques that you can use to help a loved one dealing with anxiety:,",
  },
  {
    type: "h-level-4",
    text: "1. Communicate,",
  },
  {
    type: "p",
    text: "When it comes to anxiety management techniques, it is important to take baby steps. The fundamental element is effective communication, which would involve a give-and-take from both parties. Unfortunately, those battling with anxiety may not be able to keep their side of the bargain and might not communicate well. Due to their anxiety, many people become introverts and begin to avoid family and friends. Asking them simple questions like how you can help them lets the person know you are there for them, you care, and they can depend on you.,",
  },
  {
    type: "h-level-4",
    text: "2. Stop Faultfinding,",
  },
  {
    type: "p",
    text: "It is already highly complicated for people with anxiety to open up. On top of that, if they feel like they are being judged for their fears or insecurities, it can only make the situation worse. Therefore, it is important to listen attentively to what your friend or family member is telling you. If they do not feel like they are being supported, they may never open up to you again. Do not make them feel like it is their fault or make them feel like they are weak. Understand that what you might dismiss as a silly fear is real to them. ,",
  },
  {
    type: "image",
    img: anxiety,
  },
  {
    type: "h-level-4",
    text: "3. Not Everything Needs A Quick Fix,",
  },
  {
    type: "p",
    text: "Often we feel compelled to quickly “fix” the people we care about. However, telling someone with anxiety “calm down” or “just relax” can aggravate the situation by giving the impression that you don’t care about them. Moreover, such words could trigger them further by making them become angry. So, what should you do? The truth is that one of the best anxiety management techniques is just listening to them and asking them what they need because everyone has their own timeline. Being there for them and processing their feelings can do the magic trick. ,",
  },
  {
    type: "h-level-4",
    text: "4. Initiate Realization,",
  },
  {
    type: "p",
    text: "Knowing and understanding what helps and doesn’t is another great anxiety management technique. When helping someone with their anxiety, it is essential to figure out which physical and emotional changes are effective in helping them remain calm and not fearful. Emotions are linked to movements within our body and our body language sends signals to the brain. This in turn eventually impacts our mood and thoughts. That is why physical activity is one of the best ways to relieve anxiety to some extent.,",
  },
  {
    type: "image",
    img: anxiety2,
  },
  {
    type: "h-level-4",
    text: "5. Instill Encouragement,",
  },
  {
    type: "p",
    text: "A big drawback of anxiety is that people who suffer from it often develop a habit of frequently avoiding tasks or emotions that make them afraid. What may feel insignificant to us, such as meeting new people or flying in an airplane, might be very difficult for them. Understanding how to help someone with anxiety may entail urging them to make a long-overdue appointment to help them build self-confidence.   ,",
  },
  {
    type: "p",
    text: "The best way to help someone with anxiety is to offer them support. Recommending them to a life coach can expand their support system and help them learn effective anxiety management techniques to overcome their anxiety. Our life coaches at Ihsan Coaching first help their clients by identifying the root causes of their anxiety. Once they have identified the root causes, our life coaches then help the individuals understand what they can do to manage their anxiety in order to live a happier and more productive life. ,",
  },
];

const ParentingTechniques = [
  {
    type: "p",
    text: "The truth is that parents are human, and they too will make mistakes. However, those mistakes can come at a significant cost when it involves children. Parents often normalize unhealthy parent-child dynamics and adopt harmful practices due to cultural upbringing. Just because they might have been raised in a certain way does not mean they should repeat the cycle. Cultural norms change country by country, and children may not relate to back home practices. Parents often focus on a child’s physical well-being, but tend to forget their mental well-being. They work hard to provide the best lifestyle for their child, but it often comes at the cost of building a strong and healthy relationship. Parents strive to give their children the world, yet at times fail to understand that what they really need is empathy and love.",
  },
  {
    type: "p",
    text: "As parents, we only want the best for our children. We want them to be successful not only in this world, but also in the hereafter. Therefore, we do everything we can to try and provide our children with the best education both academically and religiously. However, children are observational learners and are mostly influenced by our actions. No matter how good of an education a parent may give their child, if the relationship is strained and toxic, the child is more susceptible to self-destructive behaviors. Therefore, it should be a priority that we, as parents, ensure that we are the best version of ourselves. That is why parent coaching is important and beneficial. Parent coaching teaches parents how to connect with their children and fulfill their emotional needs while nurturing their personalities. ?",
  },
  {
    type: "h-level-1",
    text: "what is parent coaching??",
  },
  {
    type: "p",
    text: "Parent coaching is when parents meet with a trained professional coach in order to learn better parenting techniques and strategies. You may have a difficult child with whom you feel you cannot communicate with or get through to, and therefore unsure what steps to take. Experts in parent coaching provide a non-judgmental, safe space for parents to talk about their difficulties, and provide proven strategies and psychoeducation. It can be the extra push you need to help you be the best parent. Parents can learn how to implement effective disciplining strategies, build trust between themselves and their children and create a happy family environment. Parent coaching services help parents strengthen communication and diminish hurdles they may feel exists between them and their children.  ?",
  },
  {
    type: "image",
    img: parentCoaching1,
  },
  {
    type: "h-level-1",
    text: "When Is Parent Coaching Needed? ?",
  },
  {
    type: "p",
    text: "Several studies have shown that parent coaching positively influences children’s mental stability and helps parents feel less stressed. Whether you are a first-time parent seeking knowledge on how to take care of a child or a parent having difficulty connecting with their teenager, parent coaching can help you feel supported and in control. Parents often try to learn as they go and make many mistakes on the way; however, this can cause a lot of harm to the child. Parent coaching becomes substantially more crucial when a child has begun exhibiting behavioral issues such as excessive disobedience, aggression, or drug use. Parents don’t always know what to do in these situations and might make it worse. Instead of understanding and helping their child, they may alienate them even further. Therefore, it is best to consult with a parent coach to help them think clearly and not act on emotion. Even guidance on electronics, friends or discipline can be sought through parent coaching. Any parent who hopes to learn effective strategies to understand and support their child will benefit from parent coaching services. ?",
  },
  {
    type: "image",
    img: parentCoaching2,
  },

  {
    type: "h-level-1",
    text: "Meeting Them Halfway?",
  },
  {
    type: "p",
    text: "Communication and handling your child require different kinds of parental skills. No one is just born with these skills, but parent coaching services can help expedite the process. The best way to ensure a healthy relationship with your child is to find minor topics in which you can meet them halfway. It is important to understand where your child is coming from and learn strategies through which they can comprehend your viewpoint as well. Parents have to remember that in order to build trust, they have to learn to be non-judgmental. This may be difficult and parents may want to correct their child; however, this might cut off further communication. Children want to be heard and understood as well. This does not mean that parents give into everything their child says, but it allows both parties to open up and meet half way.",
  },

  {
    type: "h-level-1",
    text: "How Do We Begin? ",
  },
  {
    type: "p",
    text: "Each parenting session is 50 minutes. Parents will first choose which professional coach they want to work with. The initial session is spent gathering information and setting tangible goals, which will benefit both the child and parents. The parent coach will provide psychoeducation, parenting strategies, and intervention methods. The parent coaching sessions generally require complete honesty and a willingness to be open and receptive to trying something different. Throughout the parent coaching process, parents will gain a significant amount of self-awareness, allowing them to learn more about their parenting techniques and what they can improve upon. Change first begins with ourselves. Therefore, the sooner you begin, the sooner your relationship will improve with your child.   ",
  },
];

export default function BookAppointment({ blogTitle }) {
  console.log("blogTitle", blogTitle);

  return (
    <Layout>
      {blogTitle == "anxiety-management-techniques" ? (
        <>
          <Hero data={heroContentAnxiety}   />
          <TextImg
            data={AnxietyManagement} 
          />
        </>
      ) : (
        ""
      )}
      {blogTitle ==
      "parenting-techniques-and-the-impact-they-can-have-on-children" ? (
        <>
          <Hero data={heroContentParenting} />
          <TextImg
            data={ParentingTechniques}
            title={"Parenting Techniques and the Impact on Children"}
          />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { blogTitle } = await ctx.query;
  return {
    props: {
      blogTitle,
    },
  };
}
