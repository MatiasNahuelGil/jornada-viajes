import './Search.css';

export default function Search({titleIcon, title}){
    return (
        <>
          <article className="search__container">
                    <div className="search__container--icon">
                        <span className="material-symbols-outlined">
                           {titleIcon}
                        </span>
                    </div>
                    <b className="search__container--name">{title}</b>
          </article>
        </>
    )
}