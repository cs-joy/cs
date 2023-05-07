//    class MyComponent extends React.Component {
//        render() {
//            return (
//                <div>
//                    <h1>Hello, {this.props.name}!</h1>
//                    <p>This is a React component rendered in a Thymeleaf HTML file in a Spring Boot application.</p>
//                </div>
//            );
//        }
//    }
//
//    ReactDOM.render(<MyComponent name="React" />, document.getElementById('root'));


    class MyComponent extends React.Component {
        render() {
            return (
                <div>
                    <h1>Hello, {this.props.name}!</h1>
                    <p>AJ</p>
                </div>
            );
        }
    }

    ReactDOM.render(<MyComponent name="React" />, document.getElementById('root'));