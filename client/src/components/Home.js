import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Home.css"
import CardsProduct from './CardsProduct';
import Footer from './Footer';
// import AvisHome from './AvisHome';

function Home() {
  return (
    <div className='home'>

      <div >
        <Carousel showThumbs={false} infiniteLoop autoPlay={true} interval={1000}>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0603/2801/8158/files/qusommesnous-banner-2.jpg?v=1639128992" />

          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0603/2801/8158/files/qusommesnous-banner-1.jpg?v=1639128033" />

          </div>
          <div>
            <img src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_630,q_auto,w_1200/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/843/dossier_buffets_Fotolia_84856132_S.jpg" />

          </div>
          <div>
            <img src="https://www.jetsetmagazine.net//__admin/__admin_medias/modules/listes/article_2077/meilleurs_patisseries_ouvertes_qui_livrent_delices_aid_el_fitr_accueil.jpg" />

          </div>

          <div>
            <img src="https://cdn.shopify.com/s/files/1/0603/2801/8158/articles/header-article-baklawa_1024x1024.jpg?v=1642371763" />

          </div>


        </Carousel>
      </div>


      <CardsProduct />






    </div >








  )
}

export default Home