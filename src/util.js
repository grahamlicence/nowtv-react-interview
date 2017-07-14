// gets an object by id from array
export const getById = (arr, id) => {
    const filteredArray = arr.filter((obj) => {
        return obj.id === id;
    });

    return filteredArray.length ? filteredArray[0] : null;
};
