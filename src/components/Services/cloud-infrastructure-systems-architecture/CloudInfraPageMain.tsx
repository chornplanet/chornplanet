import React from "react";
import CloudInfraModuleLeft from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraModuleLeft";
import CloudInfraModuleRight
    from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraModuleRight";
import {ICloud} from "@/lib/model/ICloud";
import {ICloudSolution} from "@/lib/model/ICloudSolution";

const CloudInfraPageMain: React.FC<{
    lang: string,
    cloud: ICloud,
    cloudSolution: ICloudSolution
}> = ({lang, cloud, cloudSolution}) => {
    const cloudSolutionContent = cloudSolution;

    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <h1>{cloudSolutionContent.title}</h1>
                    <div className="row justify-content-md-center">
                        <div className="row align-items-center align-items-center-custom">
                            <CloudInfraModuleLeft lang={lang} cloudSolution={cloudSolutionContent}/>
                            <CloudInfraModuleRight lang={lang} cloud={cloud}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CloudInfraPageMain;
