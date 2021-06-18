import React, {Component} from 'react'
import Header from './header'
import Card from './card'
import Footer from './footer'

export default class ReseachPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className = 'reseach' id = 'mainPage'>
          <Header title = 'Reseach' />
          <div className = 'nonevisivle-block'></div>
          <Card cardTitle = '所属' cardExpress = '神戸大学 大学院 システム情報学研究科 計算科学専攻 博士課程前期1年' tagName = '' movieURL=''/>
          <Card cardTitle = '研究概要' cardExpress = '複雑ネットワークについて研究しています．高齢化などの社会問題から「繋がり」をキーワードにグラフ，ネットワーク生成アルゴリズムの開発や，機械学習などを用いたネットワークの特徴量についての研究を行っています．' 
          tagName = {['グラフ理論','複雑ネットワーク','社会ネットワーク','アルゴリズム開発','機械学習']}  movieURL=''/>
          <div className = 'nonevisivle-block'></div>
          <Footer />
        </div>
        )
        
    }
}