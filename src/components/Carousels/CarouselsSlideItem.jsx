import React, { useEffect } from "react";
import "./CarouselsSlideItem.scss";

const slideWidth = 30;

/**
 * function to fetch the details with dynamic styles
 * @param {*} position
 * @param {*} idx
 * @param {*} activeIdx
 * @param {*} _items
 * @returns
 */
const createItem = (position, idx, activeIdx, _items, length) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`
    },
    player: _items[idx].player
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 1 };
      break;
  }

  return item;
};

/**
 * render each card
 * @param {*} param0
 * @returns
 */
const CarouselSlideItem = ({
  pos,
  idx,
  activeIdx,
  _items,
  width,
  type,
  length
}) => {
  const item = createItem(pos, idx, activeIdx, _items, length);

  return (
    <li
      className={`${"carousel__slide-item"}`}
      style={item.styles}
      onClick={() => console.log(idx)}
    >
      <div className="carousel__slide-item-img-link">
        {/* <img src={item.player.image} alt={item.player.title} /> */}
        {type === "carouselOne" ? (
          <video src={item.player.image} controls muted />
        ) : (
          <img src={item.player.image} alt={item.player.title} />
        )}
      </div>
    </li>
  );
};

export default CarouselSlideItem;
