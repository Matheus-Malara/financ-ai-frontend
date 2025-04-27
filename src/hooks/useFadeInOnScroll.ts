import {useInView} from "react-intersection-observer";

export const useFadeInOnScroll = (threshold = 0.1) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold,
    });

    const fadeInClass = inView ? "animate-fadeIn" : "opacity-0 translate-y-8";

    return {ref, fadeInClass};
};
