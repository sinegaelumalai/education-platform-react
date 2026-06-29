import box from "../assets/box.png";

const FeaturesGames = () => {
  return (
    <section className="min-h-screen bg-[#f7c52b] flex items-center justify-center">

      <div className="max-w-6xl mx-auto px-6">

        <img
          src={box}
          alt="Features Game"
          className="w-full max-w-4xl mx-auto"
        />

      </div>

    </section>
  );
};

export default FeaturesGames;