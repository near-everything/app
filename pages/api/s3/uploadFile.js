import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  region: "us-east-1",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: "v4",
});

export const configS3 = {
  api: {
    bodyParser: {
      sizeLimit: "8mb",
    },
  },
};

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    let { type, nickname, base64 } = req.body;
    const now = Date.now().toString();
    const name = `${now}${nickname}.${type.split("/")[1]}`;

    const fileParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: name,
      Expires: 600,
      ContentEncoding: base64 ? "base64" : null,
      ContentType: type,
    };

    const url = await s3.getSignedUrlPromise("putObject", fileParams);
    res.status(200).json({ url, name });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
}
