import React, { Component } from 'react';
import { Tag } from 'antd';
import { NavLink } from "react-router-dom";
import axios from '../../utils/request'

import './index.scss'
class NavRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taglist:[]
        }
    }
    componentDidMount() {
        this.getTaglist()
    }
    async getTaglist(){
        const res = await axios.get('recipe/class', {
            params: {
                appkey: "6b43cf826150520f"
            }
        })
        this.setState({
            taglist: res.data.result || []
        })
    }
    getRandomArrayElements(arr, count) {
        let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
    render() {
        const { taglist } = this.state
        return (
            <div className="aside">
                <h3 className="title">
                    <span className="hot-tag">热门标签</span>
                    <span className="link-more">
                        <NavLink to="/tags" >更多>></NavLink>
                    </span>
                </h3>
                <ul className="tags">
                    {taglist.map((item, index) => {
                        return (
                            <li className="tags-content" key={index}>
                                <h4>{item.name}</h4>
                                <div>
                                    {this.getRandomArrayElements(item.list, 8).map((tag, index) => (
                                        <Tag color="magenta" key={index}>{tag.name}</Tag>
                                    ))}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default NavRight;