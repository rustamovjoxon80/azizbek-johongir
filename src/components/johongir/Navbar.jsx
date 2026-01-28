import "./Navbar.css"
import Rasm1 from "../../assets/rasm1.png"   

function Navbar(){
  return (
    <div className="Navbar">
        <div className="logo">
            <img src={Rasm1} alt="" />
        </div>  
        <div className="Text">
            <a href="">Главная</a>
            <a href="">ChatGPT</a>
            <a href="">Midjourney</a>
            <a href="">Отзывы</a>
            <a href="">Тарифы</a>
            <a href="">API</a>
            <a href="">Вопросы</a>
            <a href="">Блог</a>
        </div>
        <div className="button">
        <button>Авторизация</button>
        </div>
    </div>
  )
}

export default Navbar