import carouselImage1 from "../carousel-cards-images/carouselImage1.png";
import carouselImage2 from "../carousel-cards-images/carouselImage2.png";
import carouselImage3 from "../carousel-cards-images/carouselImage3.png";
import { useRef, useEffect, useState } from "react";

const images = [carouselImage1, carouselImage2, carouselImage3];

const CarouselCard = ({imgSrc, index, displayOfImg}) => {
    return <div id={"carousel-card-"+index} style={{opacity: displayOfImg}} >
        <img className="carousel-card" src={imgSrc}/>
    </div>;
}

const ImagesContainer = () => {
    const [imgDisplay, setImgDisplay] = useState([1, 0, 0]);
    const element = useRef();

    useEffect(() => {
        element.current.addEventListener('scroll', (event) => {
        event.preventDefault();
        const scrollLine = document.querySelector('.carousel-scrollbar');
        if (element.current.scrollTop >= 1140) {
            setImgDisplay([0, 0, 1]);
            document.querySelector('.carousel-scrollbar :nth-child(3)').classList.add("fill-line");
        }
        else if(element.current.scrollTop >= 572 && element.current.scrollTop < 1140) {
            setImgDisplay([0, 1, 0]);
            document.querySelector('.carousel-scrollbar :nth-child(3)').classList.remove("fill-line");
            document.querySelector('.carousel-scrollbar :nth-child(2)').classList.add("fill-line");
            
        } else if (element.current.scrollTop < 572) {
            setImgDisplay([1, 0, 0]);
            document.querySelector('.carousel-scrollbar :nth-child(2)').classList.remove("fill-line");
            document.querySelector('.carousel-scrollbar :nth-child(3)').classList.remove("fill-line");
        }
        });
    }, []);

    return <div className="images-container" ref={element}>
        {images.map((image, index) => <CarouselCard index={index} imgSrc={image} displayOfImg={imgDisplay[index]}/>)}
    </div>;
}

const FourthBlock = () => {
    return (
        <div className="fourth-block">
            <div className="fourth-block-info">
                <h1>Create at <br/>the speed of <br/>thought.</h1>
                <p>Focus on your getting your thoughts out and crafting the best <br/>message while Chronicle does the heavy lifting for you</p>
            </div>
            <div className="carousel">
                <ImagesContainer />
                <div className="carousel-scrollbar">
                    <div class="vertical-line fill-line"></div>
                    <div class="vertical-line"></div>
                    <div class="vertical-line"></div>
                </div>
            </div>
        </div>
    );
}

export default FourthBlock;