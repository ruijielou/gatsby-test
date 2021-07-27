import * as React from "react"
import "../style/home.css"
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

import product1 from "../images/home/product1.png"
import product2 from "../images/home/product2.png"
import product3 from "../images/home/product3.png"
import product4 from "../images/home/product4.png"
import product5 from "../images/home/product5.png"

import pinpai_1 from "../images/home/pinpai_1.png"
import pinpai_2 from "../images/home/pinpai_2.png"
import pinpai_3 from "../images/home/pinpai_3.png"
import pinpai_4 from "../images/home/pinpai_4.png"
import pinpai_5 from "../images/home/pinpai_5.png"

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
  let products = [
    {
      img: product1,
      name: "奥康",
      isActive: true,
      logo: pinpai_1,
      desc:
        " 赤兔智能为电商服务平台奥康鞋业打造全新的智能客服助手，通过提供FAQ+多轮对话技术+VR语音服务，降低人工转接率，提升自助服务占比。大大减轻人工客服和运维的压力，实现更丰富的智能服务场景，不断提升企业的服务效率。",
    },
    {
      img: product2,
      name: "coinbig",
      isActive: false,
      logo: pinpai_2,
      desc:
        " 赤兔智能为电商服务平台奥康鞋业打造全新的智能客服助手，通过提供FAQ+多轮对话技术+VR语音服务，降低人工转接率，提升自助服务占比。大大减轻人工客服和运维的压力，实现更丰富的智能服务场景，不断提升企业的服务效率。",
    },
    {
      img: product3,
      name: "hooli",
      isActive: false,
      logo: pinpai_3,
      desc:
        " 赤兔智能为电商服务平台奥康鞋业打造全新的智能客服助手，通过提供FAQ+多轮对话技术+VR语音服务，降低人工转接率，提升自助服务占比。大大减轻人工客服和运维的压力，实现更丰富的智能服务场景，不断提升企业的服务效率。",
    },
    {
      img: product4,
      name: "金证前海",
      isActive: false,
      logo: pinpai_4,
      desc:
        " 赤兔智能为电商服务平台奥康鞋业打造全新的智能客服助手，通过提供FAQ+多轮对话技术+VR语音服务，降低人工转接率，提升自助服务占比。大大减轻人工客服和运维的压力，实现更丰富的智能服务场景，不断提升企业的服务效率。",
    },
    {
      img: product5,
      name: "开普勒星球",
      isActive: false,
      logo: pinpai_5,
      desc:
        " 赤兔智能为电商服务平台奥康鞋业打造全新的智能客服助手，通过提供FAQ+多轮对话技术+VR语音服务，降低人工转接率，提升自助服务占比。大大减轻人工客服和运维的压力，实现更丰富的智能服务场景，不断提升企业的服务效率。",
    },
  ]
  const [productData, setProductData] = React.useState(products)

  const mouseOver = index => {
    if (productData[index].isActive) return
    let newData = []
    productData.forEach((item, o) => {
      let element = item
      element.isActive = false
      if (o === index) {
        element.isActive = true
      }
      newData.push(element)
    })
    setProductData(newData)
  }
  const news = [
    {
      time: "03-02",
      year: "2021",
      title: "民生银行广州分行携同普尔瀚达科技莅临我司考察交流",
      context:
        "民生银行广州分行跨行资金管理负责人胡迟、深圳市普尔瀚达科技有限公司CEO雷有民一行莅临我司考察交流",
    },
    {
      time: "02-21",
      year: "2021",
      title: "“2021年赤兔科技交付提能训练营”第一期圆满举办",
      context:
        "由赤兔科技研发中心、交付中心和人力行政部共同组织的“2021年赤兔科技交付提能训练营”盛大开班",
    },
    {
      time: "02-28",
      year: "2021",
      title: "“2021年赤兔科技交付提能训练营”第一期圆满举办",
      context:
        "由赤兔科技研发中心、交付中心和人力行政部共同组织的“2021年赤兔科技交付提能训练营”盛大开班",
    },
    {
      time: "02-10",
      year: "2021",
      title: "凝心聚力，砥砺前行——赤兔2021年管理干部就职仪式",
      context: "赤兔科技2021年管理干部就职仪式在深圳总部顺利召开",
    },
    {
      time: "03-10",
      year: "2021",
      title: "凝心聚力，砥砺前行——赤兔2021年管理干部就职仪式",
      context: "赤兔科技2021年管理干部就职仪式在深圳总部顺利召开",
    },
    {
      time: "04-10",
      year: "2021",
      title: "民生银行广州分行携同普尔瀚达科技莅临我司考察交流",
      context:
        "民生银行广州分行跨行资金管理负责人胡迟、深圳市普尔瀚达科技有限公司CEO雷有民一行莅临我司考察交流",
    },
  ]

  return (
    <div className="home_container">
      <div className=" page-1 flex flex_column justify-center">
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
      <div className=" page-2 flex flex_center">
        <div className="flex_1">
          <img style={{ width: "80%" }} alt="RPA" src={jiqiren} />
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
      <div className=" page-3 flex flex_column flex_center">
        <p className="page-text page-text-title text-center">
          RPA可以为您带来什么价值
        </p>
        <ul className="flex flex_around flex_wrap">
          {page3.map((item, index) => {
            return (
              <li className="text-center value-item" key={index}>
                <img
                  style={{ marginBottom: "1em" }}
                  alt={item.title}
                  src={item.icon}
                />
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
                <img src={staticImg[index]} alt={item} />
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
                <img
                  style={{ width: item.type == 2 ? "16.5px" : "" }}
                  alt={item.title}
                  src={item.icon}
                />
                <p className="page-text" style={{ height: "18px" }}>
                  {item.title}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
      {/* Product information 产品资讯 */}
      <div className="product-information flex flex_column flex_center">
        <p className="page-text">
          产品资讯，寻求RPA帮助 都可以联系我们，开启赤兔RPA之旅，解放你的双手
        </p>
        <div className="btn-group">
          <span className="rpa-btn" type="info">
            申请试用
          </span>
          <span className="rpa-btn" type="default">
            联系我们
          </span>
        </div>
      </div>
      <div className="home-partner">
        <h5 className="page-text page-text-title text-center">
          我们的合作伙伴
        </h5>
        <div className="product-main">
          {productData.map((item, index) => {
            return (
              <div
                key={index}
                className={[
                  "product-item flex",
                  item.isActive ? "active" : null,
                ].join(" ")}
              >
                <div
                  className="product-img flex_2"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="product-desc flex_1">
                  <p className="text-left">{item.name}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            )
          })}
          <div className="product-logo flex flex_between">
            {productData.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    mouseOver(index)
                  }}
                  className={[
                    "logo-item flex-1",
                    item.isActive ? "active" : null,
                  ].join(" ")}
                >
                  <img src={item.logo} alt={item.name} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="news-center">
        <h5 className="page-text page-text-title text-center">新闻中心</h5>
        <div className="news-main flex_wrap flex flex_center">
          {news.map((item, index) => {
            return (
              <div className="news-item flex">
                <div className="news-time flex flex_column flex_center">
                  <h4>{item.time}</h4>
                  <span className="news-des">{item.year}</span>
                </div>
                <div className="news-content flex_1">
                  <p className="news-title">{item.title}</p>
                  <p className="news-des">{item.context}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
