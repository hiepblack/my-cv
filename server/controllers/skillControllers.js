import Skill from "../model/Skills.js";

export const AddNewSkill = async (req, res) => {
  console.log(req.body);
  try {
    const newSkill = await Skill({
      name: req.body.name,
      level: req.body.level,
      image: req.body.image,
      role: req.body.role,
    });
    await newSkill.save();
    res.status(200).json({ success: true, message: "created skill" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "server err",err });
  }
};

export const getAllSkill = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.status(200).json({ success: true, message: "success", skills });
  } catch (err) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const getOneSkill = async (req, res) => {
  try {
    const id = req.params.id;
    const skill = await Skill.findById(id);
    if (skill) {
      return res.status(200).json({ success: true, message: "success", skill });
    } else {
      return res.status(401).json({ success: false, message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteSkill = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Skill.findByIdAndDelete(id);
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

export const updateSkill = async (req, res) => {
  const id = req.params.id;
  try {
    const updateSkill = await Skill.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    if (updateSkill) {
      return res
        .status(200)
        .json({ success: true, message: "updated", updateSkill });
    } else {
      return res.status(404).json({ success: false, message: "failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "loi server" });
  }
};
