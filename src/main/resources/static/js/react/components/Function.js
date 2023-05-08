
class Test extends React.Component {
  render() {
    const myProfile = {
      name: 'Md. Zahangir Alam',
      position: 'Software Engineer'
    }

    function call() {
        return (
          <div>
            <h3>{myProfile.name}</h3>
            <h5>{myProfile.position}</h5>
          </div>
        );
    }

    return (
      <div>
        <h1>Another Component</h1>
        {call()}
      </div>
    );
  }
}


class Function extends React.Component {
  render() {
    const user = {
      name: 'Jay'
    }

    const Hello = () => {
      return (
        <h1>from h1</h1>
      );
    }

    return (
      <div>
        <h1>{user.name}</h1>
        <Test />
      </div>
    );
  }
}

ReactDOM.render(<Function />, document.getElementById("check"));