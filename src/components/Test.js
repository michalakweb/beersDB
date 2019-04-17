import React from 'react';

class Test extends React.Component {
    state = {
        options: '1'
    }

    render() {
        return (
            <div>
                 {!this.state.options && <p>Loading data</p> }
            </div>
        )
    }
}


export default Test;