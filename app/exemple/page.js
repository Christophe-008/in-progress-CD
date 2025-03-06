// import Image from "next/image";
import Camera from "../components/camera/Camera";
import Map from "../components/map/MapWrapper";

export default async function Page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await res.json();
    const maxResult = 20;

    console.log("Données reçues");

    return (
        <section className="skew test">
            <div className="separatorSkewWhite"></div>
            <div className="grid-container">
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell small-9">
                        <h2 className="title">API Test</h2>
                        <p>
                            <small>result : {maxResult}</small>
                        </p>
                        <Camera />
                        <Map />
                        <ul className="">
                            {data.slice(0, maxResult).map((post) => (
                                <li key={post.id} className="">
                                    <h3 className="">{post.title}</h3>
                                    <p className="0">{post.body}</p>
                                </li>
                            ))}
                        </ul>
                        {/* <img src="logo_createur-design.png" alt="logo" /> */}
                        {/* <div
                            style={{
                                position: "relative",
                                // width: "200px",
                                height: "400px",
                            }}
                        >
                            <Image
                                src="/logo_createur-design.png"
                                // width="500"
                                // height="500"
                                alt="logo"
                                fill={true}
                                style={{ objectFit: "contain" }}
                            ></Image>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
