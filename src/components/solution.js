import * as React from "react"
import "../style/solution.css"

const Solution = () => {
  return (
    <div className="Solution-container">
      <div className="part-1 bg_container flex flex_center flex_column  full-height">
        {/* <div className="part-1-main flex flex_column flex_center"> */}
        <div className="bg_container solution-info "></div>
        <span className="rpa-btn">申请试用</span>
        {/* </div> */}
        <div className="solution-top-desc">
          成熟专业的智能处理解决方案
          多种行业解决方案，助力企业快速实现智能化升级 行业洞察，迈入新商业时代
          以AI颠覆传统商业认知，高效、精准、低运维
        </div>
        {/* <div className="product-info-list flex"></div> */}
      </div>
    </div>
  )
}

export default Solution
