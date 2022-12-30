import React, {FC} from "react";
import {isEmpty} from "lodash";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import {Button, Modal, Radio, Spin} from 'antd';
import {IModalProps} from 'state/modals/types';
import useContainer from "./hook";
import "./style.scss";

interface Props extends IModalProps {
    onSelectHandler: any,
    selectedRegionId?: number,
}

const SelectRegion: FC<Props> = ({onClose, onSelectHandler, selectedRegionId}) => {
    const {
        regions, isFetchingRegions, value, onChange, setPage, regionsMeta, page, onSelect, onSave,
    } = useContainer({selectedRegionId, onClose, onSelectHandler});

    return (
        <Modal
            open
            title='Select region'
            className='select-region-modal'
            onCancel={onClose}
            footer={
                <div className='footer'>
                    <div className='left'>
                        <Button disabled={regionsMeta.current_page === 1} onClick={() => setPage(page - 1)}>
                            <ArrowLeftOutlined />
                        </Button>
                        <Button disabled={regionsMeta.current_page === regionsMeta.last_page} onClick={() => setPage(page + 1)}>
                            <ArrowRightOutlined />
                        </Button>
                        <span className='page-counts'>{regionsMeta.current_page} / {regionsMeta.last_page}</span>
                    </div>
                    <div className='right'>
                        <Button onClick={onClose} className='cancel'>Cancel</Button>
                    </div>
                    {!!value && <Button onClick={onSave} className='save'>Save</Button>}
                </div>
            }
        >
            <>
                {isFetchingRegions ?
                    <div className='loader'><Spin tip="Loading" size="large"/></div> :
                    (<Radio.Group onChange={onChange} value={value} className='cards'>
                        {!isEmpty(regions) && regions.map(item => (
                                <Radio value={item.id} className='card' key={item.id} onClick={() => onSelect(item)}>
                                    <p className='name'>{item.region_am}</p>
                                    {/*<p className='name'>Region ru` {item.region_ru}</p>*/}
                                    {/*<p className='name'>Region en` {item.region_en}</p>*/}
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
