import React, { useCallback, useState } from "react";
import CoinsList from "../CoinsList/CoinsList";
import './Home.css';

function Home() {
    const [email, setEmail] = useState('');

    const handleChange = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail]);

    return (
        <>
            <div className="fh-40 main d-flex justify-content-center align-items-center flex-column">
                <div className="dark-overlay d-flex justify-content-center align-items-center flex-column">
                    <div className="d-flex flex-column justify-content-evenly align-items-center p-2 t-container">
                        <h1 className="f-larger text-center">
                            Next gen crypto trading
                        </h1>
                        <h4 className="text-center">
                            DCNTRLZD is the best place to trade Cryptocurrencies.<br />
                            Enter your email to start trading now!
                        </h4>
                        <form className="sign-up d-flex justify-content-between">
                            <input
                                type="text"
                                placeholder="Email address"
                                className="user-input"
                                onChange={handleChange}
                                value={email}
                            />
                            <button className="btn">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="fh-40 coin-list d-flex justify-content-center align-items-center flex-column">
                <div className="dark-overlay d-flex justify-content-center align-items-center flex-column">
                    <CoinsList quantity={8} />
                </div>
            </div>
        </>

    )
}

export default Home;