import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            time: 0
        }
        setInterval(()=>{
            this.setState({
                time: this.state.time+1
            })
        }, 1000)
    }

    render() {
        let {time} = this.state

        return (
            <div>
               Footer Online Time {time}
            </div>
        );
    }


}

export default Footer