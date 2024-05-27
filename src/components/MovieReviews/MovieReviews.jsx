import { fetchMovieReviews } from "../../apiServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import css from "./MovieReviews.module.css";

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
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await fetchMovieReviews(movieId);
        console.log(data);
        setMovieReviews(data.results);
      } catch (error) {
        notify();
        console.log(error);
      }
    }
    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <main className={css.container}>
    <ul>
        { movieReviews.length > 0 
            ? movieReviews.map(({author, content, id}) => (
                    <li key={id} className={css.item}>
                        <p className={css.name}><FaUserCircle className={css.icon}/>{author}</p>
                        <p className={css.content}>{content}</p>
                    </li>
                ))
            : <p>We do not have any reviews for this movie yet</p>
        }
    </ul>
</main>
  );
}