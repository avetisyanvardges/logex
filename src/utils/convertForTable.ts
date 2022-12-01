import {IMeta} from "state/types";

const convertForTable = <D extends any[], M extends IMeta>(data: { data: D, meta: M }) => {
    const response = data.data.map((item) => {
        item.key = item.id;
        return item;
    });

    const metaData = {
        current_page: data.meta.current_page,
        last_page: data.meta.last_page,
        total: data.meta.total
    }

    return { response, metaData }
};

export default convertForTable;