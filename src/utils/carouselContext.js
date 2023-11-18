import { createContext } from "react";

const carouselContext = createContext({
    image1: "block",
    image2: "none",
    image3: "none"
});

export default carouselContext;