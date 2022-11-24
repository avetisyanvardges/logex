import * as yup from 'yup';
import stringLength from './validations/stringLength';

yup.addMethod(yup.string, 'stringLength', stringLength);

yup.setLocale({
    mixed: {
        required: `Պարտադիր լրացման դաշտ`,
    },
});

export default yup;
