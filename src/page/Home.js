import React from 'react';
import hero from "../img/hero-bg.jpg"

const Home = () => {
    return (
        <div id="home">
                <div className="home">
                    <div className="home--title">
                        <h1>Подписка Иви</h1>
                        <h3>Подключай и смотри новые фильмы и сериалы <br/>
                            со всего мира в отличном качестве и без рекламы</h3>
                        <button>Попробовать 30 дней бесплатно</button>
                        <p>Отменить можно в любой момент</p>
                    </div>
                </div>
        </div>
    );
};

export default Home;