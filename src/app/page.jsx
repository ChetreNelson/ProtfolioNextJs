import Image from "next/image";

const Homepage = () => {
  return (
    <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* titlle */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
        {/* description */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          incidunt ad fugit, ipsum illo accusamus, autem dolor quidem
          dignissimos recusandae quaerat, nesciunt temporibus modi culpa
          delectus! Nostrum ipsa repudiandae sunt.
        </p>
        <div className=" flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
