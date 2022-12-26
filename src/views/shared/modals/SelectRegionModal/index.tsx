import React, {FC} from "react";
import {isEmpty} from "lodash";
import {Button, Modal, Radio, Spin} from 'antd';
import {IModalProps} from 'state/modals/types';
import useContainer from "./hook";
import "./style.scss";

interface Props extends IModalProps {
    onSelectHandler: void,
}

const SelectRegion: FC<Props> = ({onClose, onSelectHandler}) => {
    const {regions, isFetchingRegions, value, onChange} = useContainer();
    return (
        <Modal
            title='Select region'
            onCancel={onClose}
            className='select-region-modal'
            open
            footer={
                <div className='footer'>
                    <Button onClick={onClose} className='cancel'>Cancel</Button>
                    {/*<Button*/}
                    {/*    loading={loading} disabled={!(formik.isValid && formik.dirty)}*/}
                    {/*    onClick={!isEmpty(formik.touched) ? onSubmit : onClose}*/}
                    {/*    className='save'*/}
                    {/*>*/}
                    {/*    Save*/}
                    {/*</Button>*/}
                </div>
            }
        >
            <>
                {isFetchingRegions ?
                    <div className='loader'><Spin tip="Loading" size="large"/></div> :
                    (<Radio.Group onChange={onChange} value={value} className='cards'>
                        {!isEmpty(regions) &&
                            regions.map(item => (
                                <Radio value={item.id} className='card' key={item.id} onClick={() => console.log(item)}>
                                    <p className='name'>Region am` {item.region_am}</p>
                                    <p className='name'>Region ru` {item.region_ru}</p>
                                    <p className='name'>Region en` {item.region_en}</p>
                                </Radio>
                            ))
                        }
                    </Radio.Group>)
                }
            </>
        </Modal>
    )
}

export default SelectRegion;