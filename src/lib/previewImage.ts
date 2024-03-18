const previewImage = (e:any, setImagePreview:any, setImage:any) => {
  // console.log(e.target.files[0]);
  const file = e.target.files[0];
  setImage(file);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    console.log(reader.result);
    setImagePreview(reader.result);
  }
}

export default previewImage;