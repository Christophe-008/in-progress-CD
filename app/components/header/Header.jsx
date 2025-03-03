import "./header.css";
import Nav from "../nav/Nav";

export default function Header() {
    return (
        <header>
            <div className="grid-container">
                <div className="grid-x">
                    <div className="cell">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    );
}
