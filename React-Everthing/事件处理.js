class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // 为了在回调中使用`this`,这个绑定事必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);

// 向事件处理程序传递参数
//<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
//<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>