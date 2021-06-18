import React, {Component} from 'react'
import Header from './header'
import Card from './card'
import Footer from './footer'
import image1 from './img/img1.jpg'
import image2 from './img/img2.JPG'
import image3 from './img/img3.jpg'
import image4 from './img/img4.JPG'

export default class HobbyPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = 'hobby' id = 'mainPage'>
                <Header title = 'Hobby' />
                <div className = 'nonevisivle-block'></div>
                <Card cardTitle = 'ジャグリング' cardExpress = 'ディアボロと呼ばれる中国ゴマを用いて，学園祭や依頼されたショーなどでパフォーマンスを披露していました．' outsudeURL='#juggling-movie'tagName = '' movieURL='https://www.youtube.com/embed/wO_2-07oZFs' />
                <Card cardTitle = 'アコースティックギター' cardExpress = 'サークルでアコースティックギターを弾いていました．' tagName = '' movieURL=''/>
                <div className = 'card'>
                    <h2 className = 'cardTitle'>写真</h2>
                    <div className = 'cardExpress'>
                        <p>趣味で風景を撮っています．</p>
                        <div className='img-box'>
                            <img src={image1} width='250px' alt='写真1' />
                            <img src={image2} width='250px' alt='写真2' />
                            <img src={image3} width='250px' alt='写真3' />
                            <img src={image4} width='250px' alt='写真4' />
                        </div>
                    </div>
                </div>
                <Card cardTitle = 'TRPG・ボードゲーム' cardExpress = 'TRPGやアナログゲームなどのボードゲームを制作し，ゲームマーケットなどで販売しています．' outsideURL='https://aigeiensya.booth.pm/' tagName = '' movieURL=''/>
                <div className = 'nonevisivle-block'></div>
                <Footer />
            </div>
        )
    }
}