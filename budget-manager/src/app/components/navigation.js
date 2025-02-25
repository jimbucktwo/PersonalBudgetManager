import Link from 'next/link';
import styles from './navigation.module.css';


export default function NavigationBar() {
    return (
        <nav>
            <ul>
                <li><Link className = {styles.link}href="/">Home</Link></li>
                <li><Link className = {styles.link}href="/budgeter">Budgeter</Link></li>
            </ul>
        </nav>
    );
}