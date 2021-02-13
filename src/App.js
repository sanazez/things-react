import React, { useEffect, useState } from 'react';
import './App.css';
import UserInfo from './components/Users/UserInfo';
import ListUser from './components/Users/ListUser';
import ModalAdd from './components/ModalAdd';

const App = () => {
    const [users, setUsers] = useState([]);
    const [linkId, setLinkId] = useState(0);
    const [currentUser, setCurrentUser] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const url = 'https://fierce-harbor-04163.herokuapp.com/api/v1/things';
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setUsers(() => res);
                setCurrentUser(() => res[linkId]);
            });
    }, []);

    const setActiveUser = (e) => {
        setLinkId(() => Number(e.target.dataset.id_link));
        setCurrentUser(() => users.find((user) => user.id === e.target.dataset.id_user));
    };
    const showModalAdd = () => {
        setVisible(() => true);
    };
    const hideModalAdd = () => {
        setVisible(() => false);
    };
    const addUser = (name, age, job) => {
        const url = 'https://fierce-harbor-04163.herokuapp.com/api/v1/things';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                job,
                age,
            }),
        };
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setUsers(() => res);
                setCurrentUser(() => res[linkId]);
                hideModalAdd();
            });
    };
    return (
        <div className="wrapper">
            <div>
                <h2>
                    <span className="badge bg-secondary">USERS</span>
                </h2>
            </div>
            <div className="list-buttons">
                <button onClick={showModalAdd} type="button" className="btn btn-success">
                    Add
                </button>
                <button type="button" className="btn btn-warning">
                    Edit
                </button>
                <button type="button" className="btn btn-danger">
                    Remove
                </button>
            </div>
            {users.length === 0 && <div className="spinner-border" role="status" />}
            {users.length > 0 && (
                <ListUser setActiveUser={setActiveUser} users={users} linkId={linkId} />
            )}
            {currentUser && <UserInfo currentUser={currentUser} />}
            <ModalAdd visible={visible} hide={hideModalAdd} addUser={addUser} />
        </div>
    );
};
export default App;
