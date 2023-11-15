import React from 'react'

function Home() {
  return (
    <div className='home'>
        <div className='navbar'>
            <div className='navbar__title'>
                <div className='navbar__title--text'>Crazy Tech</div>
            </div>
            <div className='navbar__list--area'>
                <div className='navbar__items'>
                    <div className='navbar__link'>Home</div>
                    <div className='navbar__link'>About us </div>
                    <div className='navbar__link'>Portfolio</div>
                    <div className='navbar__link'>Services </div>
                    <div className='navbar__link'>News </div>
                    <div className='navbar__link'>Case studies </div>
                </div>
                <div className='navbar__button'>
                    <div className='navbar__button--title'>Join us</div>
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='content__list'>
                <div className='content__items'>
                    <div className='content__titles'><span className='content__title-1'>Unleash the Future<br/>with </span><span className='content__title-2'>Crazy Tech!</span></div>
                    <div className='content__description'>Are you ready to embark on a journey through the world of cutting-edge innovation? At Crazy Tech, we're redefining the possibilities of technology, one breakthrough at a time.</div>
                </div>
                <div className='content__button'>
                    <div className='content__button--title'>Let's Innovate Together</div>
                </div>
            </div>

            <div className='content__elements'><img src='/Elements.svg' alt='Element fill with dots' width={66} height={103}/></div>
            <div className='content__tag'>
                <div className='content__tag--img'><img src='/Tag.svg' alt='HTML Close Tag' width={54} height={56}/></div>
            </div>
            <div className='content__bracket'>
                <div className='content__bracket--img'><img src='/Bracket.svg' alt='Dots Inside Curly Bracket' width={98.2} height={67.8}/></div>
            </div>
            <div className='content__frame'><img src='/Frame.svg' alt='Frame Tea Cup' width={73} height={101}/></div>
            <div className='content__ellipse'><img src='/Ellipse.svg' alt='Ellipse look like D shape' width={101.21} height={93.04}/></div>
            <div className='content__layer'><img src='/Layer.svg' alt='Layers of code' width={86.19} height={82.51}/></div>
        </div>

        <div className='customers'>
            <div className='customers__list'>
                <img src='/nokia.svg' alt='Nokia'  width={156} height={26}/>
                <img src='/Group.svg' alt='Group On' width={160} height={29}/>
                <img src='/honeywell.svg' alt='Honey Well' width={181.67} height={35}/>
                <img src='/abb.svg' alt='ABB' width={86.67} height={35}/>
                <img src='/barclays.svg' alt='Bar Clays' width={195} height={35}/>
            </div>
        </div>
    </div>
  )
}

export default Home
