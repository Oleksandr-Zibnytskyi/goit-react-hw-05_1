import css from './SearchForm.module.css'


export default function SearchForm ({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className={css.form}>
            <input type="text" name='movieName' placeholder='Enter the title to search' autoComplete="off" autoFocus pattern="^[а-яА-ЯёЁa-zA-Z0-9]+$+\s" required  className={css.input}/>
            <button type='submit' className={css.btnSearch}>Search</button>
        </form>
    )
}