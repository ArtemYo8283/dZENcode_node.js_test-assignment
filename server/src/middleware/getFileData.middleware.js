// Import the "fs" module to work with the file system.
import fs  from "fs";

// Define an asynchronous function that reads a file with a given filename and identifier (id).
export default async function (filename, id) {
    // Create the file path by combining the "assets" directory, the provided identifier (id), and the filename.
    let filePath = `assets/${id}_${filename}`;
    try {
        // Attempt to read the file data from the specified file path.
        const fileData = fs.readFileSync(filePath);
        // If the file read is successful, return an object containing the filename and file data.
        return { filename, data: fileData };
    } catch (err) {
        return null;
    }
}
