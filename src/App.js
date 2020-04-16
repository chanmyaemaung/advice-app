import React, { Fragment } from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    // fetchAdvice = () => {
    //     axios
    //         .get('https://api.adviceslip.com/advice')
    //         .then((result) => {
    //             const { advice } = result.data.slip;

    //             console.log(advice);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    fetchAdvice = async () => {
        const result = await axios.get('https://api.adviceslip.com/advice');
        const { advice } = result.data.slip;
        try {
            this.setState({ advice });

            // console.log(advice);
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const { advice } = this.state;
        return (
            <Fragment>
                <div className="app">
                    <div className="card">
                        <h1 className="heading">{advice}</h1>
                        <button className="button" onClick={this.fetchAdvice}>
                            <span>GIVE ME ADVICE</span>
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
