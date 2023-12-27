import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import logo from "../assets/logo.png";
import myprofile from "../assets/myprofile.png";
import collapse from "../assets/collapse.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeOption, setActiveOption] = useState(null);

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
        <div className={`sidebarMain ${collapsed ? 'collapsed' : ''}`}>
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
                    <div>
                        <div className="sidebar-section">
                            <Link to="/my-projects" className={`sidebar-item ${activeOption === 'my-projects' ? 'active' : ''}`} onClick={() => handleOptionClick('my-projects')}>
                                <img src={myprofile} width={28} />
                                <p>My Projects</p>
                            </Link>
                            <Link to="/sample-projects" className={`sidebar-item ${activeOption === 'sample-projects' ? 'active' : ''}`} onClick={() => handleOptionClick('sample-projects')}>
                                <img src={myprofile} width={28} />
                                <p>Sample Projects</p>
                            </Link>
                        </div>
                        <div className="sidebar-section">
                            <div className="sidebar-border"></div>
                            <Link to="/apps" className={`sidebar-item ${activeOption === 'mapps' ? 'active' : ''}`} onClick={() => handleOptionClick('mapps')}>
                                <img src={myprofile} width={28} />
                                <p>MApps</p>
                            </Link>
                            <Link to="/intro" className={`sidebar-item ${activeOption === 'intro-to-necleo' ? 'active' : ''}`} onClick={() => handleOptionClick('intro-to-necleo')}>
                                <img src={myprofile} width={28} />
                                <p>Intro to Necleo</p>
                            </Link>
                        </div>
                        <div className="sidebar-section">
                            <div className="sidebar-item" onClick={handleCollapse}>
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
