import React, { useEffect } from "react";
import "./Carousels.scss";
import CarouselSlideItem from "./Carousels/CarouselsSlideItem";

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Carousel = ({ _items, type }) => {
  const length = _items.length;

  console.log(length, _items);
  const keys = Array.from(Array(_items.length).keys());

  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [touchPosition, setTouchPosition] = React.useState(null);
  const [width, setWidth] = React.useState(window.innerWidth);
  const bigLength = items.length;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    // if (width > 768) {
    //   setInterval(() => {
    //     // Code to be executed after 2 seconds
    //     nextClick();

    //   }, 3000);
    // } else {
    //   clearInterval();
    // }

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  React.useEffect(() => {
    if (isTicking) sleep(800).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  /**
   * function to handle previous click
   * @param {*} jump
   */
  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  /**
   * function to handle next click
   * @param {*} jump
   */
  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  /**
   * function to add the swipeable feature to the carousel
   * @param {*} e
   */

  const handleTouchStart = (event) => {
    // const touchDown = e.touches[0].clientX;
    // setTouchPosition(touchDown);
    if (event.type === "touchstart") {
      setTouchPosition(event.touches[0].clientX);
    } else if (event.type === "mousedown") {
      setTouchPosition(event.clientX);
      document.addEventListener("mousemove", handleTouchMove);
      document.addEventListener("mouseup", handleTouchEnd);
    }
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextClick();
    }

    if (diff < -5) {
      prevClick();
    }
  };

  const handleTouchEnd = () => {
    setTouchPosition(null);
  };

  return (
    <div className="carousel__wrap">
      <div
        className="carousel__inner"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
      >
        <div className={`carousel__container`}>
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
                _items={_items}
                width={width}
                type={type}
                length={length}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
