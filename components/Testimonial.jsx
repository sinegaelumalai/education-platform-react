import user1 from "../assets/user1.png";

const Testimonial = () => {
  return (
    <section className="bg-[#4566F7] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our best customers
          </h2>

          <div className="w-24 h-1 bg-white mx-auto rounded-full mt-4"></div>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Left */}

          <div className="flex flex-col items-center relative">

            {/* Speech Bubble */}

            <div className="relative bg-white rounded-3xl px-12 py-8 shadow-xl">

              <p className="text-3xl font-semibold text-[#2D241D]">
                I love these games!
              </p>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45"></div>

            </div>

            <img
              src={user1}
              alt="Customer"
              className="w-48 h-48 rounded-full object-cover mt-8 border-4 border-white"
            />

          </div>

          {/* Right */}

          <div className="lg:border-l border-white/60 lg:pl-12">

            <h3 className="text-2xl font-bold text-white">
              Martha | Norwegian Air
            </h3>

            <p className="text-white/90 leading-8 mt-8">
              Recusandae sunt voluptate repellat velit dolorem eos nostrum
              cupiditate. Labore porro cupiditate reiciendis enim neque.
              Modi eos autem expedita voluptatibus dignissimos repellat.
            </p>

            <p className="text-white/90 leading-8 mt-8">
              Sit et aut minus quod vitae. Aut occaecati cupiditate neque
              dolore amet beatae quasi aliquam.
            </p>

            {/* Company */}

            <div className="mt-10 inline-block bg-[#3557EA] px-6 py-4 rounded">

              <h4 className="text-4xl font-bold text-white tracking-wide">
                norwegian
              </h4>

            </div>

          </div>

        </div>

        {/* Dots */}

        <div className="flex justify-center gap-4 mt-20">

          <span className="w-4 h-4 rounded-full bg-white"></span>

          <span className="w-4 h-4 rounded-full bg-[#FFD54A]"></span>

          <span className="w-4 h-4 rounded-full bg-white"></span>

          <span className="w-4 h-4 rounded-full bg-white"></span>

        </div>

      </div>

    </section>
  );
};

export default Testimonial;