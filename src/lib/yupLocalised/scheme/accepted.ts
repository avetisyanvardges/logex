import yup from 'lib/yupLocalised';

const validationSchema = yup.object().shape({
    sender_give_money: yup.number().required(),
    sender_take_money: yup.number().required(),
});

export default validationSchema;
