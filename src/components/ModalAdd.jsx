import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalAdd = (props) => {
    const { visible, hide, addUser } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [age, setAge] = useState('');

    if (!visible) {
        return null;
    }

    const handlerChangeName = (e) => {
        setName(() => e.target.value);
    };

    const handlerChangeJob = (e) => {
        setJob(() => e.target.value);
    };

    const handlerChangeAge = (e) => {
        if (!Number.isNaN(Number(e.target.value))) {
            setAge(() => e.target.value);
        }
    };

    const handleClickAddButton = () => {
        if (name && job && age) {
            addUser(name, job, age);
            setName(() => '');
            setJob(() => '');
            setAge(() => '');
        }
    };

    return (
        <div className="modalAdd">
            <h3>Add user</h3>
            <div className="wrapperName">
                <label htmlFor="userName">
                    Name
                    <input
                        type="text"
                        className="form-control"
                        id="userName"
                        placeholder="Enter name"
                        onChange={handlerChangeName}
                        value={name}
                    />
                </label>
            </div>
            <div className="wrapperJob">
                <label htmlFor="userJob">
                    Job
                    <input
                        type="text"
                        className="form-control"
                        id="userJob"
                        placeholder="Enter job"
                        onChange={handlerChangeJob}
                        value={job}
                    />
                </label>
            </div>
            <div className="wrapperAge">
                <label htmlFor="userAge">
                    Age
                    <input
                        type="text"
                        className="form-control"
                        id="userAge"
                        placeholder="Enter age"
                        onChange={handlerChangeAge}
                        value={age}
                    />
                </label>
            </div>
            <div className="buttonsModal">
                <button onClick={handleClickAddButton} type="button" className="btn btn-success">
                    Add
                </button>
                <button onClick={hide} type="button" className="btn btn-danger">
                    Cancel
                </button>
            </div>
        </div>
    );
};
ModalAdd.propTypes = {
    visible: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
};

export default ModalAdd;
