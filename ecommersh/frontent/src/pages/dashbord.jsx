import React from 'react';
import Navbar from '../componet/navbar'; // Ensure the file path is correct
import Sidnav from '../componet/sidnav'; // Ensure the file path is correct

function Dashbord() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar navigation */}
      <Sidnav />
      
      <div style={{ flex: 1 }}>
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Dashboard Content */}
        <div style={{ padding: '2rem' }}>
          <div className="men3">
            <div className="box5">
              <div className="box6">
                <i className="fa-brands fa-twitter fa-2xl" style={{ color: "#fdfcfc" }}></i>
              </div>
              <div className="box10">
                <p className="w">Followers</p>
                <h2>+245</h2>
              </div>
              <div className="box12"></div>
              <p className="mm">
                <i className="fa-regular fa-clock"></i>&nbsp;&nbsp;Just Updated
              </p>
            </div>
            <div className="box5">
              <div className="box7">
                <i className="fa-solid fa-chart-simple fa-2xl" style={{ color: "#fcfcfc" }}></i>
              </div>
              <div className="box10">
                <p className="w">Website Visits</p>
                <h2>75.521</h2>
              </div>
              <div className="box12"></div>
              <p className="mm">
                <i className="fa-solid fa-tag"></i>&nbsp;&nbsp; Tracked from Google Analytics
              </p>
            </div>
            <div className="box5">
              <div className="box8">
                <i className="fa-solid fa-house-chimney-window fa-2xl" style={{ color: "#ffffff" }}></i>
              </div>
              <div className="box10">
                <p className="w">Revenue</p>
                <h2>34,245</h2>
              </div>
              <div className="box12"></div>
              <p className="mm">
                <i className="fa-regular fa-calendar-minus"></i>&nbsp;&nbsp;Last 24 Hours
              </p>
            </div>
            <div className="box5">
              <div className="box9">
                <i className="fa-solid fa-couch fa-2xl" style={{ color: "#ffffff" }}></i>
              </div>
              <div className="box10">
                <p className="w">Bookings</p>
                <h2>184</h2>
              </div>
              <div className="box12"></div>
              <p className="mm1">
                <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp; Get More Space...
              </p>
            </div>
          </div>

          <div className="men10">
          <div className="box31">
          <div className="a1">
            <p className="r1">Employees Stats</p>
            <p className="r2">New employees on 15th September, 2016</p>
          </div>
          <div className="a2">
            <p>ID</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
          <div className="a3">
            <p className="r3">NAME</p>
            <p className="r3">
              Dakota
              <br /> Rice
            </p>
            <p className="r3">
              Minerva
              <br /> Hooper
            </p>
            <p className="r3">
              Sage
              <br /> Rodriguez
            </p>
            <p className="r3">
              Philip
              <br /> Chanley
            </p>
            <p className="r3">
              Doris
              <br /> Greene
            </p>
          </div>
          <div className="a4">
            <p className="r4">Salary</p>
            <p className="r4">$35,738</p>
            <p className="r4">$23,738</p>
            <p className="r4">$56,142</p>
            <p className="r4">$38,735</p>
            <p className="r4">$63,542</p>
          </div>
          <div className="a5">
            <p className="r5">Country</p>
            <p className="r5">Niger</p>
            <p className="r5">Curaçao</p>
            <p className="r5">Netherlands</p>
            <p className="r5">
              Korea,
              <br /> South
            </p>
            <p className="r5">Malawi</p>
          </div>
          <div className="a6">
            <p className="r6">City</p>
            <p className="r6">
              Oud-
              <br />
              Tunrhout
            </p>
            <p className="r6">
              Sinaai-
              <br />
              Waas
            </p>
            <p className="r6">
              Overland
              <br /> Park
            </p>
            <p className="r6">Gloucester</p>
            <p className="r6">
              Feldkirchen
              <br /> in Kārnte
            </p>
          </div>
        </div>
        <div className="box32">
          <div className="b1">
            <div className="com">Tasks:</div>
            <div className="com1">
              <i className="fa-solid fa-gauge" style={{ color: "#ffffff" }}></i>&nbsp;&nbsp;&nbsp;BUGS
            </div>
            <div className="com2">
              <i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;&nbsp;WEBS&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div className="b2">
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
          </div>
          <div className="b3">
            <div className="b4">
              <p className="c1">Sign contract for "What are conference organizers afraid of?"</p>
            </div>
            <div className="b4">
              <p className="c2">Lines From Great Russian Literature? Or E-mails From My Boss?</p>
            </div>
            <div className="b4">
              <p className="c3">
                Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept
                through metro Detroit
              </p>
            </div>
            <div className="b4">
              <p className="c4">Create 4 Invisible User Experiences you Never Knew About</p>
            </div>
          </div>
          <div className="b5">
            <div className="b6">
              <i className="fa-solid fa-pen"></i>
              <br />
              <i className="fa-solid fa-xmark" style={{ color: "#eb0f51" }}></i>
            </div>
            <div className="b6">
              <i className="fa-solid fa-pen"></i>
              <br />
              <i className="fa-solid fa-xmark" style={{ color: "#eb0f51" }}></i>
            </div>
            <div className="b6">
              <i className="fa-solid fa-pen"></i>
              <br />
              <i className="fa-solid fa-xmark" style={{ color: "#eb0f51" }}></i>
            </div>
            <div className="b6">
              <i className="fa-solid fa-pen"></i>
              <br />
              <i className="fa-solid fa-xmark" style={{ color: "#eb0f51" }}></i>
            </div>
          </div>
        </div>
          </div>

          <div className="d2">
            <div className="moh">
              <a href="">CRATIVE TIM</a>
              <a href="">ABOUT US</a>
              <a href="">BLOG</a>
              <a href="">LICENSES</a>
            </div>
            <div className="moh1">
              <p className="p">
                © 2019, made with&nbsp;
                <i className="fa-solid fa-heart"></i>&nbsp; by Creative Tim for a better web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
