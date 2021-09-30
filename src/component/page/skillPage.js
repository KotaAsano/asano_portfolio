import React,{Component} from 'react'
import Header from '../atoms/header'
import Card from '../molecules/card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Footer from '../atoms/footer'

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
                <Card cardTitle = 'Javascript' cardExpress = '趣味でWebアプリを作っています．フロントエンドはReactを利用することが多いです．Node.jsはDiscordのbotを作った時に利用しました．'tagName = '' movieURL=''/>
                <Card cardTitle = 'Python' cardExpress = '研究で使用しています．igraphと呼ばれるライブラリを用いて，データ(CSVファイル)を読み込みグラフ・ネットワークを生成するプログラムを作りました．またWebアプリ化した際にはFlaskを用いてAPIとして書き換えました。他にもPytorchを用いて機械学習の勉強をしています．'
                tagName = ''  movieURL=''/>
                <Card cardTitle = 'Java' cardExpress = '授業でプロジェクト開発を行った際に使用しました．バックエンドはSpring Boot，フロントエンドはThymeleafを用いました．' tagName = '' movieURL = '' />
                <Card cardTitle = 'HTML・CSS' cardExpress = '基本的なことは一通りできます．' tagName = '' movieURL=''/>
                <Card cardTitle = 'C#' cardExpress = 'Unityで簡単なゲームの開発をしています．簡単な一人称アクションゲームを作ったことがあります．' tagName = '' movieURL=''/>
                <Card cardTitle = 'Julia' cardExpress = 'Pythonで作ったプログラムを自分の勉強がてら高速化させながら書き換えています．' tagName = '' movieURL=''/>
                <Card cardTitle = 'C・Scala・C++' cardExpress = '授業で使用しました．プログラミングの勉強や動的計画法などの実装，簡単なゲームの開発をしました．' tagName = '' movieURL=''/>
                <div className = 'nonevisivle-block'></div>
                <Footer />
            </div>
        )
    }
}