import * as yup from 'yup';
import stringLength from './validations/stringLength';

yup.addMethod(yup.string, 'stringLength', stringLength);

export default yup;
