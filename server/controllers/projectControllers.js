import Projects from "../model/Projects.js";

export const addProject = async (req, res) => {
  console.log(req.body)
  try {
    const newProject = await Projects({
      title: req.body.title,
      description:req.body.description,
      image: req.body.image,
      category: req.body.category,
      link: req.body.link,
      createdAtProject:req.body.startAt,
      closedAtProject:req.body.closeAt
    });
    await newProject.save();
    res.status(200).json({ success: true, message: "creted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "creted failed",error });
  }
};
export const getAllProject = async (req, res) => {
  try {
    const projects = await Projects.find({});
    res.status(200).json({ success: true, message: "success", projects });
  } catch (err) {
    res.status(500).json({ success: false, message: "server error" });
  }
};
export const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Projects.findByIdAndDelete(id);
    if (result) {
      return res
        .status(200)
        .json({ success: true, message: "deleted", result });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "failed deleted" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "failed delete" });
  }
};

export const updateProject = async (req, res) => {
    const id = req.params.id;
    try {
      const updateProject = await Projects.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      if (updateProject) {
        return res
          .status(200)
          .json({ success: true, message: "updated", updateProject });
      } else {
        return res.status(404).json({ success: false, message: "failed" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "loi server" });
    }
  };
