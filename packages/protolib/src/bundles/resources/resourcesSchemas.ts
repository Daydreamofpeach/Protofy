import { Schema, z, ProtoModel, BaseSchema } from 'protobase'
import { SessionDataType } from 'protonode'

export const BaseResourceSchema = Schema.object({
    name: z.string().hint("catalog, tutorial, invoice...").search(),
    description: z.string().search(),
    url: z.string().label('url').hint('http://...').static().search(),
    type:  z.union([
        z.literal("text"),
        z.literal("video"),
        z.literal("image"),
        z.literal("code"),
        z.literal("youtube"),
        z.literal("pdf"),
    ]).search(),
    tags: z.array(z.string()).search()

})

export const ResourceSchema = z.object({
    ...BaseSchema.shape,
    ...BaseResourceSchema.shape
});

export type ResourceType = z.infer<typeof ResourceSchema>;
export class ResourceModel extends ProtoModel<ResourceModel> {
    constructor(data: ResourceType, session?: SessionDataType) {
        super(data, ResourceSchema, session, "Resource");
    }

    list(search?): any {
        if(search) {
            if(search.startsWith("tags:")){
                const tags = search.slice("tags:".length).split(",").map(tag => tag.trim().toLowerCase())
                if(tags.every(element => this.data.tags.includes(element.toLowerCase()))) {
                    return this.read();
                }

            } else {
                const searchFields = this.objectSchema.is('search').getFields()
                for(var i=0;i<searchFields.length;i++) {
                    if(((this.data[searchFields[i]]+"").toLowerCase()).includes(search.toLowerCase())) {
                        return this.read();
                    }
                }
            }
        } else {
            return this.read();
        }
    }

    protected static _newInstance(data: any, session?: SessionDataType): ResourceModel {
        return new ResourceModel(data, session);
    }
}
