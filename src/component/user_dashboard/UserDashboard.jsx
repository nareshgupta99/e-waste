import React, { useEffect, useLayoutEffect } from 'react'
import './user_style.css'
import user from '../../resource/usershakal.jpg';
import locked_card from '../../resource/locked-card.jpg';

function UserDashboard() {

    window.addEventListener('load',(event)=>{
        var faq = document.getElementsByClassName("faq-page");
        var i;
        for (i = 0; i < faq.length; i++) {
            faq[i].addEventListener("click", function () {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");
                /* Toggle between hiding and showing the active panel */
                var body = this.nextElementSibling;
                if (body.style.display === "block") {
                    body.style.display = "none";
                } else {
                    body.style.display = "block";
                }
            });
        }
        console.log(faq)
    })

  return (
    <main id="boxes">
    <div id="column1">
        <div id="circle">
            <img src={user} />
        </div>
        <div>
          <h2>Name</h2>
        </div>
        <div>
          <h2>E-Mail ID</h2>
        </div>
    </div>
    <div id="column2">
        <h1 id="main-heading">Welcome to your Dashboard!</h1>
        <section className="faq-container">
            <div className="faq-one">
                {/* <!-- faq question --> */}
                <h1 className="faq-page">Your earning</h1>
                {/* <!-- faq answer --> */}
                <div className="faq-body">
                    <div><img src={locked_card} />
                        <img src={locked_card} /></div>
                </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-two">
                {/* <!-- faq question --> */}
                <h1 className="faq-page">Recycling History</h1>
                {/* <!-- faq answer --> */}
                <div className="faq-body">
                    <table border="1">
                        <tr>
                            <th>Date</th>
                            <th>Recycler</th>
                            <th>Devices</th>
                            <th>Pickup/Drop Status</th>
                        </tr>
                        <tr>
                            <td>2023-09-22</td>
                            <td>ABC Recycling</td>
                            <td>5 laptops</td>
                            <td>Scheduled</td>
                        </tr>
                        <tr>
                            <td>2023-09-23</td>
                            <td>XYZ Recycling</td>
                            <td>10 smartphones</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>2023-09-24</td>
                            <td>GreenTech Recycle</td>
                            <td>3 desktops</td>
                            <td>In Progress</td>
                        </tr>
                        <tr>
                            <td>2023-09-25</td>
                            <td>EcoRecycle Inc.</td>
                            <td>7 tablets</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>2023-09-26</td>
                            <td>RenewTech</td>
                            <td>2 printers</td>
                            <td>Not Scheduled</td>
                        </tr>
                    </table>                
                      
                </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-three">
                {/* <!-- faq question --> */}
                <h1 className="faq-page">Reward Status</h1>
                {/* <!-- faq answer --> */}
                <div className="faq-body">
                    <div><img src={locked_card} />
                        <img src={locked_card} /></div>
                </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-three">
              {/* <!-- faq question --> */}
            <h1 className="faq-page">Your Reviews</h1>
              {/* <!-- faq answer --> */}
              <div className="faq-body">
                  <div className="feedback-container">
                    <div className="name">ABC Recycler</div>
                    <div className="rating">&#9733 &#9733 &#9733 &#9733 </div>
                    <div className="date">14 Aug 2023</div>
                    <div className="content">Feedback Here!Lorem ipsum dolor sit amet consectetur adipisicing elit. VoluptatLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptat
                    </div>
                  </div>
                  <div className="feedback-container">
                    <div className="name">ABC Recycler</div>
                    <div className="rating">&#9733 &#9733 &#9733 &#9733 </div>
                    <div className="date">14 Aug 2023</div>
                    <div className="content">Feedback Here!Lorem ipsum dolor sit amet consectetur adipisicing elit. VoluptatLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptat
                    </div>
                  </div>
                  <div className="feedback-container">
                    <div className="name">ABC Recycler</div>
                    <div className="rating">&#9733 &#9733 &#9733 &#9733 </div>
                    <div className="date">14 Aug 2023</div>
                    <div className="content">Feedback Here!Lorem ipsum dolor sit amet consectetur adipisicing elit. VoluptatLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptat
                    </div>
                  </div>
              </div>
          </div>
          </section>

         </div>
    </main>
  
  )
}

export default UserDashboard;