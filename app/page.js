import Hero from "./components/hero/Hero";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <Hero />
            <section>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x align-center">
                        <div className="cell small-10 medium-6">
                            <div className="textWhite">
                                <h2 className="title">
                                    <span>
                                        Donnez à votre projet la visibilité
                                        qu'il mérite
                                    </span>
                                    Créez un site web à votre image, performant
                                    et impactant
                                </h2>
                                <p>
                                    Un site internet n’est pas juste une
                                    question de présence en ligne, c’est un
                                    levier de croissance. Pour qu’il vous
                                    apporte de vrais résultats, il doit être
                                    clair, impactant et pensé pour convertir vos
                                    visiteurs en clients.
                                </p>
                                <p>
                                    De la définition de votre projet à la mise
                                    en ligne, je vous accompagne pour créer un
                                    site efficace, moderne et optimisé. Que ce
                                    soit un <strong>site vitrine</strong>, une
                                    <strong> boutique en ligne</strong> ou une
                                    <strong> landing page</strong>, chaque
                                    détail est conçu pour refléter votre
                                    savoir-faire et répondre aux attentes de
                                    votre audience.
                                </p>
                                <p>
                                    Votre projet mérite plus qu’un simple site
                                    web. Il a besoin d’une solution sur-mesure
                                    qui allie performance, design et stratégie.
                                </p>
                                <a href="#">
                                    Je booste ma présence en ligne dès
                                    maintenant !
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
