import React, { Component } from 'react';
import axios from '../../utils/request';
import { NavLink } from 'react-router-dom';
import { Card, Pagination } from 'antd';
import Meta from 'antd/lib/card/Meta';

import './index.scss'
class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            total: 0,
            pageSize: 12,
            currentPage: 1
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
    onChangePage = (page) => {
        const { keyword } = this.props;
        const { pageSize } = this.state;
        this.requestData(keyword, page - 1, pageSize)
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
            total: res.data.result.total,
            currentPage: start + 1,
            list: res.data.result.list || []
        })
    }
    render() {
        const { list, total, currentPage, pageSize } = this.state;
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
                <div className="pagination">
                    <Pagination onChange={this.onChangePage} total={total} current={currentPage} pageSize={pageSize} showSizeChanger={false} />
                </div>
            </div>
        );
    }
}

export default CardList;