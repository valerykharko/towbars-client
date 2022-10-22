import React, { useEffect, useMemo, useState } from "react";
import { Checkbox, Table } from "antd";
import { json1 } from "../db/1";
import { json2 } from "../db/2";
import { json3 } from "../db/3";
import { json4 } from "../db/4";
import { json5 } from "../db/5";
import { json6 } from "../db/6";
import { json7 } from "../db/7";
import { json8 } from "../db/8";
import { json9 } from "../db/9";
import { json10 } from "../db/10";
import { json11 } from "../db/11";
import { json12 } from "../db/12";
import { json13 } from "../db/13";
import { json14 } from "../db/14";
import { json15 } from "../db/15";
import { json16 } from "../db/16";
import { json17 } from "../db/17";

import styles from "./TableAdmin.module.scss";

const TableAdmin = () => {
  const [data, setData] = useState<[]>([]);
  const [valuePlN, setValuePlN] = useState<number>(0.595);
  const [valueRUB, setValueRUB] = useState<number>(0.037);
  const [valueUSD, setValueUSD] = useState<number>(2.62);
  const [valueEUR, setValueEUR] = useState<number>(2.8);
  const [vendorCode, setVendorCode] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [bodyStyles, setBodyStyles] = useState<[]>([]);
  const [yearOfIssue, setYearOfIssue] = useState<number>(0);

  const [XB, setXB] = useState(true);
  const [CB, setCB] = useState(false);
  const [GR, setGR] = useState(false);
  const [PL, setPL] = useState(false);
  const [RR, setRR] = useState(false);
  const [CAP, setCAP] = useState(false);
  const [OV, setOV] = useState(false);
  const [ST, setST] = useState(false);
  const [AH, setAH] = useState(false);

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
      title: "Произв.",
      dataIndex: "manufacturer",
      width: "7%",
    },
    {
      title: "Артикул",
      dataIndex: "vendor_code",
      width: "8%",
    },
    {
      title: "Цена",
      dataIndex: "price_or",
      width: "4%",
    },
    {
      title: "Цена ST",
      dataIndex: "price_st",
      width: "4%",
    },
    {
      title: "Цена AH",
      dataIndex: "price_ah",
      width: "4%",
    },
    {
      title: "Цена CAP",
      dataIndex: "price_cap",
      width: "4%",
    },
    {
      title: "Наличие Овер",
      dataIndex: "price_ov",
      width: "4%",
    },
    {
      title: "Наличие RR",
      dataIndex: "price_rr",
      width: "4%",
    },
    {
      title: "Наличие СВ",
      dataIndex: "price_cb",
      width: "4%",
    },
    {
      title: "Наличие XB",
      dataIndex: "price_xb",
      width: "4%",
    },
    {
      title: "Наличие GR",
      dataIndex: "price_gr",
      width: "4%",
    },
    {
      title: "Наличие PL",
      dataIndex: "price_pl",
      width: "4%",
    },
  ];

  const array: [] = useMemo(() => {
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
        price_or: Math.round(item.main_price * valuePlN) + " BYN",
        price_st: null,
        price_ah: null,
        price_cap: null,
        price_ov: null,
        price_rr: null,
        price_cb: null,
        price_xb: null,
        price_gr: null,
        price_pl: null,
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
        price_or: Math.round(item.price * valuePlN) + " BYN",
        price_st: null,
        price_ah: null,
        price_cap: null,
        price_ov: null,
        price_rr: null,
        price_cb: null,
        price_xb: null,
        price_gr: null,
        price_pl: null,
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
        item.price_st = Math.round(elemToChange.price * valueEUR) + " BYN";
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
          price_or:
            Math.round(
              item.price.replace("zł", "").replace(/[\s,]/g, "") * valuePlN
            ) + " BYN",
          price_st: null,
          price_ah: null,
          price_cap: null,
          price_ov: null,
          price_rr: null,
          price_cb: null,
          price_xb: null,
          price_gr: null,
          price_pl: null,
        });
      }
    });

    json7["Westfalia"].map((item: any, index: any) => {
      if (
        item.price &&
        item.manufacturer === "Westfalia" &&
        item.product.includes("Hak")
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
          price_or:
            Math.round(
              item.price.replace("zł", "").replace(/[\s,]/g, "") * valuePlN
            ) + " BYN",
          price_st: null,
          price_ah: null,
          price_cap: null,
          price_ov: null,
          price_rr: null,
          price_cb: null,
          price_xb: null,
          price_gr: null,
          price_pl: null,
        });
      }
    });

    json7["Westfalia"].map((item: any, index: any) => {
      if (
        item.price &&
        item.manufacturer === "Westfalia" &&
        item.product === "Instalacja elektryczna"
      ) {
        dataSource.push({
          key: 100000 + index,
          brand: item.brand,
          model: item.model,
          generation: item.generation,
          year_of_issue: item.year_of_issue,
          body_style: item.body_style,
          manufacturer: "Westfalia",
          vendor_code: item.vendor_code,
          price_or:
            Math.round(
              item.price.replace("zł", "").replace(/[\s,]/g, "") * valuePlN
            ) + " BYN",
          price_st: null,
          price_ah: null,
          price_cap: null,
          price_ov: null,
          price_rr: null,
          price_cb: null,
          price_xb: null,
          price_gr: null,
          price_pl: null,
        });
      }
    });

    dataSource.forEach((item: any) => {
      let elemToChange: any;
      if (
        json6["AutoHak_Russia"].some((elem) => {
          if (elem.status !== "предзаказ") {
            elemToChange = elem;
            return elem.vendor_code === item.vendor_code;
          }
        })
      ) {
        item.price_ah =
          Math.round(
            Number(String(elemToChange.price).replace(/,/g, "")) * valueRUB
          ) + " BYN";
      }
    });

    json8["Leader"].map((item: any, index: any) => {
      dataSource.push({
        key: 25000 + index,
        brand: item.brand,
        model: item.model,
        generation: item.generation,
        year_of_issue: item.year_of_issue,
        body_style: item.body_style,
        manufacturer: "Leader",
        vendor_code: item.vendor_code,
        price_or: null,
        price_st: null,
        price_ah: null,
        price_cap: null,
        price_ov: null,
        price_rr: null,
        price_cb: null,
        price_xb: null,
        price_gr: null,
        price_pl: null,
      });
    });

    json9["Bosal"].map((item: any, index: any) => {
      dataSource.push({
        key: 35000 + index,
        brand: item.brand,
        model: item.model,
        generation: item.generation,
        year_of_issue: item.year_of_issue,
        body_style: item.body_style,
        manufacturer: "Bosal",
        vendor_code: item.vendor_code,
        price_or: null,
        price_st: null,
        price_ah: null,
        price_cap: null,
        price_ov: null,
        price_rr: null,
        price_cb: null,
        price_xb: null,
        price_gr: null,
        price_pl: null,
      });
    });

    json10["Treiler"].map((item: any, index: any) => {
      dataSource.push({
        key: 45000 + index,
        brand: item.brand,
        model: item.model,
        generation: item.generation,
        year_of_issue: item.year_of_issue,
        body_style: item.body_style,
        manufacturer: "Treiler",
        vendor_code: item.vendor_code,
        price_or: null,
        price_st: null,
        price_ah: null,
        price_cap: null,
        price_ov: null,
        price_rr: null,
        price_cb: null,
        price_xb: null,
        price_gr: null,
        price_pl: null,
      });
    });

    json11["Avtos"].map((item: any, index: any) => {
      dataSource.push({
        key: 55000 + index,
        brand: item.brand,
        model: item.model,
        generation: item.generation,
        year_of_issue: item.year_of_issue,
        body_style: item.body_style,
        manufacturer: "AvtoS",
        vendor_code: item.vendor_code,
        price_or: null,
        price_st: null,
        price_ah: null,
        price_cap: null,
        price_ov: null,
        price_rr: null,
        price_cb: null,
        price_xb: null,
        price_gr: null,
        price_pl: null,
      });
    });

    dataSource.forEach((item: any) => {
      let elemToChange: any;
      let itemToChange: any;
      let itemWToChange: any;
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
      if (
        json5["Capital"].some((elem) => {
          if (elem.manufacturer === "Auto-Hak") {
            itemToChange = elem;
            return elem.vendor_code === item.vendor_code;
          }
        })
      ) {
        item.price_cap = Math.round(itemToChange.price * valueRUB) + " BYN";
      }
      if (
        json5["Capital"].some((elem) => {
          if (elem.manufacturer === "WESTFALIA") {
            itemWToChange = elem;
            return elem.vendor_code === item.vendor_code;
          }
        })
      ) {
        item.price_cap = Math.round(itemWToChange.price * valueRUB) + " BYN";
      }
      if (
        json5["Capital"].some((elem) => {
          if (elem.manufacturer === "Лидер-плюс") {
            itemWToChange = elem;
            return elem.vendor_code === item.vendor_code;
          }
        })
      ) {
        item.price_cap = Math.round(itemWToChange.price * valueRUB) + " BYN";
      }
      if (
        json5["Capital"].some((elem) => {
          if (elem.manufacturer === "Oris") {
            itemWToChange = elem;
            return elem.vendor_code === item.vendor_code;
          }
        })
      ) {
        item.price_cap = Math.round(itemWToChange.price * valueRUB) + " BYN";
      }
      if (
        json5["Capital"].some((elem) => {
          if (elem.manufacturer === "Трейлер") {
            itemWToChange = elem;
            return elem.vendor_code === item.vendor_code;
          }
        })
      ) {
        item.price_cap = Math.round(itemWToChange.price * valueRUB) + " BYN";
      }
      if (
        json5["Capital"].some((elem) => {
          if (elem.manufacturer === "AvtoS") {
            itemWToChange = elem;
            return elem.vendor_code === item.vendor_code;
          }
        })
      ) {
        item.price_cap = Math.round(itemWToChange.price * valueRUB) + " BYN";
      }
      if (
        json12["GR"].some((elem) => {
          itemWToChange = elem;
          const string = elem["Material,EAN,Qty"].substring(0, 12);
          return string === item.vendor_code;
        })
      ) {
        item.price_gr = itemWToChange["Material,EAN,Qty"].substring(27);
      }
      if (
        json13["PL"].some((elem) => {
          itemWToChange = elem;
          const string = elem["Material,EAN,Qty"].substring(0, 12);
          return string === item.vendor_code;
        })
      ) {
        item.price_pl = itemWToChange["Material,EAN,Qty"].substring(27);
      }
      if (
        json14["RR"].some((elem) => {
          if (elem.Producent === "Auto-Hak") {
            itemWToChange = elem;
            if (elem.vendor.includes("O")) {
              return (
                elem.vendor.replace(/\s/g, "").replace("O", "0") ===
                item.vendor_code.replace(/\s/g, "")
              );
            } else
              return (
                elem.vendor.replace(/\s/g, "") ===
                item.vendor_code.replace(/\s/g, "")
              );
          }
        })
      ) {
        item.price_rr = itemWToChange.Count;
      }
      if (
        json14["RR"].some((elem) => {
          if (elem.Producent === "Westfalia") {
            itemWToChange = elem;
            return elem.vendor === item.vendor_code;
          }
        })
      ) {
        item.price_rr = itemWToChange.Count;
      }
      if (
        json14["RR"].some((elem) => {
          if (elem.Producent === "Hak-pol") {
            itemWToChange = elem;
            return elem.vendor === item.vendor_code;
          }
        })
      ) {
        item.price_rr = itemWToChange.Count;
      }
      if (
        json15["Over"].some((elem) => {
          itemWToChange = elem;
          return elem.vendor === item.vendor_code;
        })
      ) {
        item.price_ov = Math.round(itemWToChange.price * valueUSD) + " BYN";
      }
      if (
        json16["CB"].some((elem) => {
          itemWToChange = elem;
          return (
            elem.vendor.replace(/\s/g, "").replace("O", "0") ===
            item.vendor_code.replace(/\s/g, "")
          );
        })
      ) {
        item.price_cb = itemWToChange.count;
      }
      if (
        json17["XB"].some((elem) => {
          itemWToChange = elem;
          return elem.vendor === item.vendor_code;
        })
      ) {
        item.price_xb = itemWToChange.count;
      }
    });

    // const newDataSource = XB
    //   ? dataSource.filter((elem) => elem.price_xb === null)
    //   : dataSource.filter((elem) => elem.price_ah === null);

    // const newDataSource = dataSource
    //   .filter((elem) => elem.price_st === null)
    //   .filter((elem) => elem.price_ah === null)
    //   .filter((elem) => elem.price_cap === null)
    //   .filter((elem) => elem.price_ov === null)
    //   .filter((elem) => elem.price_rr === null)
    //   .filter((elem) => elem.price_cb === null)
    //   .filter((elem) => elem.price_xb === null)
    //   .filter((elem) => elem.price_gr === null)
    //   .filter((elem) => elem.price_pl === null);
    // console.log(newDataSource);
    setData(dataSource);
    return dataSource;
  }, [valuePlN, valueRUB]);

  const onClickHandler = () => {
    const arrayAfterFilter: any = data.filter((elem: any) => {
      return elem.vendor_code === vendorCode;
    });
    setData(arrayAfterFilter);
  };

  const onClickWithRUB = () => {
    const arrayAfterFilter: any = data.filter(
      (elem: any) => elem.price_ru !== null
    );
    setData(arrayAfterFilter);
  };

  const onClickWithCap = () => {
    const arrayAfterFilter: any = data.filter(
      (elem: any) => elem.price_cap !== null
    );
    setData(arrayAfterFilter);
  };

  const onStainer = (number: number) => {
    switch (number) {
      case 1: {
        const arrayAfterFilter: any = data.filter(
          (elem: any) => elem.manufacturer === "Imiola"
        );
        setData(arrayAfterFilter);
        break;
      }
      case 2: {
        const arrayAfterFilter: any = data.filter(
          (elem: any) => elem.manufacturer === "Steinhov"
        );
        setData(arrayAfterFilter);
        break;
      }
      case 3: {
        const arrayAfterFilter: any = data.filter(
          (elem: any) => elem.manufacturer === "AutoHak"
        );
        setData(arrayAfterFilter);
        break;
      }
      case 4: {
        const arrayAfterFilter: any = data.filter(
          (elem: any) => elem.manufacturer === "Westfalia"
        );
        setData(arrayAfterFilter);
        break;
      }
      case 5: {
        const arrayAfterFilter: any = data.filter(
          (elem: any) =>
            elem.manufacturer === "Leader" && elem.price_cap !== null
        );
        setData(arrayAfterFilter);
        break;
      }
      case 6: {
        const arrayAfterFilter: any = data.filter(
          (elem: any) => elem.manufacturer === "Bosal"
        );
        setData(arrayAfterFilter);
        break;
      }
    }
  };

  const onAuto = () => {
    const arrayAfterFilter: any = data.filter((elem: any) => {
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

  const onChange = (value: string) => {
    value === "XB"
      ? setXB(!XB)
      : value === "CB"
      ? setCB(!CB)
      : value === "GR"
      ? setGR(!GR)
      : value === "PL"
      ? setPL(!PL)
      : value === "RR"
      ? setRR(!RR)
      : value === "CAP"
      ? setCAP(!CAP)
      : value === "OV"
      ? setOV(!OV)
      : value === "ST"
      ? setST(!ST)
      : setAH(!AH);
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
          <button onClick={() => onStainer(5)}>Leader</button>
          <button onClick={() => onStainer(6)}>Bosal</button>
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
        {/*<div>*/}
        {/*  {bodyStyles.map((bodyStyle) => (*/}
        {/*    <div>{bodyStyle}</div>*/}
        {/*  ))}*/}
        {/*</div>*/}
        <div className={styles.search}>
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
        <div className={styles.filter}>
          <div>
            <Checkbox onChange={() => onChange("XB")}>Склад</Checkbox>
            <Checkbox onChange={() => onChange("CB")}>CB</Checkbox>
            <Checkbox onChange={() => onChange("GR")}>GR</Checkbox>
            <Checkbox onChange={() => onChange("PL")}>PL</Checkbox>
            <Checkbox onChange={() => onChange("RR")}>RR</Checkbox>
          </div>
          <div>
            <Checkbox onChange={() => onChange("CAP")}>Капитал</Checkbox>
            <Checkbox onChange={() => onChange("OV")}>Овернокс</Checkbox>
            <Checkbox onChange={() => onChange("ST")}>Стейнхоф RU</Checkbox>
            <Checkbox onChange={() => onChange("AH")}>Автохак RU</Checkbox>
          </div>
        </div>
      </div>
      <Table
        bordered
        dataSource={data.length > 0 ? data : array}
        columns={columns}
        size="small"
      />
    </div>
  );
};

export default TableAdmin;
