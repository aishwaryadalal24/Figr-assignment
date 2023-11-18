import fifthBlockImage from "../fifthBlockImage.png";
import { useEffect, useState } from "react";

const FifthBlock = () => {
    const middleX = 984;
    const middleY = 383;
    const [coordinates, setCoordinates] = useState({ x: middleX, y: middleY });

    const handleMouseMove = (event) => {
      setCoordinates({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = (event) => {
        setCoordinates({ x: middleX, y: middleY });
    }

    useEffect(() => {
        const xTilt = (coordinates.x - middleX)/25;
        const yTilt = (coordinates.y - middleY)/10;
        console.log("useEffect called");
        document.querySelector(".mobile-image").style.transform = `rotateX(${yTilt}deg) rotateY(${xTilt}deg) rotateZ(0deg)`;
    }, [coordinates]);

    return (
        <div className="fifth-block">
            <div className="fifth-block-info">
                <h1>Present <br/> anywhere. <br/> Anytime.</h1>
                <p>Transform your stories into a bite-sized <br/> format tailored for mobile. Quickly browse <br/> the summary and dive deeper when<br/> needed.</p>
                <p>Mouse coordinates: ({coordinates.x}, {coordinates.y})</p>
            </div>
            <div className="fifth-block-box">
                <img className="mobile-image" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} src={fifthBlockImage}/>
            </div>
        </div>
    );
}

export default FifthBlock;