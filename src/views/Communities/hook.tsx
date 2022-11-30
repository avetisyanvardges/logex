import {useDispatch} from 'react-redux';

function useContainer() {
    const dispatch = useDispatch();
    const handleCreate = () => {
        console.log('handleCreate');
    };
    const handleEdite = () => {
        console.log('handleEdite')
    }

    return {
        handleCreate,
    }
}

export default useContainer;