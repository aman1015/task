import TaskModel from "../Models/TaskModel.js";
export const getAllTask=(req,res)=>{
    res.send("all task");
}
export const createTask=async(req,res)=>{
const data=req.body;
try{
    const model= new TaskModel(data);
model.save();
res.status(201).json({msg:"the task is created", succes:true})
}catch (error){
   res.status(500).json({msg:"the task in not created",error})
}


}

export const fetchAllTasks=async(req,res)=>{
    try{
        const data= await TaskModel.find({})
        res.status(200).json({msg:"fetched all tasks", succes:true, data});
    }catch(error){
        res.ststus(400).json({msg:"cannot fetch all tasks", error})
    }
}

export const updateByid = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: { ...body } };
        await TaskModel.findByIdAndUpdate(id, obj)
        res.status(200)
            .json({ message: 'Task Updated', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to updated task', success: false });
    }
}
export const deleteByid = async (req, res) => {
     try {
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200)
            .json({ message: 'Task is deleted', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete task', success: false });
    }
}
