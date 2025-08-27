import React from "react";

export default function Friends() {
    const dummyFriends = [
        { name: "Idil", emotion: "Hateful" },
        { name: "Yawen", emotion: "Awe" },
        { name: "Sonia", emotion: "At Ease" },
    ];

    return (
        <div className="page">
            <div className="block header">
                <h1>Friends</h1>
                <button>+</button>
            </div>
            <div className="block">
                {dummyFriends.map(item => (
                    <div className="section">
                        <div className="lhs">
                            <h3>{item.name}</h3>
                            <p>{item.emotion}</p>
                        </div>
                        <div className="rhs">
                            <img className="emotion" />
                            <img className="pfp" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}