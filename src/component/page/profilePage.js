import React, {Component} from 'react'
import Header from '../atoms/header'
import TagCard from '../atoms/tag'
import Footer from '../atoms/footer'

export default class ProfilePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = 'profile' id = 'mainPage'>
            <Header title = 'Profile' />
            <div className = 'nonevisivle-block'></div>
            <div className = 'big-card'>
                <h2>名前</h2>
                <h3><ruby>浅野<rt>Asano</rt></ruby> <ruby>広大<rt>Kota</rt></ruby></h3>
                <h2>経歴</h2>
                <div className = 'document-box'>
                    <h4>2017年3月西宮市立西宮東高等学校卒業</h4>
                    <h4>2017年4月神戸大学 工学部 情報知能工学科 入学</h4>
                    <h4>2021年3月神戸大学 工学部 情報知能工学科 卒業</h4>
                    <h4>2021年4月神戸大学 大学院 システム情報学研究科 計算科学専攻 入学</h4>
                </div>
                <h2>自己紹介</h2>
                <div className = 'document-box'>
                    <p>神戸大学大学院1回生の浅野です．</p>
                    <p>面白そうなものには手を出してみたくなる性分で，大学1回生からジャグリングとギター，カメラを始めて，2回生からゲーム開発に興味を持ちUnityで簡単なゲーム開発にも手を出していました．</p>
                    <p>学部4回生ではコロナ禍の影響でリモート研究により家にいる期間が長かったので，Webアプリ開発も始めてみました．自分で何か作ったり表現することが好きなので、今も続けています．</p>
                    <p>上記以外にもサークルの仕事などで映像を作ったり，友人とTRPGシナリオを制作、販売しています．</p>
                    <p>研究面では計算基盤研究室で複雑ネットワークに関する研究を行っています．</p>
                </div>
                <div className = 'tag-box'>
                    <TagCard tagName = 'ジャグリング' />
                    <TagCard tagName = 'アコギ' />
                    <TagCard tagName = 'カメラ' />
                    <TagCard tagName = 'ゲーム' />
                    <TagCard tagName = 'Webアプリ' />
                    <TagCard tagName = 'TRPG' />
                    <TagCard tagName = 'ボードゲーム' />
                </div>
            </div>
            <div className = 'nonevisivle-block'></div>
            <Footer />
          </div>
        )
    }
}