
class GUI extends React.Component {
    render() {
        const cardStyles = {
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '10px',
          width: '300px',
        };

        const imageStyles = {
          width: '100%',
          marginBottom: '10px',
        };

        const contentStyles = {
          textAlign: 'center',
        };

        const buttonStyles = {
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        };

        return (
            <div style={cardStyles}>
                  <img src="https://wallpapers.com/images/featured/en3dnh2zi84sgt3t.jpg" alt="Card Image" style={imageStyles} />
                  <div style={contentStyles}>
                    <h3>Convert</h3>
                    <p>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <button style={buttonStyles}>Go somewhere</button>
                  </div>
            </div>
        );
    }
}

class Nav extends React.Component {
    render() {
        const navbarStyles = {
          backgroundColor: '#f8f8f8',
          padding: '10px',
        };

        const listStyles = {
          listStyleType: 'none',
          display: 'flex',
          justifyContent: 'center',
        };

        const listItemStyles = {
          margin: '0 10px',
          cursor: 'pointer',
        };

        return (
            <nav style={navbarStyles}>
                  <ul style={listStyles}>
                    <li style={listItemStyles}>
                      <input type="text" />
                    </li>
                    <li style={listItemStyles}>XRP</li>
                    <li style={listItemStyles}>
                      <input type="text"  class="form-control" />
                    </li>
                    <li style={listItemStyles}>USD</li>
                  </ul>
            </nav>
        );
    }
}

class UserInterface extends React.Component {
    render() {
        const btnStyle = {
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out'
        };
        const handleHover = () => {
            console.log('Hovering...');
        };

        const swapBox = {
            backgroundColor: 'white',
            color: 'green',
            opacity: '0.3',
            padding: '15px 45px',
            border: 'solid 2px black'
        };

        return (
            <div>
                <h4>swapping</h4>

                <button style={btnStyle}>Swap</button>
                <br />
                <button style={btnStyle} onMouseEnter={handleHover}>Convert</button>


                <div style={swapBox}></div>
                <GUI />
                <Nav />
            </div>
        );
    }
}

ReactDOM.render(<UserInterface />, document.getElementById("gui"));