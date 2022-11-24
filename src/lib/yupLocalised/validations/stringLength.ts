export default function stringLength(this: any, value: number) {
    // eslint-disable-next-line func-names
    return this.test('stringLength', function (this: any, string: string) {
        if (!string) {
            return true;
        }

        return string.length !== value
            ? this.createError({
                message: {
                    id: 'validations.stringLength',
                    values: {
                        value,
                    },
                },
            })
            : true;
    });
}
