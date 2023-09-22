import Hero from "../components/home/HeroSection";
import Layout from "../components/layout/layout";
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React, { useEffect } from 'react';
import 'animate.css';
import AnimatedSection from "../components/Animation/AnimatedSection";

function smoothScrollTo(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      behavior: 'smooth',
      top: targetElement.offsetTop,
    });
  }
}

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        smoothScrollTo(targetId);
      });
    });
  }, []);
  return (
    <>
      <Layout>
        <Hero />
        <div className={styles.section}>
          <p className={styles.content}>As a prominent player in the PCB manufacturing industry, AmpereCraft has proudly established itself as the premier privately-owned PCB manufacturer in US. Our comprehensive range of PCB products and services spans the entire spectrum, encompassing rapid-turnaround prototypes to large-scale production, all provided under a single manufacturing roof.</p>


          <div id="aboutsection" className={styles.container}>
            <div className={styles.text}>
              <h2>About Us</h2>
              <AnimatedSection animationClass="animate__fadeInLeft">
                <p className={`${styles.aboutcontent}`}>AmpereCraft, where innovation meets precision in PCB manufacturing. With a legacy of excellence and a commitment to cutting-edge technology, we specialize in delivering top-quality printed circuit boards that power the world’s most groundbreaking technologies. From concept to creation, we’re your trusted partner in turning ideas into reality. Join us on a journey of limitless possibilities and experience the future of connectivity</p>
                <Link href="/about">
                  <div className={styles.hoverButton}>About Us</div>
                </Link>
              </AnimatedSection>
            </div>

            <div className={`${styles.image}`}>
              <AnimatedSection animationClass="animate__fadeInRight">
               {/* image is coming from css  */}
              </AnimatedSection>
            </div>

          </div>


          <div id='servicessection' className={styles.container}>
            <div className={styles.imageservices}>
              {/* image is coming from css  */}
            </div>
            <div className={styles.text}>
              <h2>Our Services</h2>
              <AnimatedSection animationClass="animate__fadeInRight">
              <p className={styles.aboutcontent}>At AmpereCraft, we are your trusted partner in PCB excellence. With a commitment to precision, we seamlessly combine cutting-edge manufacturing and expert assembly to deliver flawless electronic solutions. Whether you require rapid prototypes or large-scale production, our tailored services cater to all your PCB needs. </p>
              <Link href="/services">
                <div className={styles.hoverButton}>Our Services</div>
              </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
        
       
        <div id='contactsection' className={styles.contact}>
        <AnimatedSection animationClass="animate__zoomIn">
          <div className={styles.contactcontent}>
            <h1 className={styles.contacttitle}>
              <strong>Unlock your creative potential with amperecraft</strong></h1>
            <p className={styles.subtitle}>Get in touch today and let's turn your electronic dreams into reality.</p>
            <Link href="/contact">
              <div className={styles.contactButton}>Contact Us</div>
            </Link>
          </div>
          </AnimatedSection>
        </div>
       

      </Layout>


    </>
  );
}
