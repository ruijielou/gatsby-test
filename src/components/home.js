import * as React from "react"
import "../style/home.css"
import { StaticImage } from "gatsby-plugin-image"
// import homeText from "../images/home/home-text.png"
import jiqiren from "../images/home/jiqiren.png"
import icon_1 from "../images/home/icon_1.svg"
import icon_2 from "../images/home/icon_2.svg"
import icon_3 from "../images/home/icon_3.svg"
import icon_4 from "../images/home/icon_4.svg"
import icon_5 from "../images/home/icon_5.svg"
import icon_6 from "../images/home/icon_6.svg"
import Collect_and_organize_data from "../images/home/Collect_and_organize_data.svg"
import Verify_analysis_data from "../images/home/Verify_analysis_data.svg"
import Record_information from "../images/home/Record_information.svg"
import Calculation_and_decision_making from "../images/home/Calculation_and_decision-making.svg"
import Transmission_and_communication from "../images/home/Transmission_and_communication.svg"
import Coordination_and_management from "../images/home/Coordination_and_management.svg"
import Generate_report from "../images/home/Generate_report.svg"
import arrow from "../images/home/arrow.svg"

import img1 from "../images/home/1.png"
import img2 from "../images/home/2.png"
import img3 from "../images/home/3.png"
import img4 from "../images/home/4.png"
import img5 from "../images/home/5.png"
import img6 from "../images/home/6.png"
import img7 from "../images/home/7.png"
import img8 from "../images/home/8.png"

const staticImg = [img1, img2, img3, img4, img5, img6, img7, img8]
const Home = i18data => {
  const page3 = [
    {
      icon: icon_1,
      title: "降本增效",
      subTile: "1个机器人1小时可完成1000+单量的工作",
    },
    {
      icon: icon_2,
      title: "工作100%准确",
      subTile: "避免常见人为错误，安全无误，审计无忧",
    },
    {
      icon: icon_3,
      title: "非侵入式集成",
      subTile: "非侵入式的跨系统连接，形成高效可靠的数据“中台”。",
    },
    {
      icon: icon_4,
      title: "丰富灵活的拓展",
      subTile: "支持自定义SDK库，使用更轻松。",
    },
    {
      icon: icon_5,
      title: "释放劳动力",
      subTile: "解放人员做重复工作，节约人力，缩短周期，提升服务品质",
    },
    {
      icon: icon_6,
      title: "售后支持",
      subTile: "一流的本地化支持，灵活高效地为客户提供定制化方案。",
    },
  ]
  const page4 = [
    "金融业",
    "医疗业",
    "制造业",
    "零售业",
    "物流业",
    "房地产业",
    "银行业",
    "轻工业",
  ]
  const page5 = [
    {
      type: 1,
      title: "收集整理数据",
      icon: Collect_and_organize_data,
    },
    {
      type: 2,
      title: "",
      icon: arrow,
    },
    {
      type: 1,
      title: "验证分析数据",
      icon: Verify_analysis_data,
    },
    {
      type: 2,
      title: "",
      icon: arrow,
    },
    {
      type: 1,
      title: "记录信息",
      icon: Record_information,
    },
    {
      type: 2,
      title: "",
      icon: arrow,
    },
    {
      type: 1,
      title: "计算、决策推出",
      icon: Calculation_and_decision_making,
    },
    {
      type: 2,
      title: "",
      icon: arrow,
    },
    {
      type: 1,
      title: "传输和交流",
      icon: Transmission_and_communication,
    },
    {
      type: 2,
      title: "",
      icon: arrow,
    },
    {
      type: 1,
      title: "协调和管理",
      icon: Coordination_and_management,
    },
    {
      type: 2,
      title: "",
      icon: arrow,
    },
    {
      type: 1,
      title: "生成报表",
      icon: Generate_report,
    },
    {
      type: 2,
      title: "",
      icon: null,
    },
  ]
  return (
    <div className="home_container">
      <div className="full-height page-1 flex flex_column justify-center">
        <div className="homeText">
          {/* <img height="46" src={homeText} /> */}
        </div>
        <p className="page-text home-page-cotent">
          帮助用户连接不同的系统和服务，处理重复有规律的劳动，实现工作流程自动化，更专注提高工作效率，让企业“事半功倍”并且已经完成在保险、金融、医疗保健等领域的场景深耕，联合合作伙伴具备深度定制化能力和稳定交付能力，积累了丰富的行业可行性解决方案。
        </p>
        <div style={{ marginTop: "2em" }}>
          <span className="rpa-btn">申请试用</span>
        </div>
      </div>
      <div className="full-height page-2 flex flex_center">
        <div className="flex_1">
          <img style={{ width: "80%" }} src={jiqiren} />
        </div>
        <div className="flex_1">
          <p className="page-text page-text-title">什么是RPA机器人流程自动化</p>
          <p className="page-text">
            能够代替或者协助人类在计算机、手机等智能设备中完成重复性工作与任务
          </p>
          <p className="page-text">
            RPA（Robotic Process
            Automation）是基于软件机器人和人工智能（AI）的新型企业业务流程自动化技术，也称为数字化劳动力，通过零集成的方式帮助企业员工完成重复密集的工作，帮助企业提升核心竞争力。
          </p>
        </div>
      </div>
      <div className="full-height page-3">
        <p className="page-text page-text-title text-center">
          RPA可以为您带来什么价值
        </p>
        <ul className="flex flex_around flex_wrap">
          {page3.map((item, index) => {
            return (
              <li className="text-center value-item" key={index}>
                <img style={{ marginBottom: "1em" }} src={item.icon} />
                <h5 className="page-text sub-title">{item.title}</h5>
                <p className="page-des-text">{item.subTile}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="page-4">
        <h5 className="page-text page-text-title text-center">
          这些行业都可以使用RPA解决方案
        </h5>
        <p className="page-text text-center">
          在未来，那些你不想做的枯燥的工作，也许真的可以不做了，重复化、标准化的工作都可以让RPA机器人帮你完成。
        </p>
        <ul className="main-content flex flex_around flex_wrap">
          {page4.map((item, index) => {
            return (
              <li
                className="text-center value-item flex flex_column"
                key={index}
              >
                <img src={staticImg[index]} />
                <p className="page-text text-left">{item}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="page-5">
        <h5 className="page-text page-text-title text-center">工作流程</h5>
        <ul className="main-content flex flex_around flex_wrap">
          {page5.map((item, index) => {
            return (
              <li
                className="text-center value-item flex flex_column flex_center"
                key={index}
              >
                <img style={{width:item.type == 2 ? '16.5px':""}} src={item.icon} />
                <p className="page-text" style={{height: '18px'}}>{item.title}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home
