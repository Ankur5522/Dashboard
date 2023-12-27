import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { updateProjectById, createProject } from "../api/api";

const ProjectForm = ({ handleClick, onSubmit, projectToUpdate, handleUseCalleffect }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: null,
    });

    useEffect(() => {
        if (projectToUpdate) {
            setFormData({
                name: projectToUpdate.name,
                description: projectToUpdate.description,
                image: projectToUpdate.image,
            });
        }
    }, [projectToUpdate]);

    const handleInput = async (e) => {
        const { name, value, files } = e.target;
        let updatedValue = value;

        if (name === "image" && files[0]) {
            updatedValue = await convertImageToBase64(files[0]);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: updatedValue,
        }));
    };

    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (projectToUpdate) {
                await updateProjectById(projectToUpdate._id, formData);
                handleUseCalleffect()
            } else {
                const newProject = await createProject(formData);
                onSubmit(newProject);
            }

            setFormData({ name: '', description: '', image: null });
            handleClick();
        } catch (error) {
            console.error("Error creating/updating project:", error);
        }
    };

    return (
        <div className="projectformMain">
            <form className="project-form">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "4px",
                        fontWeight: "bold",
                        fontSize: "24px",
                    }}
                >
                    <IoClose onClick={handleClick} />
                </div>
                <label className="project-form-label">
                    Name:
                    <input
                        type="text"
                        name="name"
                        className="project-input"
                        value={formData.name}
                        onChange={handleInput}
                    />
                </label>
                <br />
                <label className="project-form-label">
                    Description:
                    <textarea
                        type="text"
                        name="description"
                        className="project-textarea"
                        value={formData.description}
                        onChange={handleInput}
                    />
                </label>
                <br />
                <label className="project-form-label">
                    Image:
                    <input
                        type="file"
                        name="image"
                        className="project-input"
                        accept="image/*" // Specify accepted file types (images)
                        onChange={handleInput}
                    />
                </label>
                <br />
                <button type="submit" className="project-submit" onClick={handleSubmit}>
                    {projectToUpdate ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default ProjectForm;
