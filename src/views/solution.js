import * as React from "react"
import Layout from "../components/layout"
import "../style/solution.scss"
import bank from "../images/solution/bank.svg"
import bankActive from "../images/solution/bank_active.svg"
import medical from "../images/solution/medical.svg"
import medicalActive from "../images/solution/medical_active.svg"
import education from "../images/solution/education.svg"
import educationActive from "../images/solution/education_active.svg"
import finance from "../images/solution/finance.svg"
import financeActive from "../images/solution/finance_active.svg"
import retail from "../images/solution/retail.svg"
import retailActive from "../images/solution/retail_active.svg"
import logistics from "../images/solution/logistics.svg"
import logisticsActive from "../images/solution/logistics_active.svg"
import Insurance from "../images/solution/Insurance.svg"
import InsuranceActive from "../images/solution/Insurance_active.svg"
import realestate from "../images/solution/realestate.svg"
import realestateActive from "../images/solution/realestate_active.svg"
import appa from "../images/solution/a.png"
import appb from "../images/solution/b.png"
import appc from "../images/solution/c.png"
import appd from "../images/solution/d.png"
import appe from "../images/solution/e.png"
import appf from "../images/solution/f.png"
import kehuanli from "../images/solution/kehuanli.png"
import fuwu_1 from "../images/solution/fuwu_1.svg"
import fuwu_2 from "../images/solution/fuwu_2.svg"
import fuwu_3 from "../images/solution/fuwu_3.svg"
import fuwu_4 from "../images/solution/fuwu_4.svg"
import fuwu_5 from "../images/solution/fuwu_5.svg"

