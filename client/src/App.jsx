import { Navbar, Hero } from "./components"; 
import styles from "./style"; 

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            {/* Navbar */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            {/* Hero */}
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            {/* Content */}
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    
                </div>
            </div>
        </div>
    )
}

export default App