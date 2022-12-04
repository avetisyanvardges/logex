import {useParams} from 'react-router-dom';

function useContainer() {
    const { id } = useParams();

    return {
        id,
    }
}

export default useContainer;