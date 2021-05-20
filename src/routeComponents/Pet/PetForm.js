// para o create e para o edit
//titulo, corpo e imagem

function PetForm(props) {
  return (
    <form className="mb-5" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="PetFormName">Pet Name</label>
        <input
          type="text"
          className="form-control"
          id="petFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="petFormImage">Pet Picture</label>
        <input
          type="file"
          className="form-control"
          id="petFormImage"
          name="image"
          onChange={props.handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="petFormBirthDate">Birthdate</label>
        <input
          type="date"
          className="form-control"
          id="petFormBirthDate"
          name="birthDate"
          onChange={props.handleChange}
          value={props.state.birthdate}
        />
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          className="form-control"
          id="Gender"
          name="gender"
          onChange={props.handleChange}
          value={props.state.gender}
        />
      </div>

      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            onChange={props.handleChange}
            value={props.state.type}
          />
        </div>
      </div>
      <hr />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default PetForm;
