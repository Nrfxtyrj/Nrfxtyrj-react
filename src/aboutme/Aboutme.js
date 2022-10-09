import React, { Component } from 'react';
import './Aboutme.css';
class Aboutme extends Component {
    
    state = {
        isOpen: false
    }

    openModalHandler = () => {
        this.setState({
            isOpen: true
        })
    }
    
    closeModalHandler = () => {
        this.setState({
            isOpen: false
        })
    }
    
    render() {
        return ( 
            <div className='modal-container' >
            <button onClick={this.openModalHandler} className="open-modal-btn">обо мне</button>
            <div className={`overlay animated ${this.state.isOpen ? "show" : null}`}>
            <div className="modal-about">
            <svg onClick={this.closeModalHandler} height="200" viewBox="0 0 200 200" width="200" >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <p className='about-text'>Начинающий Frontend-developer. Имею большое стремление стать частью профессиональной команды разработчиков. В которой смогу развивать свои навыки в этой сфере и принимать участия в проектах разной сложности.<br />

Полтора года активно изучаю и использую языки: JavaScrip. Уверенное владение HTML5, CSS3 ( flex, grid, анимации), адаптивная и кросбраузерная верстка сайтов различной сложности.<br />

Технологии:<br />
• Языки: HTML5, CSS3, JavaScript.<br />
• GIT : GitHub.<br />
• Фрейворк: Bootstrap, Materialize.<br />
• Библиотеки: React.<br />
• Препроцессоры: Less, SCSS.<br />
• OS: Windows OS.<br />

Отучился полные 11 классов и имею высшее техническое образование. Проходил различные курсы доп. обучения по программированию и активно обучаюсь самостоятельно.<br />

Имею своё портфолио работ на GitHub:<br />

🦔https://github.com/Nrfxtyrj</p>
            </div>
            </div>
        </div>
        )
    }
}
export default Aboutme ;