import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./CallBackOrder.module.scss";

interface CallBackOrderProps {
  setIsPopupOpen: Function;
}

const CallBackOrder = ({ setIsPopupOpen }: CallBackOrderProps) => {
  const { pathname } = useRouter();

  return (
    <>
      {pathname !== "/catalog/towbars/[id]" && (
        <div
          className={styles.callBackOrderBlock}
          onClick={() => setIsPopupOpen(true)}
        >
          <div className={styles.callBackImage}>
            <Image
              src="/static/images/header/tel-icon.png"
              alt="tel-icon"
              width={35}
              height={35}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CallBackOrder;
