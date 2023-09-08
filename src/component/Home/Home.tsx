import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Boost from "../react-icons/boost";
import Card from "../react-icons/card";
import CubeIcon from "../react-icons/cube";
import Person from "../react-icons/person";
import {
  faShip,
  faHandshake,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import Footer from "./footer/footer";

const Home = () => {
  const blogs = [
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
  const sectionConst = [
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

  const peopleChoseConst = [
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

  return (
    <>
      <header>
        <div className="min-h-[75vh] relative overflow-hidden flex w-full items-baseline bg-gray-50">
          {/* /* ---------------------------------- Image --------------------------------- */}
          <div className="transform -skew-x-[10deg] overflow-hidden w-1/2 -right-12 rounded-bl-[12px] absolute top-0 h-full hidden md:block">
            <div
              className="transform skew-x-[10deg] absolute top-20 -right-2 h-full z-0 w-full bg-cover bg-no-repeat scale-[1.3] bg-center"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
              }}
            ></div>
          </div>
          {/* Image end */}

          {/* /* ------------------------------ Left section ------------------------------  */}
          <div className="z-1 w-1/2 flex justify-center mt-20 ">
            <div className="flex flex-wrap mx-3 justify-center">
              <div className="w-full pl-10 flex gap-5 flex-col md:w-8/12">
                <h1 className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-5xl font-bold">
                  Feel Better About
                </h1>
                <h1 className="text-gray-700 text-5xl font-bold ">
                  Finding Healthcare
                </h1>
                <p className="text-gray-500 font-normal text-xl">
                  The time is now for it be okay to be great. People in this
                  world shun people for being nice.
                </p>
                <div className="flex items-center gap-5 pt-4">
                  <button className="bg-gray-900 text-white text-base font-normal  px-4 py-2 rounded-lg shadow-md hover:scale-105 duration-300 transition-all ease-linear">
                    Get Started
                  </button>
                  <button className="text-gray-900 text-base font-medium hover:scale-105 duration-300 transition-all ease-linear">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* left section end */}
        </div>
      </header>

      {/* /* ----------------------------- Middle section -----------------------------  */}

      <section className="pt-8 bg-white px-28">
        <h3 className="text-gray-700 font-bold text-4xl text-center">
          What we do
        </h3>
        <div className="w-full flex flex-wrap gap-3 justify-between pt-10 pb-10 ">
          {sectionConst.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-lg w-[300px] shadow-xl drop-shadow-xl text-center h-48"
              >
                {item.icon}
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* /* ----------------------------- end 1st section ---------------------------- */}

      <section className="py-10 bg-white px-28">
        <div className="flex items-center w-full justify-between">
          <div className="w-1/2">
            <div className="drop-shadow-xl text-center flex justify-center">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=987&amp;q=80"
                alt="img-blur-shadow"
                className="shadow drop-shadow-xl rounded-xl max-h-[600px]"
              />{" "}
            </div>
          </div>
          <div className="w-1/2 px-5">
            <div className="flex flex-col gap-4 items-start px-4">
              <h3 className="text-[32px] leading-snug font-bold self-stretch text-gray-700">
                Find the right doctor right at your fingertips
              </h3>
              <p className="text-gray-500 font-normal text-lg">
                It really matters and then like it really doesn't matter. What
                matters is the people who are sparked by it. And the people who
                are like offended by it, it doesn’t matter. Because it's about
                motivating the doers. Because I’m here to follow my dreams and
                inspire other people to follow their dreams, too.
              </p>
              <button className="mt-4 px-4 py-2 border bg-gradient-to-r from-cyan-300 to-blue-500 shadow text-white text-base font-normal rounded-lg hover:scale-110 duration-300 transition-all ease-in-out">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* /* ----------------------------- end 2nd section ----------------------------  */}

      <section className="py-8 bg-white px-28">
        <div className="flex w-full px-16 gap-4">
          <div className="basis-1/2">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl font-bold">
              Why people choose us
            </h3>
            <p className="text-gray-500 py-4 font-normal text-base leading-6 w-11/12">
              Pain is what we go through as we become older. We get insulted by
              others, lose trust for those others. We get backstabbed by
              friends. It becomes harder for us to give others a hand.
            </p>
            <div className="text-gray-700 font-normal text-base cursor-pointer hover:animate-bounce duration-500">
              More about us &rarr;
            </div>
          </div>
          <div className="flex flex-col items-start pl-5 gap-10 ">
            {peopleChoseConst.map((item: any, index: number) => {
              return (
                <div className="flex gap-3 items-center" key={index}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="lg"
                    className="bg-gray-700 p-4 rounded-full"
                    color="#fff"
                  />
                  <p className="text-gray-500 text-base ">
                    {item.text} <br /> {item.subtext}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* /* ----------------------------- end 3rd section ----------------------------  */}

      <section className="py-5 bg-white">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center text-center gap-4 pb-4">
            <h2 className="text-3xl font-bold text-gray-600">
              Clients reviews
            </h2>
            <p className="text-base text-gray-500 text-center font-normal">
              See what people from all around the world are saying about our
              hospital.
            </p>
          </div>
          <div className="">
            <Carousel />
          </div>
        </div>
      </section>

      {/* /* ----------------------------- end 4th section ---------------------------- */}

      <footer className="py-5 bg-white">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
