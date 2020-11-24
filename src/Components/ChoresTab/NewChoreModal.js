import React, {useState} from 'react';
import $ from 'jquery';
import '../../Stylesheets/modal.css';


function NewChoreModal(props) {
    const [name, setName] = useState("");
    const [isRecurring, setRecurring] = useState(false);


    function dismissModal(e) {
        props.dismissModal();
    }

    function choreNameHandler(e) {
        setName(e.target.value);
    }

    function isRecurringHandler(e) {
        setRecurring(!isRecurring);
    }

    function submit() {
        let newChore = {
            name: name, 
            recurrence: isRecurring, 
            lastCompleted: "never", 
            isDeleted: false,
        }
        if (newChore.name === "") {
            alert("Please name the chore.");
        }
        else {
            $.post('/newchore', newChore, function() {
                setRecurring(false);
                setName("");
                props.refreshChores();
                dismissModal();
            });
        }
    }

return(
    <div>
        {props.showModal && <div className="modal" id="messageModal">
        <div className="modal-content">
        <h3 onClick={dismissModal}>X</h3>
            <h2>{"New Chore"}</h2>
            <input type="text" onChange={choreNameHandler}></input>
            <div className="check-chore">
            {"Chore repeats"}
            <input type="checkbox" onChange={isRecurringHandler}></input> 
            </div>
            <button onClick={submit}>{"Submit"}</button>
        </div>
        </div>}
    </div>
);
}

export default NewChoreModal;