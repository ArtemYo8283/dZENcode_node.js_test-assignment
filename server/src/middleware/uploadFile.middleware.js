// Import the "fs" module to work with the file system.
import fs  from "fs";
// Import the "jimp" library for image processing.
import Jimp from "jimp";
// Import the "mime" library for working with MIME types.
import mime  from "mime";

// Define an asynchronous function that processes and saves a file with optional resizing.
export default async function (fileData, id) {
    // Extract the filename and file data from the input.
    const { filename, data } = fileData;
    // Determine the MIME type of the file.
    const fileType = mime.getType(filename);
    // Create the file path with the provided ID and filename.
    let filePath = `assets/${id}_${filename}`;
    // If the file is a text file, save it directly.
    if (fileType == 'text/plain') {
        fs.writeFileSync(filePath, data);
    } else {
        // If the file is an image, resize it if needed.
        const image = await Jimp.read(data);
        const maxWidth = 320;
        const maxHeight = 240;

        if (image.bitmap.width > maxWidth || image.bitmap.height > maxHeight) {
            // If the image dimensions exceed the maximum dimensions, scale it down.
            image.scaleToFit(maxWidth, maxHeight).getBuffer(Jimp.MIME_JPEG, (err, resultBuffer) => {
                if (!err) {
                    fs.writeFileSync(filePath, resultBuffer);
                }
            });
        }
        else {
            // If the image is within the limits, save it without resizing.
            fs.writeFileSync(filePath, data);
        }
    }

}

