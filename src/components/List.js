function List(props) {
    function handleDelete(id) {
    props.settodos(props.todos.filter((todo) => todo.id !== id));
    }
  
    return (
      <div className="mt-5">
        {props.todos.map((todo) => (
          <div key={todo.id}>
            <div className="row alert alert-primary fs-4">
                <div className="col-10 col-md-11">
                    {todo.title}
                </div>
                <div className="col-2 col-md-1">
                    <button
                        className="btn btn-danger btn"
                        onClick={() => handleDelete(todo.id)}
                    >
                    <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default List;  