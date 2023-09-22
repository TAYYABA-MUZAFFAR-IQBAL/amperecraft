import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <header>
            <nav className={styles.navbar} >
                         
            <section  className={styles.logo}>
                Amperecraft
            </section>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/#aboutsection">About</Link>
                    </li>
                    <li>
                        <Link href="/#contactsection">Contact</Link>
                    </li>
                    <li>
                        <Link href="/#servicessection">Services</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Navbar;
