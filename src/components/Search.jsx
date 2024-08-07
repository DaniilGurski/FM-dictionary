import searchIcon from "../assets/images/icon-search.svg";

export default function Search() {
    return (
        <form>
            <div className="search-bar">
                <input type="search" />
                <button className="search-bar__find" aria-label="search for a word">
                    <img src={searchIcon} alt="" />
                </button>
            </div>
        </form>
    )
}
