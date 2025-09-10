import Masonry from "./Masonry";

const items = [
  {
    id: "1",
    img: "/src/assets/poster/Design1.png",
    height: 1000,
  },
  {
    id: "2",
    img: "/src/assets/poster/Design2.png",
    height: 550,
  },
  {
    id: "3",
    img: "/src/assets/poster/Design3.png",
    height: 1000,
  },

  {
    id: "4",
    img: "/src/assets/poster/birhday2.png",
    height: 550,
  },

  {
    id: "5",
    img: "/src/assets/poster/Design6.png",
    height: 1000,
  },

  {
    id: "6",
    img: "/src/assets/poster/birthday1.png",
    height: 1000,
  },

  {
    id: "7",
    img: "/src/assets/poster/banner2.png",
    height: 350,
  },

  {
    id: "8",
    img: "/src/assets/poster/banner1.png",
    height: 250,
  },

  {
    id: "9",
    img: "/src/assets/poster/banner3.png",
    height: 270,
  },

  {
    id: "10",
    img: "/src/assets/poster/Design7.png",
    height: 1000,
  },

  {
    id: "11",
    img: "/src/assets/poster/Design8.png",
    height: 550,
  },

  {
    id: "12",
    img: "/src/assets/poster/Design9.png",
    height: 550,
  },

  {
    id: "13",
    img: "/src/assets/poster/Design10.png",
    height: 550,
  },

  {
    id: "14",
    img: "/src/assets/poster/Design11.png",
    height: 550,
  },

  {
    id: "15",
    img: "/src/assets/poster/Design12.png",
    height: 550,
  },

  {
    id: "16",
    img: "/src/assets/poster/Design13.png",
    height: 550,
  },

  {
    id: "17",
    img: "/src/assets/poster/Design14.png",
    height: 1000,
  },

  {
    id: "18",
    img: "/src/assets/poster/Design15.png",
    height: 950,
  },

  {
    id: "19",
    img: "/src/assets/poster/Design16.png",
    height: 950,
  },

  {
    id: "20",
    img: "/src/assets/poster/Design17.png",
    height: 950,
  },

  {
    id: "21",
    img: "/src/assets/poster/Design18.png",
    height: 550,
  },

  {
    id: "22",
    img: "/src/assets/poster/sertifikat.png",
    height: 320,
  },
];

export default function Poster() {
  return (
    <section
      id=""
      className="min-h-screen w-full bg-black flex flex-col justify-between px-6 md:px-12 py-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 font-Amoria text-right">
        Poster Design
      </h2>

      <div className="w-full h-full">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
}
