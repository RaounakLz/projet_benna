import React from 'react'
import { Link } from 'react-router-dom'
import "./Cardsproduct.css"
function CardsProduct() {
    return (
        <div className='bodyP'>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swahttps://media-cdn.tripadvisor.com/media/photo-s/17/33/23/81/assortiment-de-patisseries.jpg" rel="stylesheet" />
            <div className="containerP">
                <div className="card">
                    <figure className="card__thumb" style={{ margin: "0px" }}>
                        <img src="https://masmoudi.tn/wp-content/uploads/2021/04/Plateau-royal-photo-site.png" className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">TRADITIONAL SWEET</h2>
                            <p className="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
                            <Link style={{ color: "white" }} to="/sweet" ><a href className="card__button">See more</a></Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="card">
                    <figure className="card__thumb" style={{ margin: "0px" }}>
                        <img src="https://pbs.twimg.com/media/Dyz0dhHX0AEYSZQ.jpg" alt="Picture by Nathan Dumlao" className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">SWEET OF TEA OR COFFEE</h2>
                            <p className="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
                            <Link style={{ color: "white" }} to="/tea" ><a href className="card__button">See more</a></Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="card">
                    <figure className="card__thumb" style={{ margin: "0px" }}>
                        <img src="https://i.pinimg.com/564x/44/07/30/440730b046ffddc3a9fd74d0af4f72fd.jpg" alt="Picture by Daniel Lincoln" className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">HOME CHOCOLATE FACTORY</h2>
                            <p className="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
                            <Link style={{ color: "white" }} to="/chocolate" ><a href className="card__button">See more</a></Link>
                        </figcaption>
                    </figure>
                </div>

                <div className="card">
                    <figure className="card__thumb" style={{ margin: "0px" }}>
                        <img src="https://www.patisserie-sakka.com/wp-content/uploads/2019/04/MG_1828-e1555022927214.jpg" alt="Picture by Daniel Lincoln" className="card__image" />
                        <figcaption className="card__caption">
                            <h2 className="card__title">SALTY BITES</h2>
                            <p className="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
                            <Link style={{ color: "white" }} to="/salty" ><a href className="card__button">See more</a></Link>
                        </figcaption>
                    </figure>
                </div>

            </div>

        </div>
    )
}

export default CardsProduct