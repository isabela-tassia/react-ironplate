import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/api";

function PetDelete() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function deleteProduct() {
      try {
        const response = await api.delete(`/pet/${id}`);
        console.log(response);
        history.push("/my-pets");
      } catch (err) {
        console.error(err);
      }
    }
    deleteProduct();
  }, [id, history]);

  return <p>Deleting...</p>;
}

export default PetDelete;
