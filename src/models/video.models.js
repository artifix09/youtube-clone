
import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
      videoFile:{
        type: String,
        required: true
      },
      thumbnail:{
        type: String,
        required: true
      },
      nextTitle:{
        type: String,
        required: true
      },
      description:{
        type: String,
        required: true
      },
      duration:{
        type: Number,
        required: true
      },
      views:{
        type: Number,
        eefault: 0
      },
      isPublished:{
        type: Boolean,
        default: true
      },
      owner:{
        type: Schema.Types.ObjectId,
        REF: "user"
      }

    
    }, 
    {
     timestamps: true
    }
)







videoSchema.plugin(mongooseAggregatePaginate)
export const video = mongoose.model("video", videoSchema)