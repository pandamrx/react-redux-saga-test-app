export const LOAD_USERS = 'LOAD_USERS';
export const USERS_LOADED = 'USERS_LOADED';

export const GET_USER = 'GET_USER';
export const USER_RECEIVED = 'USER_RECEIVED';

export const loadUsers = () => ({
    type: LOAD_USERS
});

export const getUser = (id) => ({
    type: GET_USER,
    id
});

