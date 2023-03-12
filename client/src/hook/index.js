
export const Upload = async (files) => {
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "eb6jpxn6");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dbhyz5cgb/image/upload",
    {
      method: "POST",
      body: data,
    }
  );
  const file = await res.json();
  return file.url
};
export const BASE_URL = 'http://localhost:4000';