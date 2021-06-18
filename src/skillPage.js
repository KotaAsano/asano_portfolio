import React,{Component} from 'react'
import Header from './header'
import Card from './card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Footer from './footer'

export default class SkillPage extends Component{
    constructor(props){
        super(props)
    }
    //<FontAwesomeIcon  icon={faTwitter} />

    render(){
        return(
            <div className = 'skill' id = 'mainPage'>
                <Header title = 'Skill' />
                <div className = 'nonevisivle-block'></div>
                <Card cardTitle = 'Python' cardExpress = '研究で使用しています．igraphと呼ばれるライブラリを用いて，データ(CSVファイル)を読み込みグラフ・ネットワークを生成するプログラムを作りました．他にもPytorchを用いて機械学習の勉強をしています．' 
                tagName = ''  movieURL=''/>
                <Card cardTitle = 'Julia' cardExpress = 'Pythonで作ったプログラムを自分の勉強がてら高速化させながら書き換えています．' tagName = '' movieURL=''/>
                <Card cardTitle = 'Javascript・React・Node.js' cardExpress = 'Webアプリを趣味で作っています．基本的に独学で習得していて，簡単なSPAを作っています．Node.jsはDiscordのbotを作った時に利用しました．' 
                tagName = '' movieURL=''/>
                <Card cardTitle = 'HTML・CSS' cardExpress = '基本的なことは一通りできます．' tagName = '' movieURL=''/>
                <Card cardTitle = 'Unity・C#' cardExpress = 'Unityで簡単なゲームの開発をしています．簡単な一人称アクションゲームを作ったことがあります．' tagName = '' movieURL=''/>
                <Card cardTitle = 'C・Java・Scala・C++' cardExpress = '授業で使用しました．プログラミングの勉強や動的計画法などの実装，簡単なゲームの開発をしました．' tagName = '' movieURL=''/>
                <div className = 'nonevisivle-block'></div>
                <Footer />
            </div>
        )
    }
}