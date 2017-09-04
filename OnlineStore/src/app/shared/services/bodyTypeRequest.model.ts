export class BodyTypeRequest {
    ModelId: number;
    MakeId: number;

    constructor(makeId: number, modelId: number) {
        this.MakeId = makeId;
        this.ModelId = modelId;
    }
}
