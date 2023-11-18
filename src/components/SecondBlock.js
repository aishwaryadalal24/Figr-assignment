import c11 from "../cards-images/c11.png";
import c12 from "../cards-images/c12.png";
import c21 from "../cards-images/c21.png";
import c41 from "../cards-images/c41.png";
import c42 from "../cards-images/c42.png";
import c51 from "../cards-images/c51.png";
import c61 from "../cards-images/c61.png";

const SecondBlock = () => {
    return (
        <>
            <p className="headline2">A new, easy <br/> way to create.</p>
            <div className="second-block">
                <div className="card-column">
                    <div><img className="card" src={c11}/></div>
                    <div><img className="card" src={c12}/></div>
                </div>
                <div className="card-column" style={{marginTop:80}}>
                    <div><img className="card" src={c21}/></div>
                </div>
                <div className="card-column" style={{marginTop:144}}><div><img className="card" src={c11}/></div></div>
                <div className="card-column" style={{marginTop:96}}>
                    <div><img  className="card" src={c41}/></div>
                    <div><img className="card" src={c42}/></div>
                </div>
                <div className="card-column" style={{marginTop:-192}}>
                    <div><img className="card" src={c51}/></div>
                    <div><img className="card" src={c12}/></div>
                </div>
                <div className="card-column" style={{marginTop:-120}}>
                    <div><img className="card" src={c61}/></div>
                </div>
            </div>
        </>
    );
}

export default SecondBlock;