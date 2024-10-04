export interface IExperience{
    date: string;
    position: string;
    elaboration: string;
}

export interface ICertificate{
    title: string;
    imgUrl: string;
}

export interface IAbout{
    desc: string;
    experience: IExperience[];
    certificates: ICertificate[];
}