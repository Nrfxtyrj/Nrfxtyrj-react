import React, { Component } from 'react';
import './Projects.css';
class Projects extends Component {
    
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
            <button onClick={this.openModalHandler} className="open-modal-btn">мои проекты</button>
            <div className={`overlay animated ${this.state.isOpen ? "show" : null}`}>
            <div className="modal-projects">
            <svg onClick={this.closeModalHandler} height="200" viewBox="0 0 200 200" width="200" >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <div className='main-block'>
                <div className='block' ><div><a href="https://nrfxtyrj.github.io/retrogame.github.io/menu/retromenu.html" target="_blank">RETRO GAME</a></div>
                    <div className='description'><p >Экзаменационная работа сделанная виде двух аркадных игр. С применением технологий HTML, CSS, JS</p></div>
                    <div className='link-app'>
                        <div>
                        <div><a href="https://github.com/Nrfxtyrj/retrogame.github.io" target="_blank">&#128279;</a></div>
                        <div><a href="https://nrfxtyrj.github.io/retrogame.github.io/menu/retromenu.html" target="_blank"> ▶</a></div>
                        </div>
                        </div>
                    </div>
                <div className='block' ><div><a  href="https://nrfxtyrj.github.io/animewebsitej.github.io/mywork.html" target="_blank">ANIME WEB SITE</a>
                    <div className='description'><p> Самостоятельная работа для применение знайний. С применением технологий HTML, CSS, bootstrap</p></div>
                    <div className='link-app'>
                        <div>
                        <div><a href="https://github.com/Nrfxtyrj/animewebsitej.github.io" target="_blank">&#128279;</a></div>
                        <div><a href="https://nrfxtyrj.github.io/retrogame.github.io/menu/retromenu.html" target="_blank"> ▶</a></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='block' ><div><a  href="https://nrfxtyrj.github.io/animewebsitej.github.io" target="_blank">Bootstrap WEB SITE</a></div>
                    <div className='description'><p> Готовая страница для bootstrap . С применением технологий HTML, CSS, bootstrap</p></div>
                    <div><a href="https://github.com/Nrfxtyrj/bootstrap-task" target="_blank">&#128279;</a></div></div>
                <div className='block' ><div><a  href="https://github.com/Nrfxtyrj/github-exam" target="_blank"> WEB SITE EXAM</a></div>
                    <div className='description'><p>Экзаменационная работа сделанная виде двух аркадных игр. С применением технологий HTML, CSS</p></div>
                    <div><a href="https://github.com/Nrfxtyrj/github-exam" target="_blank">&#128279;</a></div></div>
                <div className='block' ><div><a  href="https://github.com/Nrfxtyrj/Work-of-task" target="_blank"> WORK OF TASK</a></div>
                    <div className='description'><p>Самостоятельная работа сделанная виде тестового задания. С применением технологий HTML, CSS</p></div>
                    <div><a href="https://github.com/Nrfxtyrj/Work-of-task" target="_blank">&#128279;</a></div></div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
export default Projects ;