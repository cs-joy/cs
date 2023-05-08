class VideoPlayer extends React.Component {
  render() {
    return (
      <div>
        <video controls>
          <source src={this.props.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

class VideoApp extends React.Component {
  render() {
    return (
      <div>
        <VideoPlayer videoSrc=""
         />
      </div>
    );
  }
}

ReactDOM.render(
  <VideoApp />, document.getElementById("userVideo")
);