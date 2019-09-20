export const login = (params) => ({
    type: 'AUTH_PENDING',
    params: params
});

export const setting = (params) => ({
    type: 'SETTING_PENDING',
    params: params
});