import Hero from "./components/hero/Hero";
import styles from "./page.module.css";
export default function Home() {
    return (
        <>
            <Hero />
            <section className="pb5rem">
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
            <section className="skew">
                <div className="separatorSkewWhite"></div>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x align-center">
                        <div className="cell">
                            <h2 className="title">
                                <span>mon expertise au service</span>
                                des Entrepreneurs, TPE, PME / PMI, Artisans
                            </h2>
                            <p>
                                Je vous accompagne à élaborer votre stratégie de
                                communication via internet.
                            </p>
                            <p>
                                De l’audit stratégique au cahier des charges
                                puis à la conception des livrables (site
                                vitrine, site e-commerce, landing page,
                                newsletters,...) en réalisant un suivi de projet
                                avec une approche agile.
                            </p>
                        </div>
                        <div className="cell small-10">
                            <h2 className="title">
                                curiosité technologique constante
                            </h2>
                            <p>
                                Passionné par le web et ses technologies, je
                                reste continuellement à l'affût des dernières
                                nouveautés qui se font sur la toile.
                            </p>
                            <p>
                                Je possède une très grande culture web qui me
                                permet de vous orienter vers les{" "}
                                <b>meilleures solutions</b> à mettre en place{" "}
                                <b>pour votre projet</b>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x align-right">
                        <div className="cell small-10 medium-6">
                            <h2 className="title">
                                <span>dynamique mobile</span>
                                <b className="textBlue">80%</b> des Français
                                utilisent internet via leur smartphone
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
