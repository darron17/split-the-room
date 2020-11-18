import React from 'react';
import * as colors from '../../colors';
import '../../Stylesheets/finances.css';

function TransactionHistoryElement(props) {

    function formatValue() {
        
        const value = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(props.value);
        if((props.user1 === props.user && props.isComplete) || (props.user2 === props.user && !props.isComplete)) {
            return <h4 className="value" style={{color: colors.red}}>{value}</h4>
        }
        else {
            return <h4 className="value" style={{color: colors.green}}>{value}</h4>
        }
    }

    function formatMessage() {
        if(props.isComplete === "true") {
            if(props.user1 === props.user) {
                return <h4 style={{alignSelf: "end"}}>{props.user1} paid you</h4>;
            }
            return <h4 className="message">You paid {props.user1}</h4>;

        }
        else {
            if(props.user1 === props.user) {
                return <h4 style={{alignSelf: "end"}}>{props.user1} charged you</h4>;
            }
            return <h4 className="message">You charged {props.user1}</h4>;
        }

    }

    return(<div className="transaction">
        {formatValue()}
        {formatMessage()}
        <span className="date">{props.dateCompleted}</span>
    </div>);

}

export default TransactionHistoryElement;