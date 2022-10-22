import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";
import { DropDownList } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./SelectionBlock.module.scss";
import { setUserAuto } from "store/actions/userActions";

interface SelectionBlockProps {
  text?: string;
  textButton?: string;
  location?: boolean;
}

const SelectionBlock = ({
  text,
  textButton,
  location,
}: SelectionBlockProps) => {
  const [dropDownList, setActiveDropDownList] = useState(false);
  const [position, setPosition] = useState(1);

  const buttonRef = useRef<HTMLDivElement>(null);

  const {
    brandValue,
    brandActive,
    modelValue,
    modelActive,
    generationValue,
    generationActive,
    bodyStyleValue,
    bodyStyleActive,
  } = useTypedSelector((state) => state.car);

  const {
    setModelActive,
    setGenerationActive,
    setBodyStyleActive,
    setUserAuto,
  } = useActions();

  const handleOutSideClick = (event: any) => {
    if (dropDownList) {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(buttonRef.current)) {
        setActiveDropDownList(false);
      }
    }
  };

  useEffect(() => {
    if (brandValue) {
      setModelActive(true);
    }
    if (modelValue) {
      setGenerationActive(true);
    }
    if (generationValue) {
      setBodyStyleActive(true);
    }
    document.body.addEventListener("mousedown", handleOutSideClick);
  }, [brandValue, modelValue, generationValue, bodyStyleValue]);

  const onButtonClick = () => {
    brandValue &&
    modelValue &&
    generationValue &&
    bodyStyleValue &&
    textButton === "Выбрать"
      ? setUserAuto(
          brandValue?.name,
          modelValue?.name,
          generationValue?.name,
          bodyStyleValue?.name
        )
      : Router.push("/catalog");
  };

  return (
    <div className={styles.selectionBlock}>
      <div className={styles.header}>
        <span className={styles.selectionText}>
          {text ? text : "Подберите фаркопы прямо сейчас"}
        </span>
        <img
          className={styles.selectIcon}
          src="/static/images/select.png"
          alt="select-icon"
        />
      </div>
      <div className={styles.selection}>
        <div className={styles.options}>
          <span>Марка</span>
          <span>Модель</span>
          <span>Поколение</span>
          <span>Тип кузова</span>
        </div>
        <div ref={buttonRef} className={styles.buttons}>
          <button
            disabled={!brandActive}
            onClick={() => {
              setActiveDropDownList(!dropDownList);
              setPosition(1);
            }}
          >
            <span>{brandValue ? brandValue.name : "- выберите -"}</span>
            <img src="/static/images/arrow-down.png" alt="arrow-down" />
          </button>
          <button
            disabled={!modelActive}
            onClick={() => {
              setActiveDropDownList(!dropDownList);
              setPosition(2);
            }}
          >
            <span>{modelValue ? modelValue.name : "- выберите -"}</span>
            <img src="/static/images/arrow-down.png" alt="arrow-down" />
          </button>
          <button
            disabled={!generationActive}
            onClick={() => {
              setActiveDropDownList(!dropDownList);
              setPosition(3);
            }}
          >
            <span>
              {generationValue ? generationValue.name : "- выберите -"}
            </span>
            <img src="/static/images/arrow-down.png" alt="arrow-down" />
          </button>
          <button
            disabled={!bodyStyleActive}
            onClick={() => {
              setActiveDropDownList(!dropDownList);
              setPosition(4);
            }}
          >
            <span>{bodyStyleValue ? bodyStyleValue.name : "- выберите -"}</span>
            <img src="/static/images/arrow-down.png" alt="arrow-down" />
          </button>
          {dropDownList ? (
            <DropDownList
              position={position}
              setActiveDropDownList={setActiveDropDownList}
              location={location}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.mainButton}>
        <button
          onClick={onButtonClick}
          disabled={
            !(brandActive && modelActive && generationActive && bodyStyleValue)
          }
        >
          {textButton ? textButton : "Подобрать"}
        </button>
      </div>
    </div>
  );
};

export default SelectionBlock;
