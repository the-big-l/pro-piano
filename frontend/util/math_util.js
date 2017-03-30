export const numBetween = (num, first, last) => {
    return (first < last ? num >= first && num <= last : num >= last && num <= first);
};

export const doNothing = () => {};
