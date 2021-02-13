import { NavLink } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const ListUser = (props) => {
    const { users, setActiveUser, linkId } = props;
    return (
        <div className="list-group">
            {users.map((user, index) => {
                let linkClass = 'list-group-item list-group-item-action custom-link';
                if (index === linkId) {
                    linkClass = 'list-group-item list-group-item-action custom-link active';
                }
                return (
                    <NavLink
                        key={user.id}
                        data-id_link={index}
                        data-id_user={user.id}
                        className={linkClass}
                        onClick={setActiveUser}
                    >
                        {user.name}
                    </NavLink>
                );
            })}
        </div>
    );
};
ListUser.propTypes = {
    users: PropTypes.instanceOf(Array).isRequired,
    linkId: PropTypes.number.isRequired,
    setActiveUser: PropTypes.func.isRequired,
};
export default ListUser;
