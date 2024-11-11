'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




export default function Home() {
  return (
    <><main>
        {/* Global Styles for Professional Look */}
        <style jsx>{`
        body {
          font-family: 'Roboto', sans-serif;
          background: #f4f7fb;
          margin: 0;
          padding: 0;
          color: ;
        }
        
        .container {
          width: 90%;
          margin: 0 auto;
        }

        /* Hero Section */
        .hero {
          background: url('/images/logo.jpg') no-repeat center center/cover;
          color: #fff;
          padding: 120px 20px;
          text-align: center;
          border-bottom: 1px solid #ddd rounded;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin: 0;
        }

        .hero p {
          font-size: 1.5rem;
          margin: 10px 0;
        }

        .cta {
          background-color: #0070f3;
          color: white;
          padding: 12px 25px;
          text-decoration: none;
          font-size: 1.2rem;
          border-radius: 5px;
          display: inline-block;
          margin-top: 20px;
        }

        .cta:hover {
          background-color: #005bb5;
        }

        /* Skills Section */
        .skills {
          text-align: center;
          padding: 60px 0;
        }

        .skills h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
        }

       {
        .skills-icons {
        background:white;
          display: flex;
          justify-content: space-around;
          margin-bottom: 40px;
        }
      
        .skills-icons img {
          width: 50px;
          height: 50px;
        }
      }
        /* Portfolio Section */

        .portfolio {
       
          background-color: #fff;
          padding: 60px 0;
          
        }
        div {
    background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
}
        .portfolio h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
          
        }

        .project-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .project-card {
          background: #f4f4f4;
          border-radius: 10px;
          padding: 20px;
          margin: 10px;
          width: 45%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .project-card:hover {
          transform: translateY(-20px);
        }

        .project-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
        }

        .project-card h3 {
          font-size: 1.8rem;
          margin-top: 20px;
        }

        .project-card p {
          font-size: 1rem;
          color: #555;
        }

        .project-card a {
          color: #0070f3;
          text-decoration: none;
          margin-top: 10px;
          display: inline-block;
        }

        /* Contact Section */
        .contact {
          background-color: #f4f7fb;
          padding: 60px 20px;
          text-align: center;
          
          
        }

        .contact h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
        }

        .contact-form input, .contact-form textarea {
          width: 100%;
          padding: 15px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #ddd;
          font-size: 1rem;
        }
         

        .contact-form button {
          padding: 15px 30px;
          color: black;
          border: none;
          font-size: 1.2rem;
          border-radius: 5px;
          cursor: pointer;
        }
        .contact-form button:hover {
    background: linear-gradient(to bottom, #6699ff 0%, #ff99cc 100%);
    
        }

        /* Footer Section */
        .footer {
          background-color: #333;
          color: white;
          padding: 40px 20px;
          text-align: center;
        }

        .footer a {
          color: white;
          margin: 0 15px;
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }

       .icon-container {
    display: flex;
    justify-content: center;  /* Center horizontally */
    align-items: center;      /* Center vertically */
    gap: 20px;
  }
          
      `}</style>

        <div className="container"></div>
        {/* Hero Section */}
        <section className="hero">

          <img src='images/sw logo.jpg' alt="sw" className="w-20 h-20  rounded" />

          <h1>Syed Waqas Ahmed Shah </h1>
          <p>Full Stack Developer</p>
          <Link href="#portfolio" className="cta">View My Work</Link>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-icons">
            <Image src="/images/htmllogo.png" alt="HTML" width={70} height={70} />
            <Image src="/images/css.png" alt="CSS" width={70} height={100} />
            <Image src="/images/js.png" alt="JavaScript" width={70} height={70} />
            <Image src="/images/react.png" alt="React" width={70} height={70} />
            <Image src="/images/node.png" alt="Node.js" width={100} height={100} />
          </div>
        </section>

        {/* Portfolio Section */}

        <section className="portfolio" id="portfolio">
        <h2>Portfolio</h2>
        <div className="project-cards">
          <div className="project-card">
            <Image src="/images/personal blog.webp" alt="Project1" width={600} height={300} />
            <h3>Personal Blog</h3>
            <p>A responsive blog built with React and Node.js.</p>
            <Link href="/pages/project1">View Project</Link> {/* Link to /project1 */}
          </div>
          <div className="project-card">
            <Image src="/images/ecommerce.jpeg" alt="Project2" width={600} height={300} />
            <h3>E-Commerce Website</h3>
            <p>A full-stack e-commerce platform with payment gateway integration.</p>
            <Link href="/pages/project2">View Project</Link> {/* Link to /project2 */}
          </div>
        </div>
      </section>

        {/* Contact Section */}

        <section className="contact" id="contact">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

        </section>
        <div className="icon-container">
      <FaFacebook size={40} />
      <FaLinkedin size={40} />
      <FaGithub  size={40} />
      <FaSquareXTwitter  size={40} />
      
    </div>
      </main></>
        
  )
}