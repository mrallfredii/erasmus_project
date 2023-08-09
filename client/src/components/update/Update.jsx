import "./update.scss"

const Update = ( {setOpenUpdate} ) => {
  return (
    <div className="update">
        Update
        <form>
            <input type="text" />
        </form>
        <button onClick={() => setOpenUpdate(false)}>
            X
        </button>
    </div>
  );
};

export default Update;