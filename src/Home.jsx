import logo from './img/logo.png';
import pic1 from './img/1.png';
import pic2 from './img/2.png';
import pic3 from './img/3.png';
import pic4 from './img/4.png';
import pic5 from './img/5.png';
import pic6 from './img/6.png';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './Login';
import './App.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function Home() {    
    return (
    <div className="App">
          <header className="header-vertical">
              <div className="logo">
                  <img src={logo} alt="NPCETC" />
              </div>
              <div className="pagenote">Vui lòng truy cập để đăng ký suất ăn</div>
                <div className="mybutton" onClick={() => {
                    const root = ReactDOM.createRoot(document.getElementById('root'));                    
                    root.render(
                        <React.StrictMode>
                            <Login />
                        </React.StrictMode>
                    );
                }}>Đăng nhập</div>
          </header>
          <div className="site">
              <div className="meal-info">
                  <div className="meal-title">THỰC ĐƠN HÔM NAY</div>
                  <div className="meal-note">Đăng ký suất ăn trước</div>
                  <div id="timeexp" className="meal-note">10:00</div>
                  <div className="meal-detail">
                      <div className="food">
                          <div className="foodimg">
                              <img src={pic1}/>
                          </div>
                          <div className="fooddetail">Món ăn 1</div>
                      </div>
                      <div className="food">
                          <div className="foodimg">
                              <img src={pic2} />
                          </div>
                          <div className="fooddetail">Món ăn 2</div>
                      </div>
                      <div className="food">
                          <div className="foodimg">
                              <img src={pic3} />
                          </div>
                          <div className="fooddetail">Món ăn 3</div>
                      </div>
                      <div className="food">
                          <div className="foodimg">
                              <img src={pic4} />
                          </div>
                          <div className="fooddetail">Món ăn 4</div>
                      </div>
                      <div className="food">
                          <div className="foodimg">
                              <img src={pic5} />
                          </div>
                          <div className="fooddetail">Món ăn 5</div>
                      </div>
                      <div className="food">
                          <div className="foodimg">
                              <img src={pic6} />
                          </div>
                          <div className="fooddetail">Món ăn 6</div>
                      </div>
                  </div>
              </div>
          </div>
          <footer>
          </footer>
    </div>
  );
}

export default Home;
