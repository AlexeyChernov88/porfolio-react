import React from "react";

const Offer = ({ openPopap, isShowPopap }) => {
    return (
        <>
            <h1 className="offer">Чернов Алексей Леонидович</h1>
            <div className="photo" onClick={openPopap}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-7f87c.appspot.com/o/files%2Fava.jpg?alt=media&token=8a5f9d78-3b25-45a0-b32d-a7c17d10e777"
                    alt="Фотография"
                />
            </div>
            <div className={"popap " + (isShowPopap ? "active" : "")}>
                <div className="popap__inner">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-7f87c.appspot.com/o/files%2Fava.jpg?alt=media&token=8a5f9d78-3b25-45a0-b32d-a7c17d10e777"
                        alt="Фотография"
                    />
                </div>
            </div>
        </>
    );
};

export default Offer;
