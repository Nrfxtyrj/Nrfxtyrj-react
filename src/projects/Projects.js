import React from 'react';
import './Projects.css';

const Projects = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
            <ul>
            <li><div><a className='open-bth' href="https://nrfxtyrj.github.io/retrogame.github.io/menu/retromenu.html" target="_blank">RETRO GAME</a></div>
        <div><p>Экзаменационная работа сделанная виде двух аркадных игр. С применением технологий HTML, CSS, JS</p></div>
        <div><a  href="https://nrfxtyrj.github.io/retrogame.github.io/menu/retromenu.html" target="_blank">Перейти напрямую к работе</a>
        <a  href="https://nrfxtyrj.github.io/retrogame.github.io" target="_blank">Перейти в репозиторй работы</a></div></li>
        <li><div><a className='open-bth' href="https://nrfxtyrj.github.io/animewebsitej.github.io/mywork.html" target="_blank">ANIME WEB SITE</a>
        <div><p> Самостоятельная работа для применение знайний. С применением технологий HTML, CSS, bootstrap</p></div>
        <a  href="https://nrfxtyrj.github.io/animewebsitej.github.io/mywork.html" target="_blank">Перейти напрямую к работе</a>
        <a  href="https://nrfxtyrj.github.io/animewebsitej.github.io" target="_blank">Перейти в репозиторй работы</a></div></li>
        <li><div><a className='open-bth' href="https://nrfxtyrj.github.io/animewebsitej.github.io" target="_blank">Bootstrap WEB SITE</a></div>
        <div><p> Готовая страница для bootstrap . С применением технологий HTML, CSS, bootstrap</p></div>
        <div><a  href="https://nrfxtyrj.github.io/animewebsitej.github.io" target="_blank">Перейти в репозиторй работы</a></div></li>
        <li><div><a className='open-bth' href="https://github.com/Nrfxtyrj/github-exam" target="_blank"> WEB SITE EXAM</a></div>
        <div><p>Экзаменационная работа сделанная виде двух аркадных игр. С применением технологий HTML, CSS</p></div>
        <div><a  href="https://github.com/Nrfxtyrj/github-exam" target="_blank">Перейти в репозиторй работы</a></div></li>
        <li><div><a className='open-bth' href="https://github.com/Nrfxtyrj/Work-of-task" target="_blank"> WORK OF TASK</a></div>
        <div><p>Самостоятельная работа  сделанная виде тестового задания. С применением технологий HTML, CSS</p></div>
        <div><a  href="https://github.com/Nrfxtyrj/Work-of-task" target="_blank">Перейти в репозиторй работы</a></div></li>
        </ul>
        </div>
        </div>
    );
};

export default Projects;