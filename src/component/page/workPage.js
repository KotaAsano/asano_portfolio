import React ,{Component} from 'react'
import Header from '../atoms/header'
import Card from '../molecules/card'
import Footer from '../atoms/footer'

export default class WorkPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className = 'work' id = 'mainPage'>
          <Header title = 'Work'/>
          <div className = 'nonevisivle-block'></div>
          <Card cardTitle = 'ネットワーク生成アプリ' cardExpress = '研究成果を反映させたネットワーク生成アプリを作成しました．バックエンドでは受けとったデータから，研究で開発したネットワーク生成アルゴリズムでネットワークを生成し，フロントエンドではバックエンドから受けとったネットワークと分析結果を渡し表示します，' tagName = {['Python','igraph','Flask','React','react-graph-vis']} movieURL = '' />
          <Card cardTitle = 'menuの機能改善' cardExpress = '株式会社レアゾンホールディングスのインターンで実装しました．menuアプリの改善点の考案，実装を行いました．具体的には地図上の店舗検索半径の可視化を行いました．' tagName = {['TypeScript','React Native']} movieURL = '' />
          <Card cardTitle = 'ECサイトのUIコンポーネント設計' cardExpress = '株式会社MonotaROのインターンで実装しました．ペアでUIの分析，実装，例外処理，テストを実装しました．特にAtomic Designのレベル1，2のコンポーネントの実装，表示に関する例外処理やテストを担当しました．' tagName = {['TypeScript','React','Storybook','SCSS']} movieURL = '' />
          <Card cardTitle = '経路探索アプリ' cardExpress = '株式会社ナビタイムジャパンのインターン課題として作成しました．3日間開発を行い，検索結果の絞り込み機能などを豊富に実装しました．' tagName = {['JavaScript','Navitime API']} movieURL = '' />
          <Card cardTitle = '神戸大学医学部向け健康管理Webアプリ kumanomi' cardExpress = '授業の一環で神戸大学医学部向けの健康管理Webアプリをチームで開発しました．フロントエンド全般とバックエンドの一部(メール自動通知機能)を担当しました．' tagName = {['Java','Spring Boot','Thymeleaf']} movieURL = '' />
          <Card cardTitle = 'Asame.com' cardExpress = 'このポートフォリオです．自分のことを詳しく知ってもらいたいと思い作成しました' tagName = {['Javascript','React','heroku']} movieURL='' />
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