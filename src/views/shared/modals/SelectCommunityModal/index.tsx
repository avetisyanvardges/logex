import React, {FC} from "react";
import {isEmpty} from "lodash";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import {Button, Modal, Radio, Spin} from 'antd';
import {IModalProps} from 'state/modals/types';
import useContainer from "./hook";

interface Props extends IModalProps {
    onSelectHandler: any,
    selectedCommunityId?: number,
    selectedRegionId?: number;
}

const SelectCommunityModal: FC<Props> = ({onClose, onSelectHandler, selectedCommunityId, selectedRegionId}) => {
    const {
        communities, isFetchingCommunities, value, onChange, setPage, communitiesMeta, page, onSelect, onSave,
    } = useContainer({selectedCommunityId, onClose, onSelectHandler, selectedRegionId});

    return (
        <Modal
            open
            title='Select community'
            className='select-modal'
            onCancel={onClose}
            width={700}
            footer={
                <div className='footer'>
                    <div className='left'>
                        <Button disabled={communitiesMeta.current_page === 1} onClick={() => setPage(page - 1)}>
                            <ArrowLeftOutlined/>
                        </Button>
                        <Button disabled={communitiesMeta.current_page === communitiesMeta.last_page}
                                onClick={() => setPage(page + 1)}>
                            <ArrowRightOutlined/>
                        </Button>
                        <span
                            className='page-counts'>{communitiesMeta.current_page} / {communitiesMeta.last_page}</span>
                    </div>
                    <div className='right'>
                        <Button onClick={onClose} className='cancel'>Cancel</Button>
                        {!!value && <Button onClick={onSave} className='save'>Save</Button>}
                    </div>
                </div>
            }
        >
            <>
                {isFetchingCommunities ?
                    <div className='loader'><Spin tip="Loading" size="large"/></div> :
                    (<Radio.Group onChange={onChange} value={value} className='cards'>
                        {!isEmpty(communities) && communities.map((item: any) => (
                            <Radio value={item.id} className='card card-275' key={item.id}
                                   onClick={() => onSelect(item)}>
                                <p className='name'>{item?.community_am}</p>
                                {/*<p className='name'>Community ru` {item?.community_ru}</p>*/}
                                {/*<p className='name'>Community en` {item?.community_en}</p>*/}
                            </Radio>
                        ))
                        }
                    </Radio.Group>)
                }
            </>
        </Modal>
    )
};

export default SelectCommunityModal;
