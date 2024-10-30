import './Section.css'

export default function Section ({children,title}){
    return (
       <>
          <section className='section__container'>
              <h2>{title}</h2>
              <div className='section__underline'></div>
              <article className='section__container--child'>
                {children}
              </article>
              
          </section>
       </>
    )
}