import React from "react";
import { ITowbar } from "interfaces/towbar";

import styles from "./Title.module.scss";

interface TowbarTitleProps {
  towbar: ITowbar;
}

const Title = ({ towbar }: TowbarTitleProps) => {
  return (
    <div className={styles.title}>
      <h1>
        Фаркоп на {towbar.auto?.brand?.name} {towbar.auto?.model?.name}{" "}
        {towbar.auto?.generation?.name} {towbar.auto?.generation?.year_of_issue}{" "}
        {towbar.auto?.bodyStyle?.name}
      </h1>
    </div>
  );
};

export default Title;
