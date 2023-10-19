import {todosActions} from "./store/todos";
import {connect} from "react-redux";

function App({todos, add, remove}) {

    function handleClick() {
        add('test2')
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <pre>
                {todos}
            </pre>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (item) => dispatch(todosActions.add(item)),
        remove: (item) => dispatch(todosActions.remove(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
