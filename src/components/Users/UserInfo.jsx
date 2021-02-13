import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
    const { currentUser } = props;
    return (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Job</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{currentUser.name}</td>
                    <td>{currentUser.job}</td>
                    <td>{currentUser.age}</td>
                </tr>
            </tbody>
        </table>
    );
};

UserInfo.propTypes = {
    currentUser: PropTypes.shape({
        name: PropTypes.string.isRequired,
        job: PropTypes.string,
        age: PropTypes.string,
    }).isRequired,
};
export default UserInfo;
