import logo from './img/logo.png';
import pic1 from './img/1.png';
import pic2 from './img/2.png';
import pic3 from './img/3.png';
import pic4 from './img/4.png';
import pic5 from './img/5.png';
import pic6 from './img/6.png';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function User() {
  return (
    <div className="User">
          <header className="header-horizon">
              <div className="logo">
                  <img src={logo} alt="NPCETC" />
              </div>              
              <div className="mybutton" onClick={() => {
                  var regguest = document.getElementById("reg-guest");
                  if (regguest.style.display == "none") { regguest.style.display = "flex"; }
                  else { regguest.style.display = "none"; }
              }}>
                  Đăng ký cho khách
              </div>
              <div className="rice" onClick={() => {
                  var regnoti = document.getElementById("unreg-noti");
                  if (regnoti.style.display == "none") { regnoti.style.display = "flex"; }
                  else { regnoti.style.display = "none"; }
              }}>           
                  <svg width="41" height="45" viewBox="0 0 41 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.7533 23.5122L20.9479 23.5122H2.17207C2.03886 23.5122 1.92981 23.6153 1.92754 23.7485C1.88871 26.0261 2.17701 44 20.9483 44C39.7191 44 40.0334 26.0276 39.9979 23.7488C39.9958 23.6155 39.8867 23.5122 39.7533 23.5122Z" stroke="#3C3CB0" stroke-width="2" stroke-linecap="round" />
                      <path d="M3.15796 29.6585L39.2115 29.6585" stroke="#3C3CB0" stroke-width="2" stroke-linecap="round" />
                      <path d="M2.93726 23.5122C6.4803 17.6506 10.3601 9.17072 20.964 9.17072C31.568 9.17072 35.4478 17.6506 38.9908 23.5122" stroke="#3C3CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20.9641 19.9268C20.1344 19.9268 19.4618 19.4682 19.4618 18.9024C19.4618 18.3367 20.1344 17.8781 20.9641 17.8781C21.7937 17.8781 22.4663 18.3367 22.4663 18.9024C22.4663 19.4682 21.7937 19.9268 20.9641 19.9268Z" fill="#3C3CB0" />
                      <path d="M24.469 16.3415C25.2987 16.3415 25.9713 15.6535 25.9713 14.8049C25.9713 13.9563 25.2987 13.2683 24.469 13.2683C23.6394 13.2683 22.9668 13.9563 22.9668 14.8049C22.9668 15.6535 23.6394 16.3415 24.469 16.3415Z" fill="#3C3CB0" />
                      <path d="M17.4587 16.3415C16.629 16.3415 15.9565 15.6535 15.9565 14.8049C15.9565 13.9563 16.629 13.2683 17.4587 13.2683C18.2884 13.2683 18.9609 13.9563 18.9609 14.8049C18.9609 15.6535 18.2884 16.3415 17.4587 16.3415Z" fill="#3C3CB0" />
                      <path d="M30.4781 18.3902C31.3077 18.3902 31.9803 17.7023 31.9803 16.8537C31.9803 16.005 31.3077 15.3171 30.4781 15.3171C29.6484 15.3171 28.9758 16.005 28.9758 16.8537C28.9758 17.7023 29.6484 18.3902 30.4781 18.3902Z" fill="#3C3CB0" />
                      <path d="M11.4497 18.3902C10.62 18.3902 9.94744 17.7023 9.94744 16.8537C9.94744 16.005 10.62 15.3171 11.4497 15.3171C12.2793 15.3171 12.9519 16.005 12.9519 16.8537C12.9519 17.7023 12.2793 18.3902 11.4497 18.3902Z" fill="#3C3CB0" />
                      <path d="M25.9713 9.68292L32.9817 1.99999" stroke="#3C3CB0" stroke-width="2" stroke-linecap="round" />
                      <path d="M31.4795 12.2439L39.4914 3.0244" stroke="#3C3CB0" stroke-width="2" stroke-linecap="round" />
                  </svg>
                  <div className="count">1</div>
              </div>
              <div className="bell">
                  <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 42C21.9959 42 24.426 39.6498 24.426 36.75H13.574C13.574 39.6498 16.0041 42 19 42ZM37.2696 29.7191C35.6309 28.0161 32.5646 25.4543 32.5646 17.0625C32.5646 10.6887 27.9435 5.58633 21.7126 4.33453V2.625C21.7126 1.17551 20.4979 0 19 0C17.5021 0 16.2874 1.17551 16.2874 2.625V4.33453C10.0565 5.58633 5.4354 10.6887 5.4354 17.0625C5.4354 25.4543 2.36911 28.0161 0.730369 29.7191C0.221442 30.2482 -0.00418241 30.8807 5.86444e-05 31.5C0.00938897 32.8453 1.10104 34.125 2.72282 34.125H35.2772C36.899 34.125 37.9915 32.8453 37.9999 31.5C38.0042 30.8807 37.7786 30.2474 37.2696 29.7191Z" fill="#99B1D6" />
                  </svg>
                  <div className="count">1</div>
              </div>
              <div className="personal">
                  <div className="personal-img">
                  </div>
                  <div className="personal-info">
                      <div className="personal-name">Vũ Hùng Cường</div>
                      <div className="personal-description">Kỹ sư - Phòng CNTT</div>
                  </div>
              </div>
              <div className="logout">
                  <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.5848 13.6059L19.5843 24.5416C18.6914 25.518 17.1437 24.8345 17.1437 23.435V17.186H9.04807C8.25636 17.186 7.61943 16.4895 7.61943 15.6238V9.37483C7.61943 8.50909 8.25636 7.81259 9.04807 7.81259H17.1437V1.56362C17.1437 0.170627 18.6854 -0.519362 19.5843 0.457038L29.5848 11.3927C30.1384 12.0046 30.1384 12.994 29.5848 13.6059ZM11.4291 24.2161V21.6124C11.4291 21.1828 11.1077 20.8313 10.7148 20.8313H5.71457C4.66095 20.8313 3.80971 19.9004 3.80971 18.7483V6.25035C3.80971 5.09819 4.66095 4.16736 5.71457 4.16736H10.7148C11.1077 4.16736 11.4291 3.81585 11.4291 3.38624V0.782505C11.4291 0.352889 11.1077 0.00138444 10.7148 0.00138444H5.71457C2.55965 0.00138444 0 2.8004 0 6.25035V18.7483C0 22.1982 2.55965 24.9972 5.71457 24.9972H10.7148C11.1077 24.9972 11.4291 24.6457 11.4291 24.2161Z" fill="#9B9B9B" />
                  </svg>
              </div>
          </header>
          <div className="site">
              <div className="meal-info">
                  <div className="meal-title">THỰC ĐƠN HÔM NAY</div>
                  <div className="meal-note">Đăng ký suất ăn trước</div>
                  <div id="timeexp">10:00</div>
                  <div id="reg-button" className="mybutton" onClick={() => {
                      var regconfirm = document.getElementById("reg-confirm");
                      var blackscreen = document.getElementById("blackscreen");
                      if (regconfirm.style.display == "none") {
                          regconfirm.style.display = "flex";
                          blackscreen.style.display = "flex";
                      }
                      else {
                          regconfirm.style.display = "none";
                          blackscreen.style.display = "none";                      }
                  } }>
                      Đăng ký suất ăn</div>
                  <div className="meal-detail">
                      <div className="food">
                          <div className="foodimg">
                              <img src={pic1} />
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
          <popup>
              <div id="blackscreen" onClick={() => {
                  var regconfirm = document.getElementById("reg-confirm");
                  var blackscreen = document.getElementById("blackscreen")
                  regconfirm.style.display = "none";
                  blackscreen.style.display = "none";             
              } }>
              </div>
              <div id="unreg-noti" className="unreg-notification">
                  <div id="unreg-message">Suất ăn vào thứ 3 20/09/2023</div>
                  <div id="unreg-button">Hủy đăng ký</div>
              </div>
              <div id="reg-confirm" className="reg-confirm">
                  <div id="reg-confirm-message">Đăng ký suất ăn vào thứ 3 20/09/2023</div>
                  <div id="reg-confirm-button">Gửi đăng ký</div>
              </div>              
              <div id="reg-guest" className="reg-guest">
                  <div id="reg-guest-message">Đăng ký suất ăn vào thứ 3 20/09/2023</div>
                  <div id="reg-guest-input">
                      <div id="reg-guest-label">Tổng số:</div>
                      <input id="reg-guest-number" type="number" />
                      <div id="reg-guest-unit">suất</div>
                      <div id="reg-guest-button">Đăng ký</div>
                  </div>
              </div>              
          </popup>
    </div>
  );
}

export default User;
