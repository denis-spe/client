import { Component } from "react";
import Form from "./Form";
import { Provider } from "./Provider";
import ListTasks from "./ListTasks"

export default class Main extends Component {
    render() {
        return (
            <main>
                <h1>Tasks.</h1>
                <Provider>
                    <Form />
                    <ListTasks />
                </Provider>
            </main>)
    }
}




