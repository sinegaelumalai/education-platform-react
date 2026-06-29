import bgimg1 from "../assets/bgimg1.png";
import bgimg2 from "../assets/bgimg2.png";
import bgimg3 from "../assets/bgimg3.png";

const works = [
  {
    image: bgimg1,
    title: "Create",
    description:
      "It only takes minutes to create a learning game or trivia quiz on any topic, in any language.",
    reverse: false,
  },
  {
    image: bgimg2,
    title: "Host or share",
    description:
      "Host a live game with questions on a big screen or share a game with remote players.",
    reverse: true,
  },
  {
    image: bgimg3,
    title: "Play",
    description:
      "Game on! Join a kahoot with a PIN provided by the host and answer questions on your device.",
    reverse: false,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-24">

          <h2 className="text-3xl md:text-5xl font-black text-[#2D241D]">
            How does Kurtis work?
          </h2>

          <div className="w-20 h-1 bg-[#4566F7] rounded-full mx-auto mt-3"></div>

        </div>

        {/* Content */}

        <div className="space-y-24">

          {works.map((item, index) => (

            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >

              {item.reverse ? (
                <>
                  {/* Left Text */}

                  <div className="max-w-md">

                    <h3 className="text-3xl font-bold text-[#2D241D]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                  {/* Right Image */}

                  <div className="flex justify-center lg:justify-end">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-w-sm"
                    />

                  </div>
                </>
              ) : (
                <>
                  {/* Left Image */}

                  <div className="flex justify-center lg:justify-start">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-w-sm"
                    />

                  </div>

                  {/* Right Text */}

                  <div className="max-w-md">

                    <h3 className="text-3xl font-bold text-[#2D241D]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {item.description}
                    </p>

                  </div>
                </>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;