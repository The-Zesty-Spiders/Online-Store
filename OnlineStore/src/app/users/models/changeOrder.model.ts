export class ChangeOrder   {
    Id: number;
    Finished: boolean;

    constructor(id: number, finished: boolean) {
        this.Id = id;
        this.Finished = finished;
    }
}
