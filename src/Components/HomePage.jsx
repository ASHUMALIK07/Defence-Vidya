import React from 'react'
import Navbar from './Navbar'
import "../css/HomePage.css"
import homeArmyVideo from "../Videos/Home Army.mp4"
import LearningPlatform from './LearningPlatform'
import WhyUs from './WhyUs'
import StudyMaterial from './StudyMaterial'
import Acheivements from './Acheivements'
import LectureSection from './LectureSection'
import CourseSection from './CourseSection'
import TestimonialSection from './TestimonialSection'
import Footer from './Footer'
import brochure1 from "../Images/clientImage.jpg"
import brochure2 from "../Images/StudyBg.jpg"
import brochure3 from "../Images/defenceBg.jpg"
import clientImage from "../Images/clientImage.jpg"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import InquirySection from './InquirySection'
import FacultySection from "./FacultySection"
export default function HomePage() {

  return (
    <>
         <Helmet>
            <meta charset="UTF-8"/>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
            <meta name="robots" content="index, follow"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title> Defence Vidya | Home Page</title>
            <meta
              name="description"
              content="Your Organization provides online education for NDA and CDS exams. Prepare for the exams with our comprehensive courses and expert instructors."
            />
            <link rel="icon" href="../Images/blacklogo.png" type="image/x-icon"/>
          </Helmet>
        <div className="home-header">
            <video src={homeArmyVideo} autoPlay loop muted></video>
            <div className="home-header-text">
                <p>Welcome To</p>
                <h1>Defence Vidya</h1>
                <p>One of the highly prestigious and highly affordable online platform to prepare for all defence exam</p>
            </div>
        </div>
        <LearningPlatform/>
        <WhyUs/>
        <Acheivements/>
        <StudyMaterial/>
        <CourseSection/>
        <FacultySection/>
        <div className="army-background"></div>
        <LectureSection/>
        <InquirySection/>
        <div className="brochure-section">
          <div className="brochure-card">
            <img src={brochure1} alt="" />
            <h4>NDA</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <Link to={"nda-course"} className="btn-a-solid">More Details</Link>
            <a href="#" className="btn-a-outline">Download Brochure</a>
          </div>
          <div className="brochure-card">
          <img src={brochure2} alt="" />
            <h4>CDS</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <Link to={"cds-course"} className="btn-a-solid">More Details</Link>
            <a href="#" className="btn-a-outline">Download Brochure</a>
          </div>
          <div className="brochure-card">
          <img src={brochure2} alt="" />
            <h4>CDS OTA</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <Link to={"cds-course"} className="btn-a-solid">More Details</Link>
            <a href="#" className="btn-a-outline">Download Brochure</a>
          </div>
          <div className="brochure-card">
          <img src={brochure3} alt="" />
            <h4>AFCAT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <Link to={"afcat-course"} className="btn-a-solid">More Details</Link>
            <a href="#" className="btn-a-outline">Download Brochure</a>
          </div>
        </div>
        <div className="client-change-image-section">
          <img src={clientImage} alt="" />
        </div>
        <TestimonialSection/>
        <div className="home-faq-section">
          <h3>FAQ's</h3>
          <details className="faq-question-box">
                <summary className="faq-question">Will defence vidya be live or recorded?</summary>
                <p className="faq-answer">Each subject will have live classses (If students miss one, they can watch recorded lectures)</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">Is the course fee paid monthly or anually?</summary>
                <p className="faq-answer">The course fee is paid yearly in one lump sum.</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">Can I sudy defence exam online?</summary>
                <p className="faq-answer">Online defence exam classes provide the flexibility to use commuting and waiting time for learning from the videos.</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">How should I pay?</summary>
                <p className="faq-answer">The defence vidya website homepage has a section that showing the payment process</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">What time will the course be over?</summary>
                <p className="faq-answer">Depend your course validity</p>
            </details>
        </div>
    </>
  )
}
