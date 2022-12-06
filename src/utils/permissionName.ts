const permissionName = (name: string) => {
    let splitArr = name.split('-');
    return `${splitArr[0][0].toUpperCase()}${splitArr[0].substring(1)} ${splitArr[1]}`
};

export default permissionName;