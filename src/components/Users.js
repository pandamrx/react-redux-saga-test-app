import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {loadUsers} from "../actions";

const Users = ({ users }) => {
    const isLoading = typeof users === 'undefined';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    const content = isLoading ? <p>Loading...</p> : users.map((user) => {
        return (
            <div  key={`user-link-container-${user.id}`}>
                <Link to={`/users/${user.id}`} key={`user-link-${user.id}`}>
                    <span>{user.id}</span>
                    <span>&nbsp;</span>
                    <span>{user.name}</span>
                    <span>&nbsp;</span>
                    <span>{user.username}</span>
                </Link>
            </div>
        );
    });

    return (<div>
        {content}
    </div>);

};

const mapStateToProps = (state) => ({
    users: state.users,
});

export default connect(mapStateToProps, null)(Users);

