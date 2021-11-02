import React, { useState } from 'react'
import Side from './Side'
import Button from './Button';

const Main = ({ sidebar }) => {
    const [username, setUsername] = useState("akshatmittal61");
    const url = (`https://api.github.com/users/${username}`);
    const change = (a) => {
        let dataToRetrun = {};
        fetch(a)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUser(data);
                dataToRetrun = data;
            })
        return dataToRetrun;
    }
    const [user, setUser] = useState(() => {
        const data = change(url);
        return data;
    });
    const handleChange = (e) => {
        const { value } = e.target;
        setUsername(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlToSet = `https://api.github.com/users/${username}`;
        change(urlToSet);
    }
    return (
        <main className="main">
            <Side repo_url={user.repos_url} open={sidebar} />
            <div className="page" style={{ width: sidebar ? "82.5%" : "100%" }}>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Enter user name"
                        value={username}
                        onChange={handleChange}
                    />
                    <Button type="submit" text="Submit" color="blue" variant="fill" size="small" />
                </form>
                <div className="card">
                    <div className="card-frame">
                        <div className="card-box">
                            <div className="card-head">
                                <div className="card-head-image" onClick={() => { console.log(user) }}>
                                    <img src={user.avatar_url} alt={user.name} />
                                </div>
                                <div className="card-head-content">
                                    <div className="card-head-content__name">
                                        {user.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
