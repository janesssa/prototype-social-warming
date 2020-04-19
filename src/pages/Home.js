import React from 'react'
import '../styles/index.scss';
import Logo from '../components/Logo.js'

const Home = ({content, handleNext}) => {
    return (
        <div className='home'>
            <Logo />
            <div class="home-content">
                <div className="title title--red">
                    {content.title}
                </div>
                <div className="body">
                    {content.content.map((block, i) => (
                        <p>
                            {block}
                        </p>
                    ))}
                </div>
                <button className="html-button" onClick={() => handleNext()}>
                    Start
                </button>
            </div>
        </div>
    )
}

export default Home