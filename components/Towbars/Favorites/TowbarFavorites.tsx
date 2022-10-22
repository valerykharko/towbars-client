import React, { useEffect, useState } from "react";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { ITowbar } from "interfaces/towbar";

import styles from "./TowbarFavorites.module.scss";

interface TowbarFavoritesProps {
  towbar: ITowbar;
}

const TowbarFavorites = ({ towbar }: TowbarFavoritesProps) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>();

  const { favorites } = useTypedSelector((state) => state.favorite);
  const { user } = useTypedSelector((state) => state.user);

  const { addToFavorites, removeFromFavorites } = useActions();

  const onFavoriteClick = (towbarId: number) => {
    if (
      favorites?.some(
        (elem) => elem.towbarId === towbarId && elem.userId === user?.id
      )
    ) {
      removeFromFavorites(towbarId);
      setIsInFavorites(false);
    } else {
      addToFavorites(towbarId);
      setIsInFavorites(true);
    }
  };

  useEffect(() => {
    setIsInFavorites(
      favorites?.some(
        (elem) => elem.towbarId === towbar?.id && elem.userId === user?.id
      )
    );
  }, [user, favorites]);

  return (
    <div>
      {isInFavorites ? (
        <button
          className={`${styles.favorite} ${styles.favorite__yep}`}
          onClick={() => onFavoriteClick(towbar?.id)}
        >
          <img
            src="/static/images/favorites/favorite_yep.png"
            alt="favorite-yep"
          />
          <span>В избранном</span>
        </button>
      ) : (
        <button
          className={`${styles.favorite} ${styles.favorite__nope}`}
          onClick={() => onFavoriteClick(towbar?.id)}
        >
          <img
            src="/static/images/favorites/favorite_nope.png"
            alt="favorite-yep"
          />
          <span>В избранное</span>
        </button>
      )}
    </div>
  );
};

export default TowbarFavorites;
