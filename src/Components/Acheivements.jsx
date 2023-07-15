import React from 'react'
import "../css/Acheivements.css"
import acheivement1 from "../Images/acheivement1.png"
import acheivement2 from "../Images/acheivement2.png"
import acheivement3 from "../Images/acheivement3.png"
import acheivement4 from "../Images/acheivement4.png"
export default function Acheivements() {
  return (
    <div className='acheivements-section'>
        <div className="acheivements-section-top">
            <h3>Our <span>Acheivements</span></h3>
        </div>
        <div className="acheivements-section-bottom">
            <div className="acheivements-card">
                <img src={acheivement1} alt="acheivements-card-1" />
                <h4>2 Lakh+ Studetns</h4>
                <p>More than 2 lakhs students have used our paid course for their bright future journey</p>
            </div>
            <div className="acheivements-card">
                <img src={acheivement2} alt="acheivements-card-2" />
                <h4>Highest Selection Rate</h4>
                <p>We are ahead of our competitors in terms of highest selction rates</p>
            </div>
            <div className="acheivements-card">
                <img src={acheivement3} alt="acheivements-card-3" />
                <h4>4.7/5 Rating</h4>
                <p>Our Students have rated us of an average of 4.7/5</p>
            </div>
            <div className="acheivements-card">
                <img src={acheivement4} alt="acheivements-card-4" />
                <h4>Selection Rate</h4>
                <p>50+ Students selected in last 2 years</p>
            </div>
        </div>
    </div>
  )
}
