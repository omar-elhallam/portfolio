import React, { useEffect, useRef, useState } from "react";
import "./ScrollBar.css";

const ScrollBar = () => {
	const thumbRef = useRef(null);
	const barRef = useRef(null);
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		let scrollTimeout;

		const handleScroll = () => {
			if (barRef.current) {
				barRef.current.classList.add("visible");
			}

			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const percent = (scrollTop / docHeight) * 100;

			if (thumbRef.current) {
				thumbRef.current.style.height = `${percent}%`;
			}

			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				if (barRef.current) {
					barRef.current.classList.remove("visible");
				}
			}, 750); // Fade out after 0.75s of no scrolling
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(scrollTimeout);
		};
	}, []);

	return (
		<div className="custom-scrollbar" ref={barRef}>
			<div className="scroll-thumb" ref={thumbRef} />
		</div>
	);
};

export default ScrollBar;