import ProjectCard from "./ProjectCard";
import ProjectForm from "./projectForm";
import { useState, useEffect } from "react";
import { deleteProjectById, getAllProjects } from "../api/api";
import ViewProject from "./ViewProject";

const MainWindow = () => {
    const [clicked, setClicked] = useState(false);
    const [callUseEffect, setCallUseEffect] = useState(false);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const allProjects = await getAllProjects();
                setProjects(allProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, [callUseEffect]);

    const handleClick = () => {
        setClicked(!clicked);
        setSelectedProject(null);
    };

    const handleUseCalleffect = () => {
        setCallUseEffect(!callUseEffect)
    }

    const handleProjectSubmit = (newProject) => {
        setProjects([...projects, newProject]);
        handleUseCalleffect()
        handleClick();
    };

    const handleDelete = async (project) => {
        const selectedProjectInfo = projects.find((proj) => proj.name === project.name);
        await deleteProjectById(selectedProjectInfo._id)
        handleUseCalleffect()
    }

    const handleUpdate = (project) => {
        const selectedProjectInfo = projects.find((proj) => proj.name === project.name);
        setSelectedProject(selectedProjectInfo);
        setClicked(true);
    };

    const handleShowDetails = () => {
        setShowDetails(!showDetails)
    }

    const handleShowProject = (project) => {
        const selectedProjectInfo = projects.find((proj) => proj.name === project.name);
        setSelectedProject(selectedProjectInfo)
        handleShowDetails()
    }

    if(showDetails) {
        return (
            <ViewProject project={selectedProject} handleShowDetails={handleShowDetails}/>
        )
    }

    return (
        <div className="mainwindowMain">
            <p className="mainwindow-heading">My Projects</p>
            <div className="mainwindow-cardHolder">
                <ProjectCard handleClick={handleClick} />
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} handleClick={handleClick} handleUpdate={handleUpdate} handleDelete={handleDelete} handleShowProject={handleShowProject} />
                ))}
            </div>
            {clicked && <ProjectForm handleClick={handleClick} onSubmit={handleProjectSubmit} projectToUpdate={selectedProject} handleUseCalleffect={handleUseCalleffect}/>}
        </div>
    );
};

export default MainWindow;
