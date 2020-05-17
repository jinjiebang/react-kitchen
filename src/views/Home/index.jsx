import React, { Component } from 'react';
import {Carousel} from 'antd';

import './index.scss'
import CardList from '../../components/CardList';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='homeWrap'>
                <Carousel className="homeSwiper" effect="fade" autoplay>
                    <div><img src="https://i3.meishichina.com/attachment/mofang/2019/02/28/20190228155134869390510169539.jpg" alt=""/></div>
                    <div><img src="https://i3.meishichina.com/attachment/mofang/2019/03/01/20190301155142852315710138013.jpg" alt=""/></div>
                    <div><img src="https://i3.meishichina.com/attachment/mofang/2019/02/21/2019022115507147387858197577.jpg" alt=""/></div>
                    <div><img src="https://i3.meishichina.com/attachment/mofang/2019/01/08/2019010815469160847868197577.jpg" alt=""/></div>
                </Carousel>
                <CardList keyword="白菜" />
            </div>
         );
    }
}
 
export default Home;