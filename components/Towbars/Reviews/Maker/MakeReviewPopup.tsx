import React, { useState } from "react";
import { Modal, Rate } from "antd";
import Router from "next/router";

import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./MakeReviewPopup.module.scss";
import { useActions } from "hooks/useActions";
import { ITowbar } from "interfaces/towbar";

interface MakeReviewPopupProps {
  towbar: ITowbar;
}

const MakeReviewPopup = ({ towbar }: MakeReviewPopupProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [ratingValue, setRatingValue] = useState(1);

  const [image, setImage] = useState(null);

  const { isUserRating } = useTypedSelector((state) => state.rating);

  const { addRating } = useActions();

  const showModal = async () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("text", textValue);
    formData.append("value", String(ratingValue));
    formData.append("towbarId", String(towbar.id));
    image && formData.append("img", image);
    addRating(formData);
    setIsModalVisible(false);
    Router.reload();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const desc = ["1", "2", "3", "4", "5"];

  const onSelectImage = (e: any) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={styles.maker}>
      <button onClick={showModal} disabled={isUserRating?.isUserRating}>
        <span>Оставить отзыв</span>
      </button>
      <Modal
        title="Создать отзыв"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal}
        okText="Создать"
        cancelText="Отменить"
      >
        <div className={styles.title}>
          <div>
            <span>Введите заголовок:</span>
          </div>
          <div>
            <textarea
              name="title"
              cols={60}
              rows={1}
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.text}>
          <div>
            <span>Введите текст:</span>
          </div>
          <div>
            <textarea
              name="title"
              cols={60}
              rows={4}
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.rating}>
          <div>
            <span>Выберите рейтинг:</span>
          </div>
          <div>
            <Rate
              tooltips={desc}
              onChange={setRatingValue}
              value={ratingValue}
            />
          </div>
        </div>
        <div>
          <div>
            <span>Выберите фотоизображение для загрузки:</span>
          </div>
          <input
            className="mt-2 ml-1"
            name="myFile"
            type="file"
            onChange={onSelectImage}
          />
        </div>
      </Modal>
    </div>
  );
};

export default MakeReviewPopup;
