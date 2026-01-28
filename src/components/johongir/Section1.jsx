import "./Section1.css";
import Rasm2 from "../../assets/rasm2.png";
function Section1() {
  return (
    <div className="Section">
      <div className="Amozon">
        <h1>ZlonGPT - нейросети <br /> онлайн бесплатно</h1>
        <p>Сервис ZionGPT разработан профессионалами, для профессионалов. <br />
          ChatGPT. Midjourney, и другие нейросети в одном сервисе на Русском языке, <br />
          без VPN с поддержкой Русских банковских карт!</p>
        <div className="buttone">
          <button>Начать бесплатно</button>
          <h4>Попробуй бесплатно!</h4>
        </div>
      </div>

      <div className="img">
        <img src={Rasm2} alt="Rasm2" />
      </div>
    </div>
  )
}










export default Section1
