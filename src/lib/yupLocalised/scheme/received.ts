import yup from 'lib/yupLocalised';

const validationSchema = yup.object().shape({
    recipient_give_money: yup.number().required(),
    recipient_take_money: yup.number().required(),
});

export default validationSchema;
