import { useEffect, useState } from "react";

const SpanComponent = ({word, index}) => {
    let options = {
        root: document.querySelector(".third-block"),
        rootMargin: '-50% 0% -50% 0%',
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            return entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    console.log("if");
                    setSpanClass("changing-words show");
                    entry.target.classList.add('show');
                } else {
                    console.log("else");
                    setSpanClass("changing-words");
                    entry.target.classList.remove('show');
                }
            }), options
        });
        const hiddenElement = document.querySelector("#span-word-"+index);
        observer.observe(hiddenElement);
    });

    const [spanClass, setSpanClass] = useState("changing-words");
    return <span className={spanClass} id={"span-word-"+index}>{word} </span>;
}

const ThirdBlock = () => {

    const str ="In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold. In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.";

    const strArr = str.split(' ');
    console.log(strArr);

    return (
        <div className="third-block">{strArr.map((word, index) => <SpanComponent key={"span-word-"+index} word={word} index={index}/>)}</div>
    );
}

export default ThirdBlock;