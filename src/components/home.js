import * as React from "react"
import "../style/home.css"
import homeText from "../images/home/home-text.png"

const Home = i18data => {
  return (
    <div className="home_container">
      <div class="page-1 flex flex_column justify-center">
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
    </div>
  )
}

export default Home
