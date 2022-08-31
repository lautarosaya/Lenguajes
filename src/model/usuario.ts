import { prop } from "@typegoose/typegoose";

class userClass{
    @prop()
    public user?: string;
    @prop()
    public username?: string;
    @prop()
    public password?: string;
}
