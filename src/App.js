import CombineComponent from './components/CombineComponent';
import SecondBlock from './components/SecondBlock';
import ThirdBlock from './components/ThirdBlock';
import FourthBlock from './components/FourthBlock';
import FifthBlock from './components/FifthBlock';
import './scss/App.scss';

function App() {
  window.onscroll = function(e) {
    const scrollTop = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    const rotationAngle = scrollTop / 6;

    document.querySelector(".first-block").style.transform = `rotateX(${rotationAngle}deg)`;

    const translateScale = (scrollTop-1000) / 100;

    document.querySelector(".second-block :nth-child(1)").style.transform = `translateY(-${translateScale}rem)`;
    document.querySelector(".second-block :nth-child(2)").style.transform = `translateY(${translateScale}rem)`;
    document.querySelector(".second-block :nth-child(3)").style.transform = `translateY(${translateScale}rem)`;
    document.querySelector(".second-block :nth-child(4)").style.transform = `translateY(-${translateScale}rem)`;
    document.querySelector(".second-block :nth-child(5)").style.transform = `translateY(-${translateScale}rem)`;
    document.querySelector(".second-block :nth-child(6)").style.transform = `translateY(${translateScale}rem)`;
  }

  return (
    <div className="App">
      <CombineComponent/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FifthBlock />
    </div>
  );
}

export default App;
