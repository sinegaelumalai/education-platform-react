import am1 from "../assets/am1.png";
import am2 from "../assets/am2.png";
import am3 from "../assets/am3.png";

const cards = [
    {
        image: am1,
        title: "Kurtis Classroom",
        subtitle: "The next generation of classroom learning.",
        dark: false,
        badge: false,
    },
    {
        image: am2,
        title: "Kurtis Classroom",
        subtitle: "The next generation of corporate learning.",
        dark: true,
        badge: false,
    },
    {
        image: am3,
        title: "Premium for schools",
        subtitle: "Create and teach interactive lessons students love.",
        dark: false,
        badge: true,
    },
];

const AmazingThings = () => {
    return (
        <section className="bg-[#f4f4f4] py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Heading */}

                <div className="text-center">

                    <h2 className="text-3xl md:text-5xl font-black text-[#2D241D]">
                        Amazing things are happening
                    </h2>

                    <div className="w-24 h-1 bg-[#4967F7] rounded-full mx-auto mt-3"></div>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

                    {cards.map((item, index) => (

                        <div
                            key={index}
                            className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div
                                className={`absolute inset-0 p-8 flex flex-col justify-center ${item.dark
                                        ? "bg-black/60 text-white"
                                        : "bg-gradient-to-r from-[#2F63D8]/90 to-transparent text-white"
                                    }`}
                            >

                                {item.badge && (
                                    <span className="bg-[#2D2D2D] text-white text-sm font-semibold px-4 py-1 rounded-full w-fit mb-5">
                                        New
                                    </span>
                                )}

                                <h3 className="text-2xl lg:text-4xl font-bold leading-tight max-w-[240px]">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-base lg:text-lg max-w-[260px] leading-relaxed">
                                    {item.subtitle}
                                </p>

                                <button className="mt-8 text-left font-bold hover:underline">
                                    Learn more
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Dots */}

                <div className="flex justify-center gap-3 mt-14">

                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-[#4967F7]"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>

                </div>

                {/* Bottom Text */}

                <div className="text-center mt-16">

                    <h2 className="text-3xl md:text-5xl font-black text-[#2D241D]">
                        Do you have a game code?
                    </h2>

                    <p className="mt-3 text-xl md:text-3xl text-[#666]">
                        Let's play for a while!
                    </p>

                </div>

            </div>
        </section>
    );
};

export default AmazingThings;