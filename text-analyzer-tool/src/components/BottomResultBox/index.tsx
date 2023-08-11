import './index.scss'
import { BottomResultBoxType } from "../../types";

const BottomResultBox = ({ bottomResultBar }: BottomResultBoxType) => {

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
