interface IProjectDesc{
    problem: string;
    solution: string;
    features?: string[];
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
    linkFigma?: string;
    summary: string;
    description: IProjectDesc;
}