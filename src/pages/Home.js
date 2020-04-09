import React from 'react'
import '../styles/index.scss';
import Logo from '../components/Logo.js'

const Home = ({content}) => {
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
                <div className="button button--red" href="/">
                    <a href="/">Start </a>
                </div>
            </div>
        </div>
    )
}

export default Home