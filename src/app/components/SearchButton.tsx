import style from '../ui/header.module.css';

const SearchButton = () => {
    return (
        <button className={style.searchButton}>
            Поиск...
            <kbd>CtrlK</kbd>
        </button>
    )
}

export { SearchButton }