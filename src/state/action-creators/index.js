// Here are my two action-creators that tell the store what specific action is taking place with what payload.

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