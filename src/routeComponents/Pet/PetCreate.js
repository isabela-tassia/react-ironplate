import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../apis/api";

import PetForm from "./PetForm";

function PetCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    type: "",
    birthDate: "",
    gender: "",
    user: "",
    image: "",
  });

  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  }

  async function handleFileUpload(file) {
    try {
      // FormData é uma função construtora global nativa do Javascript que cria um objeto de Formulario no formato multipart/form esperado pelo backend
      const uploadData = new FormData();

      // 'image' precisa bater com o valor de uploadCloud.single() no nosso backend
      uploadData.append("image", file);

      const response = await api.post("/image-upload", uploadData);

      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      let uploadedImageUrl = "";
      if (state.image) {
        uploadedImageUrl = await handleFileUpload(state.image);
      }

      const response = await api.post("/pet-register", {
        ...state,
        image: uploadedImageUrl,
      });
      console.log(response);
      // Redireciona programaticamente para a URL '/'
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>New Pet </h1>

      <hr />

      <PetForm
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default PetCreate;
