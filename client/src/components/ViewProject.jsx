import { IoClose } from "react-icons/io5";

const ViewProject = ({ project, handleShowDetails }) => {
    return (
        <div className="viewProjectMain">
            <div
                style={{
                    height: "50%",
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "30px",
                    backgroundColor: "rgba(254, 117, 37, 0.3)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "20px",
                        fontWeight: "bold",
                        fontSize: "24px",
                    }}
                >
                    <h3 style={{fontWeight: "bold"}}>Project Details</h3>
                    <IoClose onClick={handleShowDetails} />
                </div>
                <div 
                    style={{
                        display: "flex",
                        height: "86%",
                    }}
                    className="view-wrapper"
                >
                <div className="view-text">
                    <div>
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                                marginBottom: "10px",
                            }}
                        >
                            Project Name:{" "}
                        </p>
                        <p style={{ fontSize: "18px", fontWeight: "500" }}>
                            {project.name}
                        </p>
                    </div>
                    <div>
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                                marginBottom: "10px",
                            }}
                        >
                            Project Description:{" "}
                        </p>
                        <p style={{ fontSize: "18px", fontWeight: "500" }}>
                            {project.description}
                        </p>
                    </div>
                </div>
                <div className="view-image-container">
                    <p
                        style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            marginBottom: "10px",
                        }}
                    >
                        Cover Image:{" "}
                    </p>
                    <img src={project.image} alt="add new project" className="view-image"/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProject;
