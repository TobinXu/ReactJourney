// 无状态函数组件转有状态类组件
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}
setInterval(tick, 1000);


/**
 * 五步将Clock的函数组件传承class组件
 * 1.创建同名ES6 class，并且继承与React.Component
 * 2.添加一个空的render()方法
 * 3.将函数体移动到render()方法中
 * 4.在render()方法中使用this.props替换props
 * 5.删除剩余的空函数声明
 */
class Clock extends React.Component {
    constructor(props) {
        super(props); // 将 props 传递到父类的构造函数中(Class 组件应该始终使用 props 参数来调用父类的构造函数。)
        this.state= {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
// 接下来，移除 <Clock /> 元素中的 date 属性：
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);


/**
 * 不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。
 */