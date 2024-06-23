import style from '../../sass/header.module.scss'

const SearchButton = () => {
    return (
        <button className={style.searchButton}>
            Поиск...
            <kbd>CtrlK</kbd>
        </button>
    )
}

export { SearchButton }