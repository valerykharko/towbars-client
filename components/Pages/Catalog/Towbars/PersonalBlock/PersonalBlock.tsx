import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Navigation, Pagination } from "swiper";

import {
  MobilePricePanel,
  TowbarPriceBlock,
  TowbarSpecifications,
  TowbarTitle,
  TreeMenu,
} from "components";

import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

import getTitleByBallType from "utils/towbars/getTitleByBallType";

import styles from "./PersonalBlock.module.scss";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PersonalBlock = () => {
  const router = useRouter();

  const { towbar } = useTypedSelector((state) => state.towbar);

  const { fetchTowbarById, addItemToCart } = useActions();

  useEffect(() => {
    Number(router.query.id) && fetchTowbarById(Number(router.query.id));
  }, [router.query]);

  return (
    towbar && (
      <div className={styles.container}>
        <div className={styles.personalBlock}>
          <TreeMenu
            item={`${getTitleByBallType(towbar.ball_type)} ${
              towbar?.vendor_code
            }`}
          />
          <TowbarTitle towbar={towbar} />
          <div className={styles.mainBlock}>
            <div className={styles.carousel}>
              <Swiper
                className={styles.swiper}
                lazy
                navigation
                pagination={{
                  clickable: true,
                }}
                modules={[Lazy, Pagination, Navigation]}
                scrollbar={{ draggable: true }}
              >
                {towbar.img.map((image) => (
                  <SwiperSlide key={image}>
                    <Image
                      className={`${styles.img} swiper-lazy`}
                      src={process.env.API_URL! + "/" + image}
                      alt="img"
                      width={1000}
                      height={650}
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </SwiperSlide>
                ))}

                {towbar.video_link &&
                  towbar.video_link.map((video, index) => (
                    <SwiperSlide key={video} id={`video${index}`}>
                      {({ isActive }) => (
                        <div>
                          {isActive && (
                            <div className={styles.videoSlide}>
                              <video
                                id={`video${index}`}
                                src={process.env.API_URL! + "/" + video}
                                className={`${styles.video} swiper-lazy`}
                                loop
                                muted
                                autoPlay
                              />
                              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                            </div>
                          )}
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <TowbarSpecifications towbar={towbar} />
          </div>
          <div className={styles.descriptionBlock}>
            <div className={styles.description}>
              <h3>Информация о производителе</h3>
              <span>{towbar.manufacturer.description}</span>
            </div>
            <div className={styles.description}>
              <h3>Информация о товаре</h3>
              <span>{towbar.description}</span>
            </div>
          </div>
        </div>
        <MobilePricePanel towbar={towbar} addItemToCart={addItemToCart} />
        <TowbarPriceBlock towbar={towbar} addItemToCart={addItemToCart} />
      </div>
    )
  );
};

export default PersonalBlock;
