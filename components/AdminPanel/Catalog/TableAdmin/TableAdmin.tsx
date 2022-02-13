import React, { useMemo, useState } from "react";
import { Table } from "antd";
import { json1 } from "../db/1";
import { json2 } from "../db/2";
import { json3 } from "../db/3";
import { json4 } from "../db/4";
import { json5 } from "../db/5";
import { json6 } from "../db/6";
import { json7 } from "../db/7";

import styles from "./TableAdmin.module.scss";

const TableAdmin = () => {
  const [data, setData] = useState<[]>([]);
  const [valuePlN, setValuePlN] = useState<number>(0.65);
  const [valueRUB, setValueRUB] = useState<number>(0.0341);
  const [vendorCode, setVendorCode] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [iO, setIo] = useState<object>({});

  const columns = [
    {
      title: "Марка",
      dataIndex: "brand",
      width: "8%",
    },
    {
      title: "Модель",
      dataIndex: "model",
      width: "15%",
    },
    {
      title: "Поколение",
      dataIndex: "generation",
      width: "10%",
    },
    {
      title: "Год выпуска",
      dataIndex: "year_of_issue",
      width: "10%",
    },
    {
      title: "Тип кузова",
      dataIndex: "body_style",
      width: "10%",
    },
    {
      title: "Производитель",
      dataIndex: "manufacturer",
      width: "8%",
    },
    {
      title: "Артикул",
      dataIndex: "vendor_code",
      width: "7%",
    },
    {
      title: "Цена (Польша)",
      dataIndex: "price_pl",
      width: "5%",
    },
    {
      title: "Цена (Россия)",
      dataIndex: "price_ru",
      width: "5%",
    },
    {
      title: "Цена (Капитал)",
      dataIndex: "price_cap",
      width: "5%",
    },
  ];

  const array = useMemo(() => {
    const dataSource: any = [];

    json1["Imiola"].map((item: any, index: any) => {
      dataSource.push({
        key: index,
        brand: item.brand,
        model: item.info,
        generation: null,
        year_of_issue: item.year_of_issue,
        body_style: null,
        manufacturer: "Imiola",
        vendor_code: item.vendor_code,
        price_pl: Math.round(item.main_price * valuePlN) + " BYN",
        price_ru: null,
        price_cap: null,
      });
    });

    json2["Steinhov"].map((item: any, index: any) => {
      dataSource.push({
        key: 1000 + index,
        brand: item.brand,
        model: item.model,
        generation: null,
        year_of_issue: item.start_of + " ... " + item?.end_of,
        body_style: item.body_style,
        manufacturer: "Steinhov",
        vendor_code: item.vendor_code,
        price_pl: Math.round(item.price * valuePlN) + " BYN",
        price_ru: null,
        price_cap: null,
      });
    });

    dataSource.forEach((item: any) => {
      let elemToChange: any;
      if (
        json3["Steinhov_Russia"].some((elem) => {
          elemToChange = elem;
          return elem.vendor_code === item.vendor_code;
        })
      ) {
        item.price_ru = Math.round(elemToChange.price * valueRUB) + " BYN";
      }
    });

    json4["AutoHak"].map((item: any, index: any) => {
      if (item.price) {
        dataSource.push({
          key: 5000 + index,
          brand: item.brand,
          model: item.model,
          generation: null,
          year_of_issue: item.year_of_issue,
          body_style: item.body_style,
          manufacturer: "AutoHak",
          vendor_code: item.vendor_code,
          price_pl:
            Math.round(
              item.price.replace("zł", "").replace(/[\s,]/g, "") * valuePlN
            ) + " BYN",
          price_ru: null,
          price_cap: null,
        });
      }
    });

    dataSource.forEach((item: any) => {
      let elemToChange: any;
      let itemToChange: any;
      if (
        json5["Capital"].some((elem) => {
          if (elem.manufacturer === "Steinhof") {
            elemToChange = elem;
            return elem.vendor_code === item.vendor_code;
          }
        })
      ) {
        item.price_cap = Math.round(elemToChange.price * valueRUB) + " BYN";
      }
      if (
        json5["Capital"].some((elem) => {
          if (elem.manufacturer === "IMIOLA") {
            itemToChange = elem;
            return (
              elem.vendor_code.replace(/[\.\/]/g, "") ===
              item.vendor_code.replace(/[\.\/]/g, "")
            );
          }
        })
      ) {
        item.price_cap = Math.round(itemToChange.price * valueRUB) + " BYN";
      }
    });

    json5["Capital"].map((item: any, index: any) => {
      if (
        (item.price && item.type === "Фаркоп") ||
        (item.price && item.type === "Фаркоп с электрикой")
      ) {
        // if (item.price) {
        //   dataSource.push({
        //     key: 45000 + index,
        //     brand: item.info,
        //     manufacturer: item.manufacturer,
        //     vendor_code: item.vendor_code,
        //     price_cap: Math.round(item.price * valueRUB) + " BYN",
        //   });
        // }
      }
    });

    dataSource.forEach((item: any) => {
      let elemToChange: any;
      if (
        json6["AutoHak_Russia"].some((elem) => {
          elemToChange = elem;
          return elem.vendor_code === item.vendor_code;
        })
      ) {
        item.price_ru = Math.round(elemToChange.price * valueRUB) + " BYN";
      }
    });

    json7["Westfalia"].map((item: any, index: any) => {
      if (
        item.price &&
        item.manufacturer === "Westfalia" &&
        item.max_hor !== "--"
      ) {
        dataSource.push({
          key: 15000 + index,
          brand: item.brand,
          model: item.model,
          generation: item.generation,
          year_of_issue: item.year_of_issue,
          body_style: item.body_style,
          manufacturer: "Westfalia",
          vendor_code: item.vendor_code,
          price_pl:
            Math.round(
              item.price.replace("zł", "").replace(/[\s,]/g, "") * valuePlN
            ) + " BYN",
          price_ru: null,
          price_cap: null,
        });
      }
    });

    return dataSource;
  }, []);

  const onClickHandler = () => {
    const arrayAfterFilter = array.filter((elem: any) => {
      return elem.vendor_code === vendorCode;
    });
    setData(arrayAfterFilter);
  };

  const onClickWithRUB = () => {
    const arrayAfterFilter = array.filter(
      (elem: any) => elem.price_ru !== null
    );
    setData(arrayAfterFilter);
  };

  const onClickWithCap = () => {
    const arrayAfterFilter = array.filter(
      (elem: any) => elem.price_cap !== null
    );
    setData(arrayAfterFilter);
  };

  const onStainer = (number: number) => {
    switch (number) {
      case 1: {
        const arrayAfterFilter = array.filter(
          (elem: any) => elem.manufacturer === "Imiola"
        );
        setData(arrayAfterFilter);
        break;
      }
      case 2: {
        const arrayAfterFilter = array.filter(
          (elem: any) => elem.manufacturer === "Steinhov"
        );
        setData(arrayAfterFilter);
        break;
      }
      case 3: {
        const arrayAfterFilter = array.filter(
          (elem: any) => elem.manufacturer === "AutoHak"
        );
        setData(arrayAfterFilter);
        break;
      }
      case 4: {
        const arrayAfterFilter = array.filter(
          (elem: any) => elem.manufacturer === "Westfalia"
        );
        setData(arrayAfterFilter);
        break;
      }
    }
  };

  const onAuto = () => {
    const arrayAfterFilter = array.filter((elem: any) => {
      if (elem.brand && elem.model) {
        return (
          elem.brand.toLowerCase().includes(brand.toLowerCase()) &&
          elem.model.toLowerCase().includes(model.toLowerCase())
        );
      } else if (elem.brand) {
        return elem.brand.toLowerCase().includes(brand.toLowerCase());
      }
    });
    setData(arrayAfterFilter);
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Поиск по артиклу"
            value={vendorCode}
            onChange={(e) => setVendorCode(e.target.value)}
          />
          <button onClick={onClickHandler}>Поиск</button>
          <button onClick={onClickWithRUB}>цена (Россия)</button>
          <button onClick={onClickWithCap}>цена (Капитал)</button>
        </div>
        <div className={styles.strainer}>
          <button onClick={() => onStainer(1)}>Imiola</button>
          <button onClick={() => onStainer(2)}>Steinhov</button>
          <button onClick={() => onStainer(3)}>Auto-hak</button>
          <button onClick={() => onStainer(4)}>Westfalia</button>
        </div>
        <div className={styles.filters}>
          <div>
            <span>Курс PLN</span>
            <input
              type="number"
              value={valuePlN}
              onChange={(e) => setValuePlN(Number(e.target.value))}
            />
          </div>
          <div>
            <span>Курс RUB</span>
            <input
              type="number"
              value={valueRUB}
              onChange={(e) => setValueRUB(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div className={styles.autoSearch}>
        <input
          type="text"
          placeholder="Марка..."
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Модель..."
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <button onClick={onAuto}>Поиск по авто</button>
      </div>
      <Table
        bordered
        dataSource={data.length > 0 ? data : array}
        columns={columns}
      />
    </div>
  );
};

export default TableAdmin;
