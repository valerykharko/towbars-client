import React from "react";

import styles from "./AboutUsBlock.module.scss";

const AboutUsBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about__left}>
        <h1>О нас</h1>
        <span>
          Наша компания осуществляет коммерческое представительство мировых
          производителей тягово-сцепных устройств (ФАРКОПОВ), а также другого
          сопутствующего и дополнительного оборудования для автомобилей
          отечественного и иностранного производства по самым приемлемым ценам
        </span>
        <div className={styles.about__left__description}>
          <span>
            ИНДИВИДУАЛЬНЫЙ ПОДХОД В ЛЮБОМ ВОПРОСЕ — ЭТО ПРИОРИТЕТ ДЕЯТЕЛЬНОСТИ
            НАШЕЙ КОМПАНИИ.
          </span>
        </div>
        <div className={styles.about__left__block}>
          <h2>Наша задача</h2>
          <span>
            Не просто продать, а максимально точно выяснить потребность каждого
            клиента и подобрать подходящий вариант, который по своим
            характеристикам будет максимально соответствовать Вашему запросу
          </span>
        </div>
        <div className={styles.about__left__description}>
          <span>
            ОТДАЕМ ПРЕДПОЧТЕНИЕ ПРОВЕРЕННЫМ МАРКАМ, ПОТОМУ ЧТО ГЛАВНАЯ НАША
            ЗАБОТА – ВАША БЕЗОПАСНОСТЬ И БЕЗОПАСНОСТЬ ВАШЕГО ГРУЗА.
          </span>
        </div>
        <div className={styles.about__left__footer}>
          <img
            src="https://купить-фаркоп.бел/gallery_gen/03d4d9b56a850ea5a75edee4ae0852f0.jpg"
            alt="towbars"
          />
          <span>
            Мы предлагаем для Вас широкий выбор моделей фаркопов, как
            оригинальных, так и аналогов, от престижных до доступных.
          </span>
        </div>
      </div>
      <div className={styles.about__right}>
        <img
          src="https://купить-фаркоп.бел/gallery_gen/c0535dce803dab0fb345e6544c740a4d.jpg"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default AboutUsBlock;
