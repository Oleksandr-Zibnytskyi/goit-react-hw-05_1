import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>404</h2> 
      <p className={css.text}>
        Sorry, page not found! Please to go <Link to="/">Home page</Link>!
      </p>
    </div>
  );
}
