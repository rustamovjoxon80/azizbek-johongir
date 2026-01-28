import "./Section2.css"
import ru from "../../assets/ru.png"
import so from "../../assets/so.png"
import pro from "../../assets/pro.png"
import plas from "../../assets/plas.png"



function Section2() {
  return (
    <div className="t">
      <h4>Как работает Chad?</h4>
      <div className="section2-container">
        <div className="section2-card">
          <img src={ru} alt="" />
          <p>Поддерживает русский язык <br /> и интерфейс</p>
        </div>
        <div className="section2-card">
          <img src={so} alt="" />
          <p>Быстрые ответы без <br /> очереди <br />
            и остановок на час</p>

        </div>
        <div className="section2-card">
          <img src={pro} alt="" />
          <p>Доступ без VPN</p>
        </div>
        <div className="section2-card">
          <img src={plas} alt="" />
          <p>Не нужен номер <br /> телефона <br />
            и иностранная карта</p>
        </div>
      </div>
    </div>
  )
}














export default Section2