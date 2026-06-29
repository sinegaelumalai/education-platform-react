import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const audience = [
    {
        image: img1,
        title: "At School",
        description:
            "Engaging group and distance learning for teachers and students.",
    },
    {
        image: img2,
        title: "At work",
        description:
            "For training, e-learning, interactive presentations and more.",
    },
    {
        image: img3,
        title: "At home",
        description:
            "Apps and games for family fun or home study.",
    },
    {
        image: img4,
        title: "Learning apps",
        description:
            "Engage kids with the Kahoot! family of learning apps.",
    },
];

const Audience = () => {
    return (
        <section className="bg-[#f4f4f4] py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">

                    <h2 className="text-[46px] font-black text-[#2d241d]">
                        Who is Kurtis for?
                    </h2>

                    <div className="w-24 h-1 bg-[#4564F5] mx-auto mt-2 rounded-full"></div>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mt-20">

                    {audience.map((item, index) => (
                        <div key={index}>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-14 h-14"
                            />

                            <h3 className="mt-8 text-[30px] font-bold text-[#2d241d]">
                                {item.title}
                            </h3>

                            <p className="mt-5 text-[18px] leading-9 text-[#666]">
                                {item.description}
                            </p>

                            <button className="mt-8 font-bold text-[#2d241d] hover:text-[#4564F5] transition">
                                Learn more
                            </button>

                        </div>
                    ))}

                </div>

                {/* Button */}

                <div className="flex justify-center mt-20">

                    <button className="bg-[#4564F5] hover:bg-[#2F52F3] text-white font-bold px-12 py-4 rounded-md shadow-lg transition duration-300 hover:scale-105">
                        SIGN UP NOW
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Audience;