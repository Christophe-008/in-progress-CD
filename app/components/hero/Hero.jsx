import styles from "./hero.module.css";
import Image from "next/image";
import logo from "@/public/logo_createur-design.png";
export default function Hero() {
    return (
        <section>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="cell">
                        <div className={styles.hero}>
                            <Image
                                src={logo}
                                alt="logo createur design"
                                fill={true}
                                className={styles.heroImage}
                                style={{ objectFit: "contain" }}
                                // priority={true}
                                // placeholder="blur"
                            />
                            <div className={styles.heroText}>
                                <h2 className={`${styles.heroTitle} fontAnuri`}>
                                    createur design
                                </h2>
                                <p className="text-center">
                                    par Christophe Delobel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
