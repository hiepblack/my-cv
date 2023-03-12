import Testimonial from "../model/Testimonial.js";

export const addTestimonial = async (req, res) => {
  try {
    const newTestimonial = await Testimonial({
      testName: req.body.testName,
      image: req.body.image,
      description: req.body.description,
    });
    await newTestimonial.save();
    res
      .status(200)
      .json({ success: true, message: "created success", newTestimonial });
  } catch (error) {
    res.status(500).json({ error: error, message: "server error" });
  }
};
export const deleteTestimonial = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Testimonial.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({ success: true, message: "deleted", result });
    } else {
      res.status(401).json({ success: false, message: "delete failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "failed delete" });
  }
};
export const getAllTestimonial = async (req, res) => {
  try {
    const data = await Testimonial.find({});
    if (data) {
      return res
        .status(200)
        .json({ success: true, message: "getAllUser success", data });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "not found" });
  }
};

export const updateTestimonial = async (req, res) => {
  const id = req.params.id;
  try {
    const updateData = await Testimonial.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ success: true, message: "updated", updateData });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed update" });
  }
};


