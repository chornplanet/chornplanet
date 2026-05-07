import {IMetaLink} from "@/metadata/metadataLink/model/IMetaLink";
import {IMetaLinkFrontend} from "@/metadata/metadataLink/model/IMetaLinkFrontend";
import {IMetaLinkBackend} from "@/metadata/metadataLink/model/IMetaLinkBackend";
import {IMetaLinkDevOps} from "@/metadata/metadataLink/model/IMetaLinkDevOps";

export interface IMetaLinks {
    _404: IMetaLink,
    about: IMetaLink,
    contact: IMetaLink,
    aiAom: IMetaLink,
    aiCompanion: IMetaLink,
    aiFah: IMetaLink,
    aiPloy: IMetaLink,
    smartFoodAi: IMetaLink,
    cloudSolutions: IMetaLink,
    gallery: IMetaLink,
    home: IMetaLink,
    llmAi: IMetaLink,
    privacyPolicy: IMetaLink,
    termOfServices: IMetaLink,
    webDevelopment: IMetaLink,
    web3: IMetaLink,
    workplacePolicy: IMetaLink,
    servicePackages: IMetaLink,

    frontend: IMetaLinkFrontend,
    backend: IMetaLinkBackend,
    devops: IMetaLinkDevOps
}
