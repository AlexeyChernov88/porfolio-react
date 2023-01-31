import React from "react";

const Work = ({
    name,
    img,
    stack,
    repository,
    deploy,
    video,
    figma,
    description
}) => {
    return (
        <div className="works__item">
            <div
                className={
                    "works__card " +
                    (description.length > 500 ? "big" : "small")
                }
            >
                <div className="works__front">
                    <div className="works__screen">
                        <img src={img} alt="Скрин приложения" />
                    </div>
                    <div className="works__name">{name}</div>
                </div>
                <div className="works__back">
                    <div className="works__wrapper">
                        <div className="works__info">
                            <div className="works__infoItem">
                                <b>Название проекта: </b>
                                {name}
                            </div>
                            <div className="works__infoItem">
                                <b>Стек технологий: </b>
                                {stack}
                            </div>
                            <div className="works__infoItem">
                                <a href={repository} target="blank">
                                    Перейти в репозиторий GitHub
                                </a>
                            </div>
                            <div className="works__infoItem">
                                <a href={deploy} target="blank">
                                    Посмотреть deploy проекта
                                </a>
                            </div>
                            {video && (
                                <div className="works__infoItem">
                                    <a href={video} target="blank">
                                        Посмотреть видеопрезентацию проекта
                                    </a>
                                </div>
                            )}
                            {figma && (
                                <div className="works__infoItem">
                                    <a href={figma} target="blank">
                                        Посмотреть макет figma
                                    </a>
                                </div>
                            )}
                            <div className="works__infoItem">
                                <b>Описание проекта: </b>
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
