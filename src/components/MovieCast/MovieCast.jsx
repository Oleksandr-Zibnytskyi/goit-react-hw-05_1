import { fetchMovieCast } from "../../apiServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import css from "./MovieCast.module.css";

const notify = () =>
  toast.error("Something went wrong. Please, try again!", {
    style: {
      border: "1px solid #000000",
      padding: "16px",
      color: "#000000",
    },
    iconTheme: {
      primary: "#000000",
      secondary: "#f5f5f5",
    },
  });

export default function MovieCast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const data = await fetchMovieCast(movieId);
        console.log(data);
        setMovieCast(data.cast);
      } catch (error) {
        notify();
        console.log(error);
      }
    }
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <div>
      <ul className={css.list}>
        {movieCast.length > 0
          ? movieCast.map(({ id, name, profile_path, character }) => (
              <li key={id} className={css.castItem}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : `http://www.suryalaya.org/images/no_image.jpg`
                  }
                  alt="actor"
                  loading="lazy"
                  width="120"
                  className={css.imgCast}
                />
                <h3 className={css.name}>{name}</h3>
                <p className={css.character}> Character: {character}</p>
              </li>
            ))
          : "Sorry, there isn't any info."}
      </ul>
    </div>
  );
}
