import bgimg4 from "../assets/bgimg4.png";

const stats = [
  {
    color: "bg-[#4566F7]",
    text: "More than 50% of US teachers use Kurtis",
  },
  {
    color: "bg-[#43B8F5]",
    text: "Players in more than 200 countries",
  },
  {
    color: "bg-[#FF4A5D]",
    text: "Over 30 million public games available",
  },
  {
    color: "bg-[#F7BE36]",
    text: "97% of the Fortune 500 use Kurtis",
  },
];

const ReadyToLearn = () => {
  return (
    <section className="bg-[#f5f5f5] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item, index) => (

            <div key={index} className="flex items-start gap-3">

              <div className={`w-1 h-14 ${item.color}`}></div>

              <p className="font-bold text-[#2D241D] leading-6">
                {item.text}
              </p>

            </div>

          ))}

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

          {/* Left */}

          <div className="flex justify-center">

            <img
              src={bgimg4}
              alt="Ready"
              className="w-full max-w-md"
            />

          </div>

          {/* Right */}

          <div>

            <h2 className="text-[40px] md:text-[64px] font-black leading-tight text-[#2D241D]">
              Ready for make
              <br />
              learning fun!
            </h2>

            <button className="mt-10 bg-[#4566F7] hover:bg-[#3555E6] transition text-white font-semibold px-12 py-4 rounded shadow-lg">
              Sign up for free
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ReadyToLearn;