import React from "react";
import { Container } from "components";

import styles from "./HowMakeOrder.module.scss";

const HowMakeOrder = () => {
  return (
    <Container>
      <div className={styles.title}>
        <h1>Как сделать заказ</h1>
        <strong>
          Оформление заказа онлайн доступно только для зарегистрированных
          пользователей
        </strong>
      </div>
      <div className={styles.block}>
        <h2>1. Войти или зарегистрироваться</h2>
        <p>
          Выбираем раздел "Войти", далее в всплывающем окне нажимаем на кнопку
          "Войти или зарегистрироваться" → авторизуйтесь → ссылка высылается на
          указанный Вами адрес электронной почты (e-mail) → откройте письмо, и
          перейдите по ссылке, указанной в письме, для завершения регистрации.
        </p>
        <span>
          <b>Важно! </b>В личном кабинете, пожалуйста, корректно вводите
          персональные данные.
        </span>
      </div>
      <div className={styles.block}>
        <h2>2. Добавить товар в корзину</h2>
        <p>
          Выбрать подходящее прицепное устройство для вашего автомобиля Вы
          можете на странице <b>"Подбор фаркопа"</b>, для этого необходимо
          поочерёдно заполнить форму → нажать кнопку "Подобрать" → откроется
          список фаркопов, по клику на которые Вы можете более подробно
          ознакомиться с их техническими характеристиками, описанием,
          информацией о производителе → выберите понравившийся фаркоп → нажмите
          кнопку «Добавить в корзину».
        </p>
        <span>
          <b>Важно! </b>При возникновении вопросов, пожалуйста, обращайтесь к
          нашим специалистам, они подберут для Вас оптимальные модели, которые
          по своим характеристикам будут максимально соответствовать Вашему
          запросу и бюджету.
        </span>
      </div>
      <div className={styles.block}>
        <h2>3. Перейти в корзину</h2>
        <p>
          Для продолжения оформления заказа перейдите в «Корзину». По клику на
          кнопку «Перейти в корзину» в карточке товара или нажав на корзину в
          правом верхнем углу сайта.
        </p>
      </div>
      <div className={styles.block}>
        <h2>4. Оформление заявки</h2>
        <p>
          В корзине представлен общий список выбранных товаров и предварительная
          сумма заказа. Здесь можно ещё раз просмотреть выбранные товары и в
          случае необходимости что-то из них удалить, отложить, либо добавить →
          при оформлении заказа корректно указывайте ФИО, адрес и номер
          мобильного телефон в международном формате → после оформления заказа в
          течении суток наш специалист свяжется с Вами и индивидуально согласует
          с Вами условия оплаты, сроки и способ доставки → после оформления
          заказа на Ваш e-mail электронным письмом мы направляем счёт на оплату,
          который можно оплатить в любом банке.
        </p>
        <span>
          <b>Важно! </b>Подтверждение заказа осуществляется оплатой.
        </span>
      </div>
      <div className={styles.block}>
        <h2>5. Отгрузка</h2>
        <p>
          Заказ доставляется бесплатно до ТК в г. Минске на выбор клиента. ТК
          осуществляет доставку по указанному Вами адресу (получить заказ Вы
          можете самостоятельно на пункте выдачи заказов или оформить курьерскую
          доставку до конкретного адреса). Услуги ТК оплачивает покупатель при
          получении товара. После сдачи заказа в ТК, Вам направляется информация
          для отслеживания отправления через сайт ТК.
        </p>
        <span>
          <b>Важно! </b>Отслеживать информацию о заказе можно в личном кабинете.
        </span>
      </div>
    </Container>
  );
};

export default HowMakeOrder;