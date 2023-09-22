
import AnimatedSection from "../components/Animation/AnimatedSection";
import Layout from "../components/layout/layout";
import styles from '../styles/About.module.css';
import 'animate.css';
const About = () => {
    return (
        <>
            <Layout>
                {/* about hero */}

                <div className={styles.aboutpagehero}>
                    <div className={styles.maincontent}>
                        <h1 className={`animate__animated animate__fadeIn ${styles.aboutTitle}`}>
                            About Us</h1>
                    </div>
                </div>

                <div className={styles.section}>

                    <div className={styles.container}>

                        <div className={styles.text}>
                            <h2>Who We Are?</h2>
                            <AnimatedSection animationClass="animate__fadeInLeft">
                                <p className={styles.content}>Uncover the essence of AmpereCraft a trusted name in industry. Our story is one of innovation, expertise, and unwavering commitment. With a dedicated team and a passion for excellence, we're here to provide you with cutting-edge solutions tailored to your needs.</p>
                            </AnimatedSection>
                        </div>

                        <div className={styles.image}>
                            {/* image from css */}
                        </div>
                    </div>


                    <div className={styles.container}>
                        <div className={styles.missionimage}>
                            {/* image from css */}
                        </div>
                        <div className={styles.text}>
                            <h2>Our Mission</h2>
                            <AnimatedSection animationClass="animate__fadeInRight">
                                <p className={styles.content}>   At AmpereCraft, our philosophy is built on the principles of Quality, Innovation, and Responsibility. These principles guide everything we do is Quality,Innovation and Responsibility.</p>
                            </AnimatedSection>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <AnimatedSection animationClass="animate__zoomIn">
                            <div className={styles.team}>
                                <h2>Our Team</h2>
                                <p className={styles.content}>  Our team of experts is the heart of AmpereCraft. With a passion for excellence and a deep understanding of PCB technology, our engineers and technicians work tirelessly to bring your ideas to life. Their dedication and expertise ensure that your projects are in capable hands.</p>
                            </div>
                        </AnimatedSection>
                    </div>




                </div>



            </Layout >
        </>
    );
};

export default About;