const Solution = ({ pageContext: { locale } }) => {
  const solutionList = [
    {
      title: "银行",
      img: bank,
      activeImg: bankActive,
      data: {
        title: "银行RPA解决方案",
        desc:
          "RPA 可快速自动化银行应用之间的数据验证和迁移，以及自动化客户帐户管理、报告、表单填写和财务索赔处理。",
        details:
          "智能化转型已成为银行业的发展所趋，如何以AI技术提升用户体验、完成精准营销与转化并挖掘潜在商机，已成为行业重要课题。竹间不仅为银行客户提供全生命周期解决方案覆盖用户与银行全面的服务交互场景，并拥有帮助客户搭建统一的AI平台能力，支持客户自主AI创新。",
        labels: [
          "智能客服",
          "智能质检",
          "智能外呼",
          "智能还款",
          "智能查账",
          "智能分期",
          "中枢平台",
        ],
        painPoints: {
          title: "行业痛点",
          data: [
            {
              desc: "客户联络服务压力大，服务质量瓶颈，员工能力无法提升",
            },
            {
              desc: "获客成本高、客户运营能力缺失，销售漏斗转化率无法提升",
            },
            {
              desc: "传统模式数据处理效率低，后续分析整合及知识沉淀能力差",
            },
            {
              desc: "业务风险因素众多，风控手段单一，风控体系不完善",
            },
            {
              desc: "互联网银行、持牌消金等新兴势力增长对传统银行业务产生影响",
            },
          ],
        },
        appSense: {
          title: "应用场景",
          data: [
            {
              title: "信息安全事项督办",
              subtitle: "每天免去6次登陆，每天节约30分钟",
              img: appa,
              desc:
                "RPA机器人每日登录监督邮箱查收监管事项通知，并自动转发给办公室对口邮箱",
            },
            {
              title: "人行账户信息自动备案",
              subtitle: "每户资料录入耗时从10分钟降至2分钟",
              img: appb,
              desc:
                "使用RPA机器人实现将公开资料录入到人行账户管理系统中进行报备，并将打印成PDF的对公开户资料和查询密码回复给申请柜员",
            },
            {
              title: "证券代码导入",
              subtitle: "避免跨系统手工操作，每次节省150分钟",
              img: appc,
              desc:
                "使用RPA机器人完成从委外证券估值表的证券简称到证券风险预警系统中债券代码的录入，以便委外部证券监控并定向发送预警",
            },
            {
              title: "信用卡委外催收前冻结流程",
              subtitle: "读取委外冻结账号表；登陆信用卡催收系统；",
              img: appd,
              desc:
                "逐一查询账号；执行冻结操作；将委外冻结结果记录到结果表；重复以上部分操作直至全部账号操作完成；通过邮件将结果表发送给指定负责人。",
            },
            {
              title: "开销户影像数据自动导入",
              subtitle: "",
              img: appe,
              desc:
                "RPA机器人将业务人员提供的影像数据进行打包，之后自动登录到人行系统，完成影像数据包的导入。",
            },
            {
              title: "企业名单信息更新",
              subtitle: "",
              img: appf,
              desc:
                "使用RPA机器人代替人工从行内不同网页上分别下载新批次的高新技术企业、科技型中小企业、民营科技企业、高新培育企业的名单，并对比总表进行企业名单的更新和批次的记录，之后利用行外网站查出新企业的注册地并记录。",
            },
          ],
        },
        serviceAdvantage: {
          title: "服务优势",
          data: [
            {
              data: "支持PC端的机器人和移动端（Android和iOS）机器人",
              icon: fuwu_1,
            },
            {
              data:
                "基于对象识别的操作，而不是基于鼠标键盘的组合操作，提升了速度和准确度",
              icon: fuwu_2,
            },
            {
              data:
                "支持更广泛的应用系统，除了chrome、firefox，还支持ie11，ie10，ie8，java swt/swing，win32，delphi，.net，office等各种技术架构的系统",
              icon: fuwu_3,
            },
            {
              data: "支持运行在linux环境下，支持chrome、QT等应用架构",
              icon: fuwu_4,
            },
            {
              data: "支持预约执行、周期执行、单次执行",
              icon: fuwu_5,
            },
          ],
        },
        customerCase: {
          title: "客户案例",
          img: kehuanli,
          caseName: "奥康",
          caseDesc:
            "赤兔智能为电商服务平台奥康鞋业打造全新的智能客服助手，通过提供FAQ+多轮对话技术+VR语音服务，降低人工转接率，提升自助服务占比。大大减轻人工客服和运维的压力，实现更丰富的智能服务场景，不断提升企业的服务效率。",
        },
      },
    },
    {
      title: "医疗",
      img: medical,
      activeImg: medicalActive,
    },
    {
      title: "教育业",
      img: education,
      activeImg: educationActive,
    },
    {
      title: "金融业",
      img: finance,
      activeImg: financeActive,
    },
    {
      title: "零售业",
      img: retail,
      activeImg: retailActive,
    },
    {
      title: "物流业",
      img: logistics,
      activeImg: logisticsActive,
    },
    {
      title: "保险业",
      img: Insurance,
      activeImg: InsuranceActive,
    },
    {
      title: "房地产",
      img: realestate,
      activeImg: realestateActive,
    },
  ]
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [currentData, setCurrentData] = React.useState(solutionList[0].data)
  // let currentData = solutionList[currentIndex]
  console.log(currentData, "currentData")
  const toggleIndex = index => {
    setCurrentIndex(index)
    setCurrentData(solutionList[index].data)
  }
  return (
    <Layout id="solution" locale={locale}>
      <div className="Solution-container">
        <div className="part-1 part-1-main bg_container flex flex_center flex_column  full-height">
          <div className="bg_container solution-info"></div>
          <span className="rpa-btn">申请试用</span>
          <div className="solution-top-desc">
            成熟专业的智能处理解决方案
            多种行业解决方案，助力企业快速实现智能化升级
            行业洞察，迈入新商业时代 以AI颠覆传统商业认知，高效、精准、低运维
          </div>
        </div>
        <div className="solution-main">
          <div className="tab-list flex">
            {solutionList.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => toggleIndex(index + 1)}
                  className={[
                    "tab-item flex_1 flex flex_column flex_center",
                    currentIndex == index ? "active" : null,
                  ].join(" ")}
                >
                  <img
                    src={currentIndex == index ? item.activeImg : item.img}
                  />
                  <span>{item.title}</span>
                </div>
              )
            })}
          </div>
          <div className="solution-details">
            <div className="bg_container flex flex_center solution-details-top">
              <div className="flex flex_center flex_column">
                <h5 className="details-top-title">银行RPA解决方案</h5>
                <p>
                  RPA
                  可快速自动化银行应用之间的数据验证和迁移，以及自动化客户帐户管理、报告、表单填写和财务索赔处理。
                </p>
              </div>
            </div>
            <div className="solution-details-desc">{currentData.details}</div>
            <div className="solution-labels">
              {currentData.labels.map((item, index) => {
                if (index == currentData.labels.length - 1) {
                  return <span>{item}</span>
                } else {
                  return (
                    <>
                      <span>{item}</span>
                      <span>|</span>
                    </>
                  )
                }
              })}
            </div>
            <div className="solution-painPoints">
              <h5 className="module-title">
                <span className="block"></span>
                <span>{currentData.painPoints.title}</span>
              </h5>
              <div className="module-content flex flex_wrap">
                {currentData.painPoints.data.map((item, index) => {
                  return (
                    <div className="module-item">
                      <p>{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="solution-appSense">
              <h5 className="module-title">
                <span className="block"></span>
                <span>{currentData.appSense.title}</span>
              </h5>
              <div className="module-content flex flex_wrap flex_between">
                {currentData.appSense.data.map((item, index) => {
                  return (
                    <div className="module-item">
                      <img src={item.img} />
                      <h5>{item.title}</h5>
                      <p>{item.subtitle}</p>
                      <p>{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="solution-serviceAdvantage">
              <h5 className="module-title">
                <span className="block"></span>
                <span>{currentData.serviceAdvantage.title}</span>
              </h5>
              <div className="module-content flex flex_wrap flex_between">
                {currentData.serviceAdvantage.data.map((item, index) => {
                  return (
                    <div className="module-item flex">
                      <img width="20" src={item.icon} />
                      <p>{item.data}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="solution-customerCase">
              <h5 className="module-title">
                <span className="block"></span>
                <span>{currentData.customerCase.title}</span>
              </h5>
              <div className="module-content">
                <img src={currentData.customerCase.img} />
                <div className="solution-customerCase-desc">
                  <h5>{currentData.customerCase.caseName}</h5>
                  {currentData.customerCase.caseDesc}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_container product-information flex flex_column flex_center">
          <p>
            产品资讯，寻求RPA帮助 都可以联系我们，开启赤兔RPA之旅，解放你的双手
          </p>
          <div className="btn-group">
            <span className="rpa-btn">申请试用</span>
            <span className="rpa-btn" type="default">
              联系我们
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Solution
