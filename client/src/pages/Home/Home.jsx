import React from 'react'
import "./Home.scss"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";




const Home = () => {
    return (
        <div className='home'>
            <div className="contain" >
                <FeaturedProducts id="con1" type="latest"/>
                <FeaturedProducts id="con2" type="top-rated"/>
                <FeaturedProducts id="con3" type="review"/>
            </div>

            <Categories/>
            <FeaturedProducts type="featured"/>
        </div>
    )
}

export default Home
