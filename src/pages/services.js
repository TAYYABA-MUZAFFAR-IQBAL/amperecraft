import AnimatedSection from "../components/Animation/AnimatedSection";
import Layout from "../components/layout/layout";
import styles from '../styles/Service.module.css'
import Link from 'next/link';
const Services = () => {
    return (
        <>
            <Layout>
                {/* services hero */}

                <div className={styles.servicepagehero}>
                    <div className={styles.maincontent}>
                        <h1 className={`animate__animated animate__fadeIn ${styles.serviceTitle}`}>
                            Our Services</h1>
                    </div>
                </div>

                <div className={styles.section}>
                    <p className={styles.content}>At AmpereCraft, we specialize in delivering top-notch PCB manufacturing and assembly solutions. With a focus on quality, innovation, and precision, our expert team is committed to bringing your electronic projects to life. Discover the AmpereCraft difference and let us power your innovations in the world of electronics.</p>

                </div>



                <section className={styles.servicescontainer}>

                    <div className={`${styles.leftService} ${styles.service}`}>
                        <AnimatedSection animationClass="animate__fadeInLeft">
                            {/* Service 1 content */}
                            <div className={styles.text}>
                                <h3>Custom PCB Manufacturing</h3>
                                <p className={styles.contenttext}>AmpereCraft is specializes in the fabrication of custom-designed PCBs to meet the specific needs of clients, including single-layer, double-layer, and multi-layer boards.</p>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className={`${styles.centerService} ${styles.service}`}>

                        <AnimatedSection animationClass="animate__fadeIn">
                            {/* Service 2 content */}
                            <div className={styles.text}>
                                <h3>Prototype Development</h3>
                                <p className={styles.contenttext}>PCB companies often offer rapid prototyping services to help clients test and refine their PCB designs before full-scale production.</p>
                            </div>
                        </AnimatedSection>
                    </div>


                    <div className={`${styles.rightService} ${styles.service}`}>
                        <AnimatedSection animationClass="animate__fadeInRight">
                            {/* Service 3 content */}
                            <div className={styles.text}>
                                <h3>Component Sourcing</h3>
                                <p className={styles.contenttext}>Assistance with sourcing electronic components, ensuring they meet quality standards and are readily available for production.</p>
                            </div>
                        </AnimatedSection>
                    </div>

                </section>


                <section className={styles.servicescontainer}>
                    <div className={`${styles.leftService} ${styles.service}`}>
                        <AnimatedSection animationClass="animate__fadeInLeft">
                            {/* Service 1 content */}
                            <div className={styles.text}>
                                <h3>Environmental Responsibility</h3>
                                <p className={styles.contenttext}>Companies may focus on eco-friendly manufacturing processes, including lead-free and RoHS-compliant PCBs, to align with environmental standards.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className={`${styles.centerService} ${styles.service}`}>
                        <AnimatedSection animationClass="animate__fadeIn">
                            {/* Service 2 content */}
                            <div className={styles.text}>
                                <h3>Technical Support and Troubleshooting</h3>
                                <p className={styles.contenttext}>Providing ongoing support to address technical issues, solve problems, and assist with product improvements.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className={`${styles.rightService} ${styles.service}`}>
                        <AnimatedSection animationClass="animate__fadeInRight">
                            {/* Service 3 content */}
                            <div className={styles.text}>
                                <h3>Comprehensive PCB Testing</h3>
                                <p className={styles.contenttext}> Our comprehensive PCB testing services are designed to meet the highest industry standards and guarantee the quality of your PCBs.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
                <AnimatedSection animationClass="animate__fadeInUp">
                <p className={styles.contactcontent}>To unlock the limitless possibilities of PCB manufacturing, contact us today and bring your innovations to life !</p>

                <div className={styles.btn}>
                    <Link href="/contact">
                        <div className={styles.contactButton}>Contact Us</div>
                    </Link>
                </div>
                </AnimatedSection>

            </Layout>
        </>
    );
};

export default Services;
