import React, { useEffect } from "react";
import Router from "next/router";

import Carousel from "react-multi-carousel";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import "react-multi-carousel/lib/styles.css";
import styles from "./CarouselModule.module.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselModule = () => {
  const { manufacturers } = useTypedSelector((state) => state.manufacturer);

  const { fetchManufacturers } = useActions();

  useEffect(() => {
    fetchManufacturers();
  }, []);

  return (
    <div className={styles.carouselBlock}>
      <span>Производители</span>
      <div className={styles.carousel}>
        <Carousel
          responsive={responsive}
          ssr={true}
          showDots={true}
          autoPlay={true}
          infinite={true}
        >
          {manufacturers
            .filter((elem) => elem?.img !== null)
            .map((elem) => (
              <div
                className={styles.carouselImages}
                key={elem.id}
                onClick={() => Router.push(`/manufacturers/${elem.name}`)}
              >
                <img
                  src={process.env.API_URL! + "/" + elem?.img[0]}
                  alt="manufacturer-logo"
                />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselModule;
