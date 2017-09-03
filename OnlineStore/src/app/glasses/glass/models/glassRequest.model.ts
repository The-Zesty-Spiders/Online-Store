export class GlassRequest {
    ModelId: number;
    MakeId: number;
    BodyTypeId: number;

    constructor(makeId: number, modelId: number, bodyTypeId: number) {
        this.MakeId = makeId;
        this.ModelId = modelId;
        this.BodyTypeId = bodyTypeId;
    }
}
