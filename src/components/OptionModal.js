import React from 'react';
import Modal from 'react-modal';
import DashboardPage from './DashboardPage';

const OptionModal = (props) => ( //shorthand syntax for arrow function as it just returns
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel='Selected Option'
        onRequestClose={props.handleSelectedOption}
        ariaHideApp={false}          
    >
        <h3>User Data</h3> 
        <p>{props.user}</p>       
        <DashboardPage buttonHidden={true}/>
        <button onClick={props.handleSelectedOption}>okay</button>
    </Modal>
);

export default OptionModal;