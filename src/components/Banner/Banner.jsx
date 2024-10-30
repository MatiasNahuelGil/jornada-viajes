import './Banner.css'

export default function Banner({bannerImage, bannerTitle, bannerDescription}){
    return (
       <section className="banner__container">
         <article className="banner__container--info">
            <h1 className="banner__title">{bannerTitle}</h1>
            <div className="underline"></div>
            <p className="banner__description">{bannerDescription}</p>
         </article>
           <img className="banner__image" src={bannerImage} alt={bannerTitle} />
       </section>
    )
}