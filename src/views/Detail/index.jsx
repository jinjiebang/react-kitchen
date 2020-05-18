import { LikeTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import { Statistic, Table, Tag } from "antd";
import React, { Component } from "react";
import './index.scss';

const { CheckableTag } = Tag;
const columns = [
  {
    title: "用料",
    dataIndex: "mname",
  },
  {
    title: "用量",
    dataIndex: "amount",
  },
  {
    title: "类型",
    dataIndex: "type",
  },
];
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 渲染菜谱步骤
  renderMenuStep = (data) => {
    return data.map((step, index) => (
      <div className="process-item" key={index}>
        <img className="process-item_img" src={step.pic} alt="" />
        <div className="process-item_des">
          <div className="step">{index + 1}</div>
          <p
            className="describe"
            dangerouslySetInnerHTML={{ __html: step.pcontent }}
          ></p>
        </div>
      </div>
    ));
  };
  render() {
    const menu = this.props.location.state;
    const tags = menu.tag.split(",").slice(0, 6);
    const material = menu.material.map((data) => {
      const type = data.type === 0 ? "配料" : "主材";
      return { ...data, type };
    });
    const process = menu.process;

    return (
      <div className="wrapper">
        <div className="info">
          <img className="img" src={menu.pic} alt="" />
          <div className="introduce">
            <h2 className="menu-name">
              <span>{menu.name}</span>
            </h2>
            <h4>准备时间：{menu.preparetime}</h4>
            <h4>制作时间：{menu.cookingtime}</h4>
            <h4>用餐人数：{menu.peoplenum}</h4>
            <div className="tags">
              <h5 style={{ marginRight: 8, display: "inline" }}>所属标签:</h5>
              {tags.map((tag) => (
                <CheckableTag key={tag}>{tag}</CheckableTag>
              ))}
            </div>
            <div className="statistic">
              <Statistic title="尝试人数" value={112893} className="statistic-item" />
              <Statistic
                className="statistic-item"
                title="支持一下"
                value="999"
                prefix={<LikeTwoTone />}
              />
            </div>
          </div>
        </div>
        <div className="describe">
          <span className="marks">“</span>
          <span dangerouslySetInnerHTML={{ __html: menu.content }}></span>
          <span className="marks">”</span>
        </div>

        <div className="ingredients">
          <h3>
            <ShoppingTwoTone
              className="icon"
              twoToneColor="#52c41a"
            />
            食材准备
          </h3>
          <Table
            rowKey='mname'
            columns={columns}
            dataSource={material}
            size="small"
            pagination={false}
          />
        </div>
        <div className="process">
          <h3>
            <ShoppingTwoTone
              className="icon"
              twoToneColor="#52c41a"
            />
            {menu.name}的做法
          </h3>
          {this.renderMenuStep(process)}
        </div>
      </div>
    );
  }
}

export default Detail;
