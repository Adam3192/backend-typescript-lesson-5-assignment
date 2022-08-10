export class Job {
 id: number;
 jobTitle: string;
 companyName: string;
 yearsWorked: number;
 description: string

 constructor(id: number, jobTitle: string, companyName: string, yearsWorked: number, description: string) {
     this.id = id;
     this.jobTitle = jobTitle;
     this.companyName = companyName;
     this.yearsWorked = yearsWorked;
     this.description = description
 }
}
