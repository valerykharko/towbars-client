import React, { useEffect, useState } from "react";

import { AdminPanel } from "components";

import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Auto.module.scss";

const Auto = () => {
  const [brandId, setBrandId] = useState<number>();
  const [brandVisible, setBrandVisible] = useState<boolean>();

  const [modelId, setModelId] = useState<number>();
  const [modelVisible, setModelVisible] = useState<boolean>();

  const [generationId, setGenerationId] = useState<number>();
  const [generationVisible, setGenerationVisible] = useState<boolean>();

  const { brand, model, generation } = useTypedSelector((state) => state.car);

  useEffect(() => {}, [brand, model, generation]);

  const {
    fetchBrandById,
    fetchModelById,
    fetchGenerationById,
    editBrand,
    editModel,
    editGeneration,
  } = useActions();

  const searchBrand = () => {
    brandId && fetchBrandById(brandId);
  };

  const saveBrand = () => {
    brandId &&
      typeof brandVisible !== "undefined" &&
      editBrand(brandId, brandVisible);
    setBrandVisible(undefined);
  };

  const searchModel = () => {
    modelId && fetchModelById(modelId);
  };

  const saveModel = () => {
    modelId &&
      typeof modelVisible !== "undefined" &&
      editModel(modelId, modelVisible);
    setModelVisible(undefined);
  };

  const searchGeneration = () => {
    generationId && fetchGenerationById(generationId);
  };

  const saveGeneration = () => {
    generationId &&
      typeof generationVisible !== "undefined" &&
      editGeneration(generationId, generationVisible);
    setGenerationVisible(undefined);
  };

  return (
    <AdminPanel link="Управление авто">
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.header}>
            <h2>Марка</h2>
            <div className={styles.search}>
              <span>Введите id</span>
              <input
                value={brandId || 0}
                onChange={(e) => setBrandId(Number(e.target.value))}
              />
            </div>
            <div className={styles.searchBtn} onClick={searchBrand}>
              <button>Поиск марки</button>
            </div>
          </div>
          <div className={styles.body}>
            {brand && (
              <div className={styles.result}>
                <div>{brand.name}</div>
                <div>
                  <input
                    type="checkbox"
                    checked={
                      typeof brandVisible !== "undefined"
                        ? brandVisible
                        : brand.visible
                    }
                    onChange={(event) => {
                      setBrandVisible(event.target.checked);
                    }}
                  />
                </div>
                <div>
                  <span>Сейчас {brand.visible ? "включено" : "выключено"}</span>
                </div>
              </div>
            )}
            {brand && (
              <div className={styles.saveBtn} onClick={saveBrand}>
                <button>Сохранить</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.header}>
            <h2>Модель</h2>
            <div className={styles.search}>
              <span>Введите id</span>
              <input
                value={modelId || 0}
                onChange={(e) => setModelId(Number(e.target.value))}
              />
            </div>
            <div className={styles.searchBtn} onClick={searchModel}>
              <button>Поиск модели</button>
            </div>
          </div>
          <div className={styles.body}>
            {model && (
              <div className={styles.result}>
                <div>{model.name}</div>
                <div>
                  <input
                    type="checkbox"
                    checked={
                      typeof modelVisible !== "undefined"
                        ? modelVisible
                        : model.visible
                    }
                    onChange={(event) => setModelVisible(event.target.checked)}
                  />
                </div>
                <div>
                  <span>Сейчас {model.visible ? "включено" : "выключено"}</span>
                </div>
              </div>
            )}
            {model && (
              <div className={styles.saveBtn} onClick={saveModel}>
                <button>Сохранить</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.header}>
            <h2>Поколение</h2>
            <div className={styles.search}>
              <span>Введите id</span>
              <input
                value={generationId || 0}
                onChange={(e) => setGenerationId(Number(e.target.value))}
              />
            </div>
            <div className={styles.searchBtn} onClick={searchGeneration}>
              <button>Поиск поколения</button>
            </div>
          </div>
          <div className={styles.body}>
            {generation && (
              <div className={styles.result}>
                <div>{generation.name}</div>
                <div>
                  <input
                    type="checkbox"
                    checked={
                      typeof generationVisible !== "undefined"
                        ? generationVisible
                        : generation.visible
                    }
                    onChange={(event) =>
                      setGenerationVisible(event.target.checked)
                    }
                  />
                </div>
                <div>
                  <span>
                    Сейчас {generation.visible ? "включено" : "выключено"}
                  </span>
                </div>
              </div>
            )}
            {generation && (
              <div className={styles.saveBtn} onClick={saveGeneration}>
                <button>Сохранить</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminPanel>
  );
};

export default Auto;
