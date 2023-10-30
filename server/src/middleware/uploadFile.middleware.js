import fs  from "fs";
import Jimp from "jimp";
import mime  from "mime";

export default async function (fileData, id) {
    const { filename, data } = fileData;
    const fileType = mime.getType(filename);
    let filePath = `assets/${id}_${filename}`;
    if (fileType == 'text/plain') {
        fs.writeFileSync(filePath, data);
    } else {
        const image = await Jimp.read(data);
        const maxWidth = 320;
        const maxHeight = 240;

        if (image.bitmap.width > maxWidth || image.bitmap.height > maxHeight) {
            image.scaleToFit(maxWidth, maxHeight).getBuffer(Jimp.MIME_JPEG, (err, resultBuffer) => {
                if (!err) {
                    fs.writeFileSync(filePath, resultBuffer);
                }
            });
        }
        else {
            fs.writeFileSync(filePath, data);
        }
    }

}

