import React, { Component } from 'react';
import axios from '../../utils/request';
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

import './index.scss'
class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageSize: 12,
        }
    }
    componentDidMount() {
        const { keyword } = this.props;
        const { pageSize } = this.state;
        this.requestData(keyword, 0, pageSize)
    }
    componentWillReceiveProps(nextProps) {
        const { keyword } = nextProps;
        const { pageSize } = this.state;
        this.requestData(keyword, 0, pageSize)
    }
    async requestData(keyword, start, num) {
        const res = await axios.get('recipe/search', {
            params: {
                keyword,
                start,
                num,
                appkey: "6b43cf826150520f"
            }
        })
        this.setState({
            list: res.data.result.list || []
        })
    }
    render() {
        const { list } = this.state;
        return (
            <div className="content">
                {
                    list.map(item => {
                        return (
                            <NavLink
                                to={{
                                    pathname: `/common/detail/${item.id}`,
                                    state: item
                                }}
                                key={item.id}
                            >
                                <Card
                                    className="card"
                                    hoverable
                                    id={item.id}
                                    cover={<img src={item.pic} alt="example" />}
                                >
                                    <Meta title={item.name} description={item.tag} />
                                </Card>
                            </NavLink>
                        )
                    })
                }
            </div>
        );
    }
}

export default CardList;