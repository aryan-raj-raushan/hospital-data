import Boost from "../react-icons/boost";
import Card from "../react-icons/card";
import CubeIcon from "../react-icons/cube";
import Person from "../react-icons/person";
import {
  faShip,
  faHandshake,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const fields: any = [
  { label: "Name", key: "Name" },
  { label: "Phone", key: "Phone" },
  { label: "DOB", key: "DOB" },
  { label: "Residence", key: "Residence" },
  { label: "Doctor Appointed", key: "Appointment" },
];

export const blogs = [
  {
    id: 1,
    title: "Blog Title 1",
    content: `Regular checkups with your doctor are a crucial part of maintaining good health. These appointments may seem like a hassle or an unnecessary expense, but they can actually save you a lot of trouble in the long run. In this blog, we'll discuss why regular checkups are so important.

      First and foremost, regular checkups help detect and prevent health issues early. Your doctor can identify potential problems before they become serious, allowing for early intervention and treatment. This can be especially important for conditions like diabetes, hypertension, and certain types of cancer, which often show no symptoms in their early stages.
      
      Moreover, checkups allow your doctor to monitor your overall health and track any changes in your body over time. They can also provide guidance on lifestyle factors, such as diet and exercise, to help you stay healthy.
      
      In addition to the physical aspect, regular checkups also contribute to your peace of mind. Knowing that you're taking proactive steps to maintain your health can reduce anxiety and stress. It's empowering to be in control of your well-being.
      
      Remember, prevention is often more effective and less costly than treating a health problem that has already developed. By scheduling regular checkups, you invest in your future health and well-being. Don't wait until you feel unwell to see your doctor. Make those appointments a priority and reap the benefits of a healthier, happier life.`,
  },
  {
    id: 2,
    title: "Blog Title 2",
    content: `In today's fast-paced world, stress has become a common companion for many of us. While some stress is normal and even beneficial in small doses, chronic stress can have a significant impact on our health. As a doctor, I often see patients whose health problems are exacerbated by stress. In this blog, I want to emphasize the importance of managing stress for better overall health.

      When we're stressed, our bodies release hormones like cortisol and adrenaline, which prepare us for a "fight or flight" response. While this can be helpful in emergency situations, chronic stress keeps these hormones elevated, which can lead to a range of health issues. These include high blood pressure, weakened immune function, digestive problems, and even mental health disorders like anxiety and depression.
      
      To manage stress, it's essential to find healthy coping mechanisms. Exercise, meditation, deep breathing, and spending time in nature are all effective ways to reduce stress levels. Additionally, maintaining a balanced lifestyle, getting enough sleep, and seeking support from friends, family, or a therapist can also make a significant difference.
      
      As a doctor, I encourage my patients to prioritize stress management as part of their overall health plan. It's not just about physical well-being; it's about holistic health. When you take steps to manage stress, you not only feel better mentally and emotionally, but you also reduce the risk of developing chronic diseases.
      
      Remember, your health is your most valuable asset, and stress management is an integral part of preserving it. Don't underestimate the power of relaxation and self-care in leading a healthier and happier life.`,
  },
  // Add more blog entries as needed
];

export const sectionConst = [
  {
    title: "24/7 Access",
    text: "We get insulted by others, lose trust for those We get back.",
    icon: <CubeIcon props="#000" />,
  },
  {
    title: "Flexible Plans",
    text: "We get insulted by others, lose trust for those We get back.",
    icon: <Person />,
  },
  {
    title: "Best Doctors",
    text: "We get insulted by others, lose trust for those We get back.",
    icon: <Boost />,
  },
  {
    title: "Affordable Prices",
    text: "We get insulted by others, lose trust for those We get back.",
    icon: <Card />,
  },
];

export const peopleChoseConst = [
  {
    icon: faShip,
    text: "It becomes harder for us to give others a hand.",
    subtext: "We get our heart broken by people we love.",
  },
  {
    icon: faHandshake,
    text: "As we live, our hearts turn colder.",
    subtext: "Cause pain is what we go through as we become older.",
  },
  {
    icon: faClockRotateLeft,
    text: "When we lose family over time.",
    subtext: "What else could rust the heart more over time? Blackgold.",
  },
];

export const clinicBlogs = [
  {
    id: 1,
    title: "The Importance of Regular Check-Ups",
    content:
      "Regular check-ups are crucial for maintaining your health. Visiting your doctor annually can help detect and prevent potential health issues early on. Don't wait until you're feeling unwell to see a doctor. Prevention is key to a long and healthy life.",
  },
  {
    id: 2,
    title: "Tips for a Healthy Lifestyle",
    content:
      "A healthy lifestyle plays a significant role in your overall well-being. It includes a balanced diet, regular exercise, adequate sleep, and stress management. Make small, sustainable changes in your daily routine to lead a healthier life.",
  },
  {
    id: 3,
    title: "Understanding Common Allergies",
    content:
      "Allergies can be bothersome and affect your quality of life. Knowing your allergies and how to manage them is essential. Whether it's seasonal allergies or food sensitivities, consult with your doctor to develop an effective allergy management plan.",
  },
];

export const icons = [
  {
    link: "facebook.com",
    icon: faFacebook,
  },
  {
    link: "twitter.com",
    icon: faTwitter,
  },
  {
    link: "instagram.com",
    icon: faInstagram,
  },
  {
    link: "pinterest.com",
    icon: faPinterest,
  },
  {
    link: "github.com",
    icon: faGithub,
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", url: "/about" },
      { label: "Careers", url: "#" },
      { label: "Press", url: "#" },
      { label: "Blog", url: "/about" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "Login", url: "/login" },
      { label: "Register", url: "/signup" },
      { label: "Add list", url: "/add-patients" },
      { label: "Contact", url: "/contact-us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", url: "#" },
      { label: "About Us", url: "/about" },
      { label: "Team", url: "#" },
      { label: "Privacy", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", url: "/about" },
      { label: "Service", url: "#" },
      { label: "Product", url: "#" },
      { label: "Pricing", url: "#" },
    ],
  },
];