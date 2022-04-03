import { useState } from "react";

function ImageUpload() {
  const [baseImage, setBaseImage] = useState([]);

  async function uploadImage(e) {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    setBaseImage([...baseImage, base64]);
  }

  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  return (
    <div className="home main ui container">
      <div className="uploadedImages">
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
        {baseImage.map((item) => {
          return <img key={item} src={item} height="200px" />;
        })}
      </div>
    </div>
  );
}
export default ImageUpload;