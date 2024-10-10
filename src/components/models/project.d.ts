interface IProjectDesc{
    challenge: string;
    goal: string;
    result: string;
}

export interface IProject {
    title: string;
    year: string;
    techs: string[];
    category: string;
    imgUrls: string[];
    linkGithub?: string;
    linkKaggle?: string;
    linkColab?: string;
    linkPPT?: string;
    summary: string;
    description: IProjectDesc;
}