import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

import { DropDownList } from "components";

import styles from "./SelectionBlock.module.scss";

const SelectionBlock = () => {
  const [dropDownList, setActiveDropDownList] = useState(false);
  const [position, setPosition] = useState(1);
  const [brand, setBrand] = useLocalStorage("brand", { id: 0, name: "" });
  const [model, setModel] = useLocalStorage("model", { id: 0, name: "" });
  const [generation, setGeneration] = useLocalStorage("generation", {
    id: 0,
    name: "",
  });
  const [bodyStyle, setBodyStyle] = useLocalStorage("bodyStyle", {
    id: 0,
    name: "",
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleOutSideClick = (event: any) => {
    if (dropDownList) {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(buttonRef.current)) {
        setActiveDropDownList(false);
      }
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", handleOutSideClick);
  }, []);

  const onButtonClick = () => {
    brand && model && generation && bodyStyle && Router.push("/catalog");
  };

  return (
    <div className={styles.selectionBlock}>
      <div className={styles.header}>
        <h2 className={styles.selectionText}>Подбор фаркопа</h2>
        <span className={styles.selectionDescription}>
          выберите подходящее прицепное устройство для вашего авто
        </span>
      </div>
      {hydrated && (
        <>
          <div className={styles.selection}>
            <div ref={buttonRef} className={styles.buttons}>
              <button
                onClick={() => {
                  setActiveDropDownList(!dropDownList);
                  setPosition(1);
                }}
              >
                <span>
                  {brand.name ? brand.name : "- выберите Модель авто -"}
                </span>
                <div className={styles.imgArrow}>
                  <Image
                    src="/static/images/icons/arrow-down.png"
                    alt="arrow-down"
                    width={12}
                    height={12}
                  />
                </div>
              </button>
              {dropDownList && position === 1 && (
                <DropDownList
                  position={position}
                  setActiveDropDownList={setActiveDropDownList}
                />
              )}
              <button
                disabled={Boolean(!brand.name)}
                onClick={() => {
                  setActiveDropDownList(!dropDownList);
                  setPosition(2);
                }}
              >
                <span>
                  {model.name ? model.name : "- выберите Марку авто -"}
                </span>
                <div className={styles.imgArrow}>
                  <Image
                    src="/static/images/icons/arrow-down.png"
                    alt="arrow-down"
                    width={12}
                    height={12}
                  />
                </div>
              </button>
              {dropDownList && position === 2 && (
                <DropDownList
                  position={position}
                  setActiveDropDownList={setActiveDropDownList}
                />
              )}
              <button
                disabled={Boolean(!model.name)}
                onClick={() => {
                  setActiveDropDownList(!dropDownList);
                  setPosition(3);
                }}
              >
                <span>
                  {generation.name
                    ? generation.name
                    : "- выберите Поколение авто -"}
                </span>
                <div className={styles.imgArrow}>
                  <Image
                    src="/static/images/icons/arrow-down.png"
                    alt="arrow-down"
                    width={12}
                    height={12}
                  />
                </div>
              </button>
              {dropDownList && position === 3 && (
                <DropDownList
                  position={position}
                  setActiveDropDownList={setActiveDropDownList}
                />
              )}
              <button
                disabled={Boolean(!generation.name)}
                onClick={() => {
                  setActiveDropDownList(!dropDownList);
                  setPosition(4);
                }}
              >
                <span>
                  {bodyStyle.name
                    ? bodyStyle.name
                    : "- выберите Тип кузова авто -"}
                </span>
                <div>
                  <Image
                    className={styles.imgArrow}
                    src="/static/images/icons/arrow-down.png"
                    alt="arrow-down"
                    width={12}
                    height={12}
                  />
                </div>
              </button>
              {dropDownList && position === 4 && (
                <DropDownList
                  position={position}
                  setActiveDropDownList={setActiveDropDownList}
                />
              )}
            </div>
          </div>
          <div className={styles.onSearchBtnBlock}>
            <button
              className={styles.onSearchBtn}
              onClick={onButtonClick}
              disabled={!Boolean(bodyStyle.name)}
            >
              <span>Подобрать</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectionBlock;
