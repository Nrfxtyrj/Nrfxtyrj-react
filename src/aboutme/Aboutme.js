import React from 'react';
import './Aboutme.css';

const About = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <p>Начинающий Frontend-developer. Имею большое<br/> стремление стать частью профессиональной<br/> команды разработчиков. В которой смогу<br/> развивать свои навыки в этой сфере и принимать<br/> участия в проектах разной сложности.<br/>

Полтора года активно изучаю и использую языки:<br/> JavaScrip. Уверенное владение HTML5, CSS3<br/> ( flex, grid, анимации), адаптивная и<br/> кросбраузерная верстка сайтов различной<br/> сложности.<br/>

Технологии:<br/>
• Языки: HTML5, CSS3, JavaScript.<br/>
• GIT : GitHub.<br/>
• Фрейворк: Bootstrap, Materialize.<br/>
• Библиотеки: React.<br/>
• Препроцессоры: Less, SCSS.<br/>
• OS: Windows OS.<br/>

Отучился полные 11 классов и имею высшее <br/> техническое образование. Проходил различные<br/> курсы доп. обучения по программированию и<br/> активно обучаюсь самостоятельно.<br/>

Имею своё портфолио работ на GitHub:<br/>

🦔https://github.com/Nrfxtyrj</p>
        </div>
        </div>
    );
};

export default About;