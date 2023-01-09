import {Link} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Button} from "antd";
import './style.scss';

const NextButton = () => (
    <Link to={-1 as any}>
        <Button className='next-button'>
            <ArrowLeftOutlined className='icon'/>
        </Button>
    </Link>
)

export default NextButton;
