class Kova extends React.Component {
    render() {
        const products = [
          { name: 'A', isRock: true, id: 1, pUrl: '' },
          { name: 'B', isRock: false, id: 2, pUrl: '' },
          { name: 'C', isRock: false, id: 3, pUrl: '' },
          { name: 'D', isRock: false,  id: 4, pUrl: ''},
          { name: 'E', isRock: true,  id: 5, pUrl: ''},
          { name: 'F', isRock: true,  id: 6, pUrl: ''},
          { name: 'G', isRock: false,  id: 7, pUrl: ''},
        ];

        const user = {
          imageRadius: '3%',
          imageSize: {
            w: 504,
            h: 504
          },
        };

        const listItems = products.map(product =>
            <li
              key={product.id}
//              style={{
//                color: product.isRock ? 'magenta' : 'darkgreen'
//              }}
              style={{
                display: product.isRock ? 'block' : 'none',
                listStyleType: 'square',
                margin: '10px 0'
              }}
            >
              {product.name}
              <img
                          className="avatar"
                          src={product.pUrl}
                          alt={'Photo of ' + product.name}
                          title={'Photo of ' + product.name}
                          style={{
              //                width: user.imageSize,
              //                height: user.imageSize,
                              borderRadius: user.imageRadius,
                              width: user.imageSize.w,
                              height: user.imageSize.h,
                          }}
                        />
            </li>
          );

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

ReactDOM.render(
  <Kova />, document.getElementById("kovaProfile")
);