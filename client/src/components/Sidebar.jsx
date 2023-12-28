import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../assets/images";
import logo from "../assets/logo.png";
import collapse from "../assets/collapse.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeOption, setActiveOption] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Get the path from the location and set the active option accordingly
        const path = location.pathname;
        if (path === "/my-projects" || path === "/") {
            setActiveOption("my-projects");
        } else if (path === "/sample-projects") {
            setActiveOption("sample-projects");
        } else if (path === "/apps") {
            setActiveOption("mapps");
        } else if (path === "/intro") {
            setActiveOption("intro-to-necleo");
        } else if (path === "/help") {
            setActiveOption("help");
        } else if (path === "/feedback") {
            setActiveOption("feedback");
        }
    }, [location.pathname]);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const handleExpand = () => {
        setCollapsed(false);
    };

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    return (
        <div className={`sidebarMain ${collapsed ? "collapsed" : ""}`}>
            {collapsed ? (
                <div className="sidebar-expand" onClick={handleExpand}>
                    <GiHamburgerMenu size={35} />
                </div>
            ) : (
                <>
                    <div className="necleo">
                        <img src={logo} alt="logo" href="#" />
                    </div>
                    <div className="sidebar-border"></div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "90%",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="sidebar-section">
                                <Link
                                    to="/my-projects"
                                    className={`sidebar-item ${
                                        activeOption === "my-projects"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleOptionClick("my-projects")
                                    }
                                >
                                    <img
                                        src={
                                            activeOption === "my-projects"
                                                ? images.project.color
                                                : images.project.grey
                                        }
                                        width={28}
                                    />
                                    <p>My Projects</p>
                                </Link>
                                <Link
                                    to="/sample-projects"
                                    className={`sidebar-item ${
                                        activeOption === "sample-projects"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleOptionClick("sample-projects")
                                    }
                                >
                                    <img
                                        src={
                                            activeOption === "sample-projects"
                                                ? images.sample.color
                                                : images.sample.grey
                                        }
                                        width={26}
                                    />
                                    <p>Sample Projects</p>
                                </Link>
                            </div>
                            <div className="sidebar-section">
                                <div className="sidebar-border"></div>
                                <Link
                                    to="/apps"
                                    className={`sidebar-item ${
                                        activeOption === "mapps" ? "active" : ""
                                    }`}
                                    onClick={() => handleOptionClick("mapps")}
                                >
                                    <img
                                        src={
                                            activeOption === "mapps"
                                                ? images.apps.color
                                                : images.apps.grey
                                        }
                                        width={28}
                                    />
                                    <p>MApps</p>
                                </Link>
                                <Link
                                    to="/intro"
                                    className={`sidebar-item ${
                                        activeOption === "intro-to-necleo"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleOptionClick("intro-to-necleo")
                                    }
                                >
                                    <img
                                        src={
                                            activeOption === "intro-to-necleo"
                                                ? images.intro.color
                                                : images.intro.grey
                                        }
                                        width={28}
                                    />
                                    <p>Intro to Necleo</p>
                                </Link>
                            </div>
                        </div>
                        <div className="sidebar-section">
                            <Link
                                to="/help"
                                className={`sidebar-item ${
                                    activeOption === "help" ? "active" : ""
                                }`}
                                onClick={() => handleOptionClick("help")}
                            >
                                <img
                                    src={
                                        activeOption === "help"
                                            ? images.help.color
                                            : images.help.grey
                                    }
                                    width={28}
                                />
                                <p>Help and Support</p>
                            </Link>
                            <Link
                                to="/feedback"
                                className={`sidebar-item ${
                                    activeOption === "feedback" ? "active" : ""
                                }`}
                                onClick={() => handleOptionClick("feedback")}
                            >
                                <img
                                    src={
                                        activeOption === "feedback"
                                            ? images.feedback.color
                                            : images.feedback.grey
                                    }
                                    width={28}
                                />
                                <p>Feedback</p>
                            </Link>
                            <div
                                className="sidebar-item"
                                onClick={handleCollapse}
                            >
                                <img src={collapse} alt="collapse" />
                                <p style={{ color: "black" }}>Collapse</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
