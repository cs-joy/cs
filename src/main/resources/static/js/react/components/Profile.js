class UserProfile extends React.Component {
  render() {
    const user = {
      name: 'Hedy Lamarr',
      imageUrl: '',
//      imageSize: 500,
      imageSize: {
          w: 500,
          h: 700,
      },
      imageRadius: '2.5%',
      imageOpacity: 0.1
    };

    return (
      <div>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
//                width: user.imageSize,
//                height: user.imageSize,
                borderRadius: user.imageRadius,
                width: user.imageSize.w,
                height: user.imageSize.h,
                opacity: user.imageOpacity
            }}
          />
      </div>
    );
  }
}

ReactDOM.render(
  <UserProfile />, document.getElementById("userProfile")
);