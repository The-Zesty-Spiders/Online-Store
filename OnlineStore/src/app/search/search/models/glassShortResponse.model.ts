import { BaseModel } from './baseModel.model';
// TODO - probably move in glasses
export class GlassShortResponse extends BaseModel {
    Description: string;
    EuroCode: string;
    OesCode: string;
    MaterialNumber: string;
    LocalCode: string;
    IndustryCode: string;
}
