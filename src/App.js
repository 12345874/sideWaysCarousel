import "./styles.css";
import Movie1 from "./assets/movies/SampleVideo1.mp4";
import Movie2 from "./assets/movies/SampleVideo2.mp4";
import Movie3 from "./assets/movies/SampleVideo3.mp4";
import Movie4 from "./assets/movies/SampleVideo4.mp4";
import Movie5 from "./assets/movies/SampleVideo5.mp4";
import Carousel from "./components/Carousels";

const _items = [
  {
    player: {
      title: "Efren Reyes",
      desc:
        'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: Movie1
    }
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc:
        "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: Movie2
    }
  },
  {
    player: {
      title: "Shane Van Boening",
      desc:
        'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: Movie3
    }
  },
  {
    player: {
      title: "Mike Sigel",
      desc:
        'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: Movie4
    }
  },
  {
    player: {
      title: "Willie Mosconi",
      desc:
        'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: Movie5
    }
  }
];

const _itemsOne = [
  {
    player: {
      title: "Efren Reyes",
      desc:
        'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg"
    }
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc:
        "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg"
    }
  },
  {
    player: {
      title: "Shane Van Boening",
      desc:
        'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg"
    }
  },
  {
    player: {
      title: "Mike Sigel",
      desc:
        'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg"
    }
  },
  {
    player: {
      title: "Willie Mosconi",
      desc:
        'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg"
    }
  }
];

export default function App() {
  return (
    <div className="App">
      <Carousel _items={_items} type="carouselOne" />
      {/* <Carousel _items={_itemsOne} type="carouselTwo" /> */}
    </div>
  );
}
