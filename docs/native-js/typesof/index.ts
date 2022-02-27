export const typesof = (obj: any) => {
    if(obj === null) {
        return 'null';
    }

    if(Number.isNaN(obj)) {
        return 'nan';
    }

    if(Array.isArray(obj)) {
        return 'array';
    }

    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
