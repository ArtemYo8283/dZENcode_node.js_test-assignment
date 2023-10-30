import fs  from "fs";

export default async function (filename, id) {
    let filePath = `assets/${id}_${filename}`;
    try {
        const fileData = fs.readFileSync(filePath);
        return { filename, data: fileData };
    } catch (err) {
        return null;
    }
}
