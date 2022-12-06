import {useEffect} from "react";

const useUnMount = (callback?: () => void) => {
    useEffect(() => {
        return () => {
            callback && callback();
        }
    }, []);
};

export default useUnMount;