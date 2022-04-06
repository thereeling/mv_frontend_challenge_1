export const depositBank = (amount) => {
    return {
            type: 'deposit',
            payload: amount
    }
};

export const withdrawBank = (amount) => {
    return{       
            type: 'withdraw',
            payload: amount
    }
};