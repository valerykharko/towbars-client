import React from "react";
import styles from "./ContactsBlock.module.scss";

const ContactsBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Контакты</h1>
        <span>
          Квалифицированные специалисты нашей компании с удовольствием
          предоставят Вам наиболее полную информацию о видах, моделях,
          стоимости, ответят на все интересующие Вас вопросы, предложат
          оптимальные модели, которые по своим характеристикам будут максимально
          соответствовать Вашему запросу и помогут определиться с выбором. Для
          этого Вам необходимо лишь сообщить: марку, модель, тип кузова, год
          выпуска Вашего автомобиля. Мы будем рады помочь Вам в оснащении Вашего
          авто
        </span>
      </div>
      <div className={styles.image}>
        <img
          src="https://купить-фаркоп.бел/gallery_gen/3af68f702f2e50d1d80285a6e0fafe24_1600x514.17769376181.jpg"
          alt="photo"
        />
      </div>
      <div className={styles.main}>
        <div className={styles.main__block}>
          <div>
            <h2>Телефон</h2>
            <h3>+375 29 187-00-12</h3>
          </div>
          <div>
            <h2>Email</h2>
            <h3>towbars.by@gmail.com</h3>
          </div>
        </div>
        <div className={styles.main__block}>
          <div>
            <h2>Рабочее время</h2>
            <span>бесплатная консультация специалиста</span>
            <h3>09:00 - 19:00</h3>
          </div>
          <div>
            <h2>Приём заказов онлайн</h2>
            <span>для заказа онлайн требуется регистрация</span>
            <h3>24/7</h3>
          </div>
        </div>
        <div className={styles.main__lastBlock}>
          <div>
            <h2>Доставка</h2>
            <span>обсуждается индивидуально</span>
            <h3>08:00 - 20:00</h3>
          </div>
          <div>
            <h2>Установка</h2>
            <span>по предварительной записи</span>
            <h3>09:00 - 18:00</h3>
          </div>
        </div>
      </div>
      <div className={styles.typesOfWork}>
        <h2>Схема работы с нами</h2>
        <div className={styles.topBlock}>
          <img
            src="https://купить-фаркоп.бел/gallery_gen/f6bcbc4327f4bbed152def3228859304_320x320.png"
            alt="1-step"
          />
          <div className={styles.topBlock__text}>
            <div>
              <span>1</span>
            </div>
            <div>
              <span>ЗАЯВКА</span>
            </div>
          </div>
          <div className={styles.topBlock__tip}>
            Вы можете выбрать удобный для Вас способ связи:
          </div>
        </div>
        <div className={styles.typesOfWork__variants}>
          <div>Заказать звонок</div>
          <div>Позвонить по номеру телефона, указанному в шапке сайта</div>
          <div>Связаться с нами в Viber</div>
          <div>Связаться с нами по email</div>
          <div>Оформить заявку на сайте онлайн</div>
        </div>
        <div className={styles.typesOfWork__blocks}>
          <div className={styles.typesOfWork__blocks__block}>
            <img
              src="https://купить-фаркоп.бел/gallery_gen/1ac390c92c079571dd6ed718d7250528_320x320.png"
              alt="2-step"
            />
            <div className={styles.typesOfWork__blocks__block__text}>
              <div>
                <span>2</span>
              </div>
              <div>
                <span>КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</span>
              </div>
            </div>
            <div className={styles.typesOfWork__blocks__block__description}>
              <span>
                Наш специалист подберёт для вас оптимальные модели, которые по
                своим характеристикам будут максимально соответствовать Вашему
                запросу и бюджету. Учитывая все ваши пожелания, просчитываем
                лучшее для Вас предложение
              </span>
            </div>
          </div>
          <div className={styles.typesOfWork__blocks__block}>
            <img
              src="https://купить-фаркоп.бел/gallery_gen/c68f8a48febbceb97b4b73b11824cde3_320x320.png"
              alt="3-step"
            />
            <div className={styles.typesOfWork__blocks__block__text}>
              <div>
                <span>3</span>
              </div>
              <div>
                <span>ОФОРМЛЕНИЕ ЗАКАЗА</span>
              </div>
            </div>
            <div className={styles.typesOfWork__blocks__block__description}>
              <span>
                При оформлении заказа наш специалист индивидуально согласует с
                Вами стоимость, условия оплаты, сроки и способ доставки. При
                необходимости запишет Вас на установку фаркопа
              </span>
            </div>
          </div>
          <div className={styles.typesOfWork__blocks__block}>
            <img
              src="https://купить-фаркоп.бел/gallery_gen/ba20bae841861aac08b848afa8568708_320x320.png"
              alt="4-step"
            />
            <div className={styles.typesOfWork__blocks__block__text}>
              <div>
                <span>4</span>
              </div>
              <div>
                <span>ПОЛУЧЕНИЕ ТОВАРА</span>
              </div>
            </div>
            <div className={styles.typesOfWork__blocks__block__description}>
              <span>
                После выполнения всех согласований осуществляется доставка или
                установка ТСУ. Вы становитесь обладателем сертифицированного
                фаркопа, который расширит возможности Вашего авто
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
