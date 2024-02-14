const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImagesToCloudinary = async (filePath, folder) => {
  const result = await cloudinary.uploader.upload(filePath, {
    resource_type: "auto",
    folder: folder,
  });
  return { imageUrl: result.url, id: result.public_id };
};

module.exports = uploadImagesToCloudinary;
