import React ,{Component} from 'react'
import Header from './header'
import Card from './card'
import Footer from './footer'

export default class WorkPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className = 'work' id = 'mainPage'>
          <Header title = 'Work'/>
          <div className = 'nonevisivle-block'></div>
          <Card cardTitle = 'Asame.com' cardExpress = 'このポートフォリオです．' tagName = {['Javascript','React','heroku']} movieURL=''/>
          <Card cardTitle = 'Bad Luck' cardExpress = '面とサイコロの数を指定すると投げてくれるTRPG用のDiscordのbotです．公開されていたbotが使えなくなったので作りました．'
          outsideURL ='' tagName = {['Javascript','Node.js','heroku']} movieURL=''/>
          <Card cardTitle = 'Photo Picker' cardExpress = '選択した写真の特徴的な色を抽出してくれるアプリです．写真に合う背景色を見つけたくて作りました．'
          outsideURL = 'https://photo-picker-f1007.web.app/' tagName = {['Javascript','React','firebase']} movieURL=''/>
          <Card cardTitle = 'To do list' cardExpress = 'To Do アプリです．タスクなどが増えてきたので作りました．' outsideURL='https://to-do-theater.firebaseapp.com/' tagName = {['Javascript','React','heroku']} movieURL=''/>
          <Card cardTitle = 'Cocktail City' cardExpress = 'ベースの酒を選ぶとランダムにカクテルとカクテル言葉を出力してくれるアプリです．お店で飲むお酒に毎回迷うので作りました．'
          outsideURL = 'https://cocktail-city.web.app/' tagName = {['Javascript','firebase']} movieURL=''/>
          <Card cardTitle = 'Gradation Garden' cardExpress = '選択したグラデーションを様々なアイコンで試すことができるアプリです．アイコンの色を変化させるのが楽しくて作りました．' 
          outsideURL = 'https://gradation-garden.web.app/' tagName = {['Javascript','firebase']} movieURL=''/>
          <Card cardTitle = 'おかしなロコと大迷宮' cardExpress = '「床」をテーマにした3Dアクションゲームです．様々なギミックの床を攻略しながらアイテムを集めていきます．'
          outsideURL = 'https://unityroom.com/games/rocomaze' tagName = {['Unity','C#']} movieURL=''/>
          <Card cardTitle = 'Application' cardExpress = 'スマホの様々な機能を使ってギミックを乗り越えるゲームです．' tagName = {['Unity','C#']} movieURL=''/>
          <Card cardTitle = '矢避けゲーム' cardExpress = '猫が矢を避けながらゴールを目指すゲームです．' tagName = {['Unity','C#']} movieURL=''/>
          <Card cardTitle = 'ブロック崩し' cardExpress = 'ブロック崩しです．初めてゲームを作ったときのものです．' tagName = {['C++']} movieURL=''/>
          <div className = 'nonevisivle-block'></div>
          <Footer />
        </div>
        )
    }
}