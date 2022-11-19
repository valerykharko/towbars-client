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
import getAdvantages from "utils/towbars/getAdvantages";

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
                {towbar.img.map(
                  (image, index) =>
                    index <
                      getAdvantages(
                        towbar?.ball_type as string,
                        towbar?.manufacturer.name as string
                      ).count && (
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
                    )
                )}

                {/*<SwiperSlide>*/}
                {/*  <div className={styles.advantages}>*/}
                {/*    {getAdvantages(*/}
                {/*      towbar?.ball_type as string,*/}
                {/*      towbar?.manufacturer.name as string*/}
                {/*    ).advantages.map((elem, index) =>*/}
                {/*      index % 2 === 0 ? (*/}
                {/*        <div className={styles.advantageBlock}>*/}
                {/*          <Image*/}
                {/*            src={*/}
                {/*              process.env.API_URL! +*/}
                {/*              "/" +*/}
                {/*              towbar.img[elem.img - 1]*/}
                {/*            }*/}
                {/*            alt={`adv-icon-${index}`}*/}
                {/*            width={1000}*/}
                {/*            height={650}*/}
                {/*          />*/}
                {/*          <div className={styles.text}>*/}
                {/*            <span className={styles.title}>{elem.title}</span>*/}
                {/*            <span className={styles.subTitle}>*/}
                {/*              {elem.subTitle}*/}
                {/*            </span>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      ) : (*/}
                {/*        <div className={styles.advantageBlock}>*/}
                {/*          <div className={styles.text}>*/}
                {/*            <span className={styles.title}>{elem.title}</span>*/}
                {/*            <span className={styles.subTitle}>*/}
                {/*              {elem.subTitle}*/}
                {/*            </span>*/}
                {/*          </div>*/}
                {/*          <Image*/}
                {/*            src={*/}
                {/*              process.env.API_URL! +*/}
                {/*              "/" +*/}
                {/*              towbar.img[elem.img - 1]*/}
                {/*            }*/}
                {/*            alt={`adv-icon-${index}`}*/}
                {/*            width={1000}*/}
                {/*            height={650}*/}
                {/*          />*/}
                {/*        </div>*/}
                {/*      )*/}
                {/*    )}*/}
                {/*  </div>*/}
                {/*</SwiperSlide>*/}

                {towbar.video_link && towbar.video_link.map((video, index) => (
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
