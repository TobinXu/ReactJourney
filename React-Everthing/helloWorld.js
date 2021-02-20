function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    } 
    return <h1>Hello, Stranger.</h1>
}

// 通过引号来将属性指定为字符串字面量，也可以使用大括号将属性值中插入一个js表达式
const element = <img src={user.avatrUrl} />;

const element1 = <div tabIndex="0"></div>;

// react在渲染的时候会进行转义，防止XSS攻击。
const title = resposne.potentitalMaliciousInput;
// 直接使用是安全的：
const element2 = <h1>{title}</h1>;

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

