function AddMovie({form, Handling, addMovie}) {
  return (
    <div>
      <input onChange={Handling} type='text' name='title' value={form.title} placeholder='title' /><br></br>
      <input onChange={Handling} type='text' name='genre' value={form.genre} placeholder='genre' /><br></br>
      <input onChange={Handling} type='text' name='year' value={form.year} placeholder='year' /><br></br>
      <button onClick={addMovie}>Add Movie</button>
    </div>
  )
}

export default AddMovie
