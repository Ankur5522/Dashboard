import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useState, useEffect } from "react";
import { createProject, deleteProjectById, getAllProjects } from "../api/api";
import ViewProject from "./ViewProject";

const MainWindow = () => {
    const [clicked, setClicked] = useState(false);
    const [defaultData, setDefaultData] = useState(false);
    const [callUseEffect, setCallUseEffect] = useState(false);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("https://picsum.photos/v2/list?page=1&limit=6");
                const data = await response.json();
                const EditedData = data.map(item => ({
                    name: `Project ${item.id}`,
                    image: item.url,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
                  }));
                setDefaultData(EditedData);
                console.log(EditedData)
                const createProjects = async () => {
                    for (const projectData of defaultData) {
                      await createProject(projectData);
                    }
                  };
                createProjects();
                
            } catch (error) {
                console.log("error",error)
            }
        }

        fetchImages();

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
                {projects && projects.map((project) => (
                    <ProjectCard key={project._id} project={project} handleClick={handleClick} handleUpdate={handleUpdate} handleDelete={handleDelete} handleShowProject={handleShowProject} />
                ))}
            </div>
            {clicked && <ProjectForm handleClick={handleClick} onSubmit={handleProjectSubmit} projectToUpdate={selectedProject} handleUseCalleffect={handleUseCalleffect}/>}
        </div>
    );
};

export default MainWindow;
