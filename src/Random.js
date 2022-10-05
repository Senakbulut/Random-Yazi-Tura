export const getRandom = (arry) => {
    const Item = arry[Math.floor(Math.random() * arry.length)];
    return Item;
};
