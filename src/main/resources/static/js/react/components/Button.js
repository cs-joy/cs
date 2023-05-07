        class Button extends React.Component {
            render() {
                const { label, color, onClick } = this.props;
                const buttonStyle = {
                    backgroundColor: color,
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer'
                };
                return <button style={buttonStyle} onClick={onClick}>{label}</button>;
            }
        }

        ReactDOM.render(
            <Button label="Click me!" color="#007bff" onClick={() => alert('Button clicked!')} />,
            document.getElementById('tes')
        );



