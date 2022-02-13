import React, { useState } from "react";
import XLSX from "xlsx";
import { MenuAdmin, TableAdmin } from "components";

import styles from "./CatalogAdmin.module.scss";

const CatalogAdmin = () => {
  // const [items, setItems] = useState();
  //
  // const readExel = (file: any) => {
  //   const promise = new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsArrayBuffer(file);
  //
  //     fileReader.onload = (e: any) => {
  //       const bufferArray = e.target.result;
  //
  //       const wb = XLSX.read(bufferArray, { type: "buffer" });
  //
  //       const first_worksheet = wb.Sheets[wb.SheetNames[1]];
  //       console.log(first_worksheet);
  //
  //       const data = XLSX.utils.sheet_add_json(first_worksheet, [], {});
  //
  //       resolve(data);
  //     };
  //
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  //
  //   promise.then((d: any) => {
  //     setItems(d);
  //   });
  // };
  //
  // console.log(items);

  return (
    <div className={styles.wrapper}>
      <div>
        <MenuAdmin />
      </div>
      <div className={styles.rightBlock}>
        {/*<div className={styles.inputs}>*/}
        {/*  <input*/}
        {/*    type="file"*/}
        {/*    onChange={(e: any) => {*/}
        {/*      const file = e.target.files[0];*/}
        {/*      readExel(file);*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</div>*/}
        {/*{items}*/}
        <div>
          <TableAdmin />
        </div>
      </div>
    </div>
  );
};

export default CatalogAdmin;
