import { ActionIcon } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~app/store/store";
import usePocketBase from "~shared/lib/hooks/pb-hook";

export function LikeFilm({ id }: { id: number }) {
  const { pb, user } = usePocketBase();
  const [isLiked, setIsLiked] = useState(false);
  const favoriteFilms = useSelector((state: RootState) => state.filmsData.favoriteFilms);

  useEffect(() => {
    const foundItem = favoriteFilms.find(
      (item) => item.film_id === id && item.user_id === user?.id,
    );
    setIsLiked(!!foundItem);
  }, [favoriteFilms, id, user?.id]);

  const data = {
    film_id: id,
    user_id: user?.id,
  };

  async function likeToggle() {
    if (isLiked) {
      const favoriteFilm = await pb
        .collection("favoriteMovies")
        .getFirstListItem(`film_id="${id}" && user_id="${user?.id}"`);
      await pb.collection("favoriteMovies").delete(favoriteFilm.id);
    } else {
      await pb.collection("favoriteMovies").create(data);
    }

    setIsLiked(!isLiked);
  }

  return (
    <ActionIcon key={id} onClick={likeToggle} color="red.6" mt="10px" size="2rem">
      {isLiked ? <IconHeartFilled size="1.2rem" /> : <IconHeart size="1.2rem" />}
    </ActionIcon>
  );
}
