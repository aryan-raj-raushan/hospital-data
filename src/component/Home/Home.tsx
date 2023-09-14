import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./Carousel/Carousel";
import Footer from "./footer/footer";
import { peopleChoseConst, sectionConst } from "../Const/const";

const Home = () => {
  return (
    <>
      <header>
        <div className="min-h-[75vh] z-10 md:relative overflow-hidden flex w-full items-baseline bg-gray-50">
          {/* /* ---------------------------------- Image --------------------------------- */}
          <div className="transform -skew-x-[10deg] overflow-hidden w-1/2 -right-12 rounded-bl-[12px] absolute top-0 h-full hidden md:block">
            <div className="transform skew-x-[10deg] absolute top-20 -right-2 h-full z-1 w-full bg-cover bg-no-repeat scale-[1.3] bg-center bg-hero-section"></div>
          </div>
          {/* Image end */}

          {/* /* ------------------------------ Left section ------------------------------  */}
          <div className="md:z-1 md:w-1/2 flex justify-center mt-20 ">
            <div className="flex flex-wrap mx-3 justify-center">
              <div className="w-full pl-10 flex gap-5 flex-col md:w-8/12">
                <h1 className="md:relative md:z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-5xl font-bold">
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
