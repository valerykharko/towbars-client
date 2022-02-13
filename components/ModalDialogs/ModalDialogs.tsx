import { Modal, Button } from "antd";
import React, { useEffect } from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import { IBodyStyle, IBrand, IGeneration, IModel } from "interfaces/car";
import styles from "components/DropDownList/DropDownList.module.scss";

const ModalDialogs = () => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const {
    brandValue,
    modelValue,
    generationValue,
    bodyStyleValue,
    brands,
    models,
    generations,
    bodyStyles,
  } = useTypedSelector((state) => state.car);

  const showModal = (value: number) => {
    value === 1
      ? setVisible1(true)
      : value === 2
      ? setVisible2(true)
      : value === 3
      ? setVisible3(true)
      : setVisible4(true);
  };

  const handleOk = (value: number) => {
    setConfirmLoading(true);
    if (value === 1) {
      setTimeout(() => {
        setVisible1(false);
        setConfirmLoading(false);
      }, 2000);
    } else if (value === 2) {
      setTimeout(() => {
        setVisible2(false);
        setConfirmLoading(false);
      }, 2000);
    } else if (value === 3) {
      setTimeout(() => {
        setVisible3(false);
        setConfirmLoading(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setVisible4(false);
        setConfirmLoading(false);
      }, 1000);
    }
  };

  const handleCancel = (value: number) => {
    value === 1
      ? setVisible1(false)
      : value === 2
      ? setVisible2(false)
      : value === 3
      ? setVisible3(false)
      : setVisible4(false);
  };

  const {
    setBrandValue,
    setModelValue,
    setGenerationValue,
    setBodyStyleValue,
    fetchBrands,
    fetchModels,
    fetchGenerations,
    fetchBodyStyles,
  } = useActions();

  const setValueBrand = (value: IBrand) => {
    setBrandValue(value);
  };
  const setValueModel = (value: IModel) => {
    setModelValue(value);
  };
  const setValueGeneration = (value: IGeneration) => {
    setGenerationValue(value);
  };
  const setValueBodyStyle = (value: IBodyStyle) => {
    setBodyStyleValue(value);
  };

  useEffect(() => {
    fetchBrands();
    brandValue && fetchModels(brandValue.id);
    brandValue && modelValue && fetchGenerations(brandValue.id, modelValue.id);
    brandValue &&
      modelValue &&
      generationValue &&
      fetchBodyStyles(brandValue.id, modelValue.id, generationValue.id);
  }, [brandValue, modelValue, generationValue, bodyStyleValue]);

  return (
    <>
      <Button
        type="primary"
        onClick={() => showModal(1)}
        style={{ marginRight: 5 }}
      >
        {brandValue?.name ? brandValue?.name : "Выбрать марку"}
      </Button>
      <Button
        type="primary"
        onClick={() => showModal(2)}
        style={{ marginRight: 5 }}
      >
        {modelValue?.name ? modelValue?.name : "Выбрать модель"}
      </Button>
      <Button
        type="primary"
        onClick={() => showModal(3)}
        style={{ marginRight: 5 }}
      >
        {generationValue?.name ? generationValue?.name : "Выбрать поколение"}
      </Button>
      <Button
        type="primary"
        onClick={() => showModal(4)}
        style={{ marginRight: 5 }}
      >
        {bodyStyleValue?.name ? bodyStyleValue?.name : "Выбрать тип кузова"}
      </Button>
      <Modal
        title="Выберите марку из списка"
        visible={visible1}
        onOk={() => handleOk(1)}
        confirmLoading={confirmLoading}
        onCancel={() => handleCancel(1)}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={styles.brand}
            onClick={() => setValueBrand(brand)}
          >
            <span>{brand.name}</span>
          </div>
        ))}
      </Modal>
      <Modal
        title="Выберите марку из списка"
        visible={visible2}
        onOk={() => handleOk(2)}
        confirmLoading={confirmLoading}
        onCancel={() => handleCancel(2)}
      >
        {models.map((model) => (
          <div
            key={model.id}
            className={styles.brand}
            onClick={() => setValueModel(model)}
          >
            <span>{model.name}</span>
          </div>
        ))}
      </Modal>
      <Modal
        title="Выберите марку из списка"
        visible={visible3}
        onOk={() => handleOk(3)}
        confirmLoading={confirmLoading}
        onCancel={() => handleCancel(3)}
      >
        {generations.map((generation) => (
          <div
            key={generation.id}
            className={styles.brand}
            onClick={() => setValueGeneration(generation)}
          >
            <span>{generation.name}</span>
          </div>
        ))}
      </Modal>
      <Modal
        title="Выберите марку из списка"
        visible={visible4}
        onOk={() => handleOk(4)}
        confirmLoading={confirmLoading}
        onCancel={() => handleCancel(4)}
      >
        {bodyStyles.map((bodyStyle) => (
          <div
            key={bodyStyle.id}
            className={styles.brand}
            onClick={() => setValueBodyStyle(bodyStyle)}
          >
            <span>{bodyStyle.name}</span>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default ModalDialogs;
