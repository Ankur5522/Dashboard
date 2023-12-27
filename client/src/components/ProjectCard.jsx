import addImg from "../assets/addImg.png";

const ProjectCard = ({ project, handleClick, handleUpdate, handleDelete, handleShowProject }) => {
    if (!project) {
        return (
            <div className="cardMain" onClick={handleClick}>
                <div className="card-image">
                    <img src={addImg} alt="add new project" width={53} />
                </div>
                <div className="card-text">
                    <p className="card-create">Create a new Project</p>
                    <p className="card-try">
                        or try a <span>Sample Project</span>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="cardMain">
            <div className="card-buttons">
            <div className="card-update" onClick={() => handleUpdate(project)}>
                <p>Update</p>
            </div>
            <div className="card-update" onClick={() => handleDelete(project)}>
                <p>Delete</p>
            </div>
            </div>
            <div className="card-projectImage">
                <img src={project.image} alt="add new project" />
            </div>
            <div className="card-text" onClick={() => handleShowProject(project)}>
                <p className="card-title">{project.name}</p>
                <p className="card-description">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
