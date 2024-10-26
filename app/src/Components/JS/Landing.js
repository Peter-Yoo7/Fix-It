import React, { useState } from "react";
import "../style/landing.css";
import LandingItem from "./LandingItem";

export default function Landing() {
    const [jobs] = useState([
        { id: 1, title: "Fix leaky faucet", client: "John Doe", stage: "Payment Pending", date: "2023-10-01", type: "Plumbing", location: "Toronto" },
        { id: 2, title: "Install new lighting", client: "Jane Smith", stage: "Payment Received", date: "2023-10-05", type: "Electrical", location: "Mississauga" },
        { id: 3, title: "Paint living room", client: "Mark Brown", stage: "In Progress", date: "2023-10-08", type: "Painting", location: "Brampton" },
        { id: 4, title: "Bathroom renovation", client: "Sarah Wilson", stage: "Completed", date: "2023-09-30", type: "Renovation", location: "Scarborough" },
        { id: 5, title: "Replace water heater", client: "Michael Davis", stage: "Payment Pending", date: "2023-10-12", type: "Plumbing", location: "Toronto" },
    ]);

    const stages = ["In Progress", "Payment Pending", "Payment Received", "Completed"];
    const [activeStage, setActiveStage] = useState("In Progress");

    // Filter jobs by selected stage
    const getJobsByStage = (stage) => jobs.filter((job) => job.stage === stage);

    return (
        <div className="ConstructorLandingPage">
            <h1>Welcome, Constructor</h1>
            <p>Here is an overview of your jobs organized by stage:</p>

            {/* Stage buttons */}
            <div className="StageButtons">
                {stages.map((stage) => (
                    <button
                        key={stage}
                        className={`StageButton ${activeStage === stage ? "active" : ""}`}
                        onClick={() => setActiveStage(stage)}
                    >
                        {stage}
                    </button>
                ))}
            </div>

            {/* Job List for the active stage */}
            <div className="JobStageSection">
                <h2>{activeStage}</h2>
                <div className="JobList">
                    {getJobsByStage(activeStage).length > 0 ? (
                        getJobsByStage(activeStage).map((job) => (
                            <LandingItem
                                key={job.id}
                                title={job.title}
                                client={job.client}
                                date={job.date}
                                type={job.type}
                                location={job.location}
                                stage={job.stage}
                            />
                        ))
                    ) : (
                        <p className="NoJobs">No jobs in this stage</p>
                    )}
                </div>
            </div>
        </div>
    );
}
