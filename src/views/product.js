import * as React from "react"
import Layout from "../components/layout"
import "../style/product.scss"
// import { StaticImage } from "gatsby-plugin-image"
import tu1 from "../images/product/tu_1.png"
import tu2 from "../images/product/tu_2.png"
import tu3 from "../images/product/tu_3.png"

const Product = ({ pageContext: { locale } }) => {
  const part1Data = [
    {
      title: "快速部署",
      data: "在多种情况下快速部署，并支持与多种系统进行交互，缩短开发周期",
    },
    {
      title: "提高生产率",
      data: "自动运行流程，减少流程操作时间，实现7x24对繁琐重复工作的准确执行",
    },
    {
      title: "零出错率",
      data: "可准确获取、填充信息，告别人为错误/失误，正确率可达100%",
    },
    {
      title: "信息安全",
      data: "保留任务系统日志/审计记录，为流程处理完成后的责任划分提供有效支持",
    },
  ]
  return (
    <Layout
    id="product"
    locale={locale}
  >
    <div className="product-container">
      <div className="part-1 bg_container flex flex_center full-height">
        <div className="part-1-main flex flex_column flex_center">
          <div className="bg_container product-info "></div>
          <div className="product-top-desc">
            赤兔RPA产品主要包含RPA编辑器、RPA控制台和
            RPA机器人三大模块，为机器人的生产、执行、分配、
            智能化提供相应的工具和平台。赤兔RPA机器人流程自
            动化（RPA）平台，开启企业数字化转型
          </div>
          <span className="rpa-btn">申请试用</span>
        </div>
        <div className="product-info-list flex">
          {part1Data.map((item, index) => {
            return (
              <div className="info-item flex_1" key={index}>
                <div className="info-label">{item.title}</div>
                <div className="info-data">{item.data}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="part-2 full-height flex">
        <div className="flex flex_1 flex_center">
          <img src={tu1} />
        </div>
        <div className="part-2-content flex_1 flex flex_column">
          <h5 className="part-title">赤兔RPA编辑器</h5>
          <p className="primary_color">直观全面的自动化开发平台</p>
          <p>
            赤兔RPA编辑器是开发自动化流程的可视化编辑器。它包含了丰富多样的扩展库，大大加快了流程建模和自动化的速度。
          </p>
          <p>
            使得设计人员可以通过自定义代码直接集成到自动化工作流程中，同时可以通过调试工具来测试流程和排查错误。
          </p>
          <p>
            赤兔RPA所编辑设计的流程可以被共享、复用给当前或者未来项目中的其他团队成员。
          </p>
        </div>
      </div>
      <div className="part-3 full-height bg_container flex">
        <div className="part-2-content flex_1 flex flex_column">
          <h5 className="part-title">赤兔RPA控制台</h5>
          <p className="primary_color">一站式监控你的数字化劳动力</p>
          <p>对所有的机器人及其工作进行统一管理，调度和监控。</p>
          <p>
            赤兔RPA控制台可以监测、记录和审计：
            配置和捕捉每个机器人和用户动作的细节。
          </p>
          <p>
            赤兔RPA控制台有完全可配置的洞察分析功能。随着机器人的运行记录每一个活动和结果，提供深刻的业务流程信息。
          </p>
        </div>
        <div className="flex flex_1 flex_center">
          <img src={tu2} />
        </div>
      </div>
      <div className="part-4 full-height flex">
        <div className="flex flex_1 flex_center">
          <img src={tu3} />
        </div>
        <div className="part-2-content flex_1 flex flex_column">
          <h5 className="part-title">赤兔RPA机器人</h5>
          <p className="primary_color">触手可及的人机交互终端</p>

          <p>
            赤兔RPA机器人可以对软件、桌面系统、网页等各类应用进行自动化操作。自动打开，执行和关闭本地或云应用程序，并在不同应用之间自动输入、提取、处理和传递数据。
          </p>
          <p>
            赤兔RPA机器人通过模拟人的操作，可以更快速和准确地来执行流程，即便数据和其他屏幕元素的位置变得与原来不同时，机器人也可通过自动调整视野来捕捉到变化并进行操作。
          </p>
        </div>
      </div>
      <div className="bg_container product-information flex flex_column flex_center">
        <p>
          产品资讯，寻求RPA帮助 都可以联系我们，开启赤兔RPA之旅，解放你的双手
        </p>
        <div className="btn-group">
          <span className="rpa-btn">
            申请试用
          </span>
          <span className="rpa-btn" type="default">
            联系我们
          </span>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Product
