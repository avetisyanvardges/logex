import useTypedSelector from './useTypedSelector';

const useParametricSelector = (endpoint: string) => ({
    isLoading: useTypedSelector(({dataReducer}) => dataReducer?.[endpoint]?.loading || false),
    response: useTypedSelector(({dataReducer}) => dataReducer?.[endpoint]?.response || null),
    error: useTypedSelector(({dataReducer}) => dataReducer?.[endpoint]?.error || null),
});

export default useParametricSelector;