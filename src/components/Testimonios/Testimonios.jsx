import './Testimonios.css';


export default function Testimonios({name,description,avatar,alt,children}){

    

    return (
        <>
           <article className='testimonial__container'>
              <p>{description}</p>
              <div className='profile__container'>
                 <img src={avatar} alt={alt} />

                 <div>
                    <h4>{name}</h4>
                    {children}
                 </div>
                 
              </div>
           </article>
        </>
    )
}