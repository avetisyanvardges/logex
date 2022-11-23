import React from 'react';
import "./style.scss";
import {Button} from 'antd';
import {useDispatch} from 'react-redux';
import {showModal} from 'state/modals/actions';

const Home = () => {
    const dispatch = useDispatch();

    const showExampleModal = () => {
        dispatch(showModal({
            modalType: 'EXAMPLE_MODAL',
            modalProps: {
                title: 'Example modal'
            }
        }))
    }

    return (
        <div className='home'>
            <h1 className='title'>Home</h1>
            <Button onClick={showExampleModal}>Show Example modal</Button>
        </div>
    )
}

export default Home;