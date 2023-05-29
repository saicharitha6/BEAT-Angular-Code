export class Project {
    id!: number;
    name: string="";
    organization: string="";
    projectManager: string="";
    startDate!: Date;
    location: string="";
    endDate!: Date;
    description: String="";
    projectType: String="";
    editorId!: number;
    status!:boolean;
}