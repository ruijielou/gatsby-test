import * as React from "react"
import "../style/home.css"
import homeText from "../images/home/home-text.png"
import jiqiren from "../images/home/jiqiren.png"
import icon_1 from "../images/home/icon_1.svg"
import icon_2 from "../images/home/icon_2.svg"
import icon_3 from "../images/home/icon_3.svg"
import icon_4 from "../images/home/icon_4.svg"
import icon_5 from "../images/home/icon_5.svg"
import icon_6 from "../images/home/icon_6.svg"

// const renderCotent = () => {
//   const data = [
//     {
//       icon: icon_1,
//       title: "降本增效",
//       subTile: "1个机器人1小时可完成1000+单量的工作",
//     },
//     {
//       icon: icon_2,
//       title: "工作100%准确",
//       subTile: "避免常见人为错误，安全无误，审计无忧",
//     },
//     {
//       icon: icon_3,
//       title: "非侵入式集成",
//       subTile: "非侵入式的跨系统连接，形成高效可靠的数据“中台”。",
//     },
//     {
//       icon: icon_4,
//       title: "丰富灵活的拓展",
//       subTile: "支持自定义SDK库，使用更轻松。",
//     },
//     {
//       icon: icon_5,
//       title: "释放劳动力",
//       subTile: "解放人员做重复工作，节约人力，缩短周期，提升服务品质",
//     },
//     {
//       icon: icon_6,
//       title: "售后支持",
//       subTile: "一流的本地化支持，灵活高效地为客户提供定制化方案。",
//     },
//   ]
//   return (
//     <>
//       {data.map(item => {
//         return (
//           <li className="text-center value-item flex_1">
//             <img style={{ marginBottom: "1em" }} src={item.icon} />
//             <h5 className="page-text sub-title">{item.title}</h5>
//             <p className="page-des-text">{item.subTile}</p>
//           </li>
//         )
//       })}
//     </>
//   )
// }

const Home = i18data => {
  const data = [
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
  return (
    <div className="home_container">
      <div class="full-height page-1 flex flex_column justify-center">
        <div>
          <img height="46" src={homeText} />
        </div>
        <p className="page-text" style={{ width: "40%" }}>
          帮助用户连接不同的系统和服务，处理重复有规律的劳动，实现工作流程自动化，更专注提高工作效率，让企业“事半功倍”并且已经完成在保险、金融、医疗保健等领域的场景深耕，联合合作伙伴具备深度定制化能力和稳定交付能力，积累了丰富的行业可行性解决方案。
        </p>
        <div>
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
          {data.map(item => {
            return (
              <li className="text-center value-item">
                <img style={{ marginBottom: "1em" }} src={item.icon} />
                <h5 className="page-text sub-title">{item.title}</h5>
                <p className="page-des-text">{item.subTile}</p>
              </li>
            )
          })}
        </ul>
        {/* <ul className="flex flex_around">
          <li className="text-center value-item flex_1">
            <img style={{ marginBottom: "1em" }} src={icon_4} />
            <h5 className="page-text sub-title">丰富灵活的拓展</h5>
            <p className="page-des-text">支持自定义SDK库，使用更轻松。</p>
          </li>
          <li className="text-center value-item flex_1">
            <img style={{ marginBottom: "1em" }} src={icon_5} />
            <h5 className="page-text sub-title">释放劳动力</h5>
            <p className="page-des-text">
              解放人员做重复工作，节约人力，缩短周期，提升服务品质
            </p>
          </li>
          <li className="text-center value-item flex_1">
            <img style={{ marginBottom: "1em" }} src={icon_6} />
            <h5 className="page-text sub-title">售后支持</h5>
            <p className="page-des-text">
              一流的本地化支持，灵活高效地为客户提供定制化方案。
            </p>
          </li>
        </ul> */}
      </div>
    </div>
  )
}

export default Home
