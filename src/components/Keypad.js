// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

   receivePassword = () => console.log('Entering password...')

    render() {
        return (
            <div>
                <input type="password" 
                onKeyUp={this.receivePassword}/>
            </div>
        )
    }
}

export default Keypad;