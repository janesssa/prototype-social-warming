import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import CulteryIcon from "../assets/CulteryIcon"
import "../styles/results.scss";

const InsightCard = ({ content }) => {
    const [activeTab, setActiveTab] = useState();
    const isActive = activeTab === content.id;

    const [bind, {height}] = useMeasure()

    const arrowProps = useSpring({transform: isActive ? "rotate(-135deg)" : "rotate(135deg)"});
    const mdCardProps = useSpring({ height: isActive ? "200px" : "50px" });
    const imageProps = useSpring({ height: isActive ? "200px" : "1px"});
    const contentProps = useSpring({ width: isActive ? "760px" : "960px" });
    const parProps = useSpring({ opacity: isActive ? "1" : "0", height: isActive ? "200px" : "1px" });

    const toggleAccordion = () => {
        if (isActive) {
            setActiveTab(null);
        } else {
            setActiveTab(content.id);
        }
    };

    return (
        <div className="md-card">
            <animated.div className="center-icon" style={imageProps} ref={bind}>
                {/* Todo: Switch voor verschillende Icons */}
                <CulteryIcon w={height/2} h={height/2} />
            </animated.div>
            <animated.div className="card-content" style={contentProps}>
                <animated.small>Categorie</animated.small>
                <animated.h6 className="card-title">{content.title}</animated.h6>
                <animated.p style={parProps}>{content.content}</animated.p>
            </animated.div>
            <animated.div
                className="arrow"
                onClick={() => toggleAccordion()}
                style={arrowProps}
            ></animated.div>
            <animated.span style={mdCardProps}></animated.span>
        </div>
    );
};

export default InsightCard;
