import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "@/styles/nprogress.css";

const LoadingBar: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        const timeout = setTimeout(() => {
            NProgress.done();
        }, 300);

        return () => {
            clearTimeout(timeout);
            NProgress.done();
        };
    }, [location.pathname]);

    return null;
};

export default LoadingBar;
