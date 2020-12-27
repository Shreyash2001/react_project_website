import React from 'react'
import CardItem from './CardItem'
import "./Cards.css";
function Cards() {
    return (
        <div className="cards">
            <h1>A great Destination awaits for you</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        text="Explore the beauty of nature"
                        label="Glorious"
                        path="/services" />
                        <CardItem 
                        src="https://m.economictimes.com/thumb/msid-68721417,width-1200,height-900,resizemode-4,imgsize-1016106/nature1_gettyimages.jpg"
                        text="Explore the beauty of nature"
                        label="Picnic"
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/15/17/980x490/landscape-1429890420-new-york.jpg?resize=480:*"
                        text="Explore the beauty of nature"
                        label="Nature"
                        path="/services" />
                        <CardItem 
                        src="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/325466_1100-800x825.jpg"
                        text="Explore the beauty of nature"
                        label="Solo Trip"
                        path="/services" />
                        <CardItem 
                        src="https://www.thinkright.me/wp-content/uploads/2019/09/Untitled-design-27.jpg"
                        text="Explore the beauty of nature"
                        label="Beauty"
                        path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
