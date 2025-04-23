import "./TestBackground.css";
import { useEffect } from "react";

function TestBackground() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const nebula = document.getElementById("nebula");
            const starsMidground = document.getElementById("stars-midground");
            const starsForeground = document.getElementById("stars-foreground");

            if (nebula) nebula.style.backgroundPosition = `center calc(100px + ${scrollY * 0.2}px)`;
            if (starsMidground) starsMidground.style.backgroundPosition = `center calc(100px + ${scrollY * 0.5}px)`;
            if (starsForeground) starsForeground.style.backgroundPosition = `center calc(100px + ${scrollY * 0.8}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="test-background-container">
            <div className="background-layer" id="nebula"></div>
            <div className="background-layer" id="stars-midground"></div>
            <div className="background-layer" id="stars-foreground"></div>
            <div className="content">
                <h1>Be Creative.</h1>
                <p>
                    Get ready to transform your React applications into visually stunning
                    experiences.
                </p>
                <a href="#">Learn More</a>
            </div>
            <div className="extra-content"></div> {/* Placeholder for scrolling */}
        </div>
    );
}

export default TestBackground;