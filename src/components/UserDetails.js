import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';

import { getUser } from '../actions';

const UserDetails = ({ user, match }) => {
    const isLoading = typeof user === 'undefined';
    const dispatch = useDispatch();
    const { params } = match;

    useEffect(() => {
        dispatch(getUser(params.id));
    }, [dispatch, params]);

    const content = isLoading ? <p>Loading...</p> :
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
        </div>;

    return (
        <div>{content}</div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(UserDetails);

