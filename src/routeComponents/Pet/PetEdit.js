import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/api";
import ProductForm from "./PetForm";

function PetEdit() {
  const [state, setState] = useState({
    name: "",
    type: "",
    birthDate: "",
    gender: "",
    user: "",
    image: "",
  });

  const { id } = useParams();
  const history = useHistory();

  // Pré-popula o formulário com os dados do produto através do id da URL
  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await api.get(`/pet/${id}`);

        console.log(response.data);
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBeer();
  }, [id]);

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

      // Fazendo um backup da imagem atual
      let uploadedImageUrl = state.image;
      // Verifica se o usuário selecionou um novo arquivo para trocar a imagem, pois o valor que já estará armazenado em image_url é a URL da imagem atual armazenada no Cloudinary
      if (typeof state.image === "object") {
        uploadedImageUrl = await handleFileUpload(state.image);
      }

      const response = await api.put(`/pet/${id}`, {
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
      <h1>Edit Pet</h1>

      <hr />

      <ProductForm
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default PetEdit;
