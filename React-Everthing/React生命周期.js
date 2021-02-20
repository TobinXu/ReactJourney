/**
 * 无状态组件 函数组件
 * 无状态组件有以下几个特点
 * 1. 代码可读性好
 * 2.组建不会被实例化，渲染性能提升
 * 3.无生命周期方法
 * 4.只能输入props，同样输入一定会有同样的输出。纯函数，不更改入参
 * 所以，在项目中如果不需要进行状态管理，应该尽量写成无状态组件形式
 */
 
function HelloFunction(props) {
    return <div>hello,{props.name}</div>
}

// ES6箭头函数
const HelloFunctional = (props) => (<div>hello, {props.name}</div>)


/**
 * 有状态组件 类组件
 * 当组件需要使用内部状态时或需要使用生命周期方法时就需要使用有状态组件
 */
class HelloClas extends React.Component {
    constructor() {
        this.state = {
            name:'xuqiangguo'
        }
    }
    render() {
        return (<div>hello, {this.state.name}</div>);
    }
}

/**
 * 挂载阶段(Mounting)
 * 1.constructor() 初始化
 * 2.componentWillMount() 每次页面加载、刷新或者第一次展示
 * 3.render() 不执行this.setState，需要保持render()函数的纯净。
 * 4.componentDidMount() 加载渲染完后执行，可以修改state了
 */

 /**
  * 更新阶段(Updating)
  * 1.componentWillReceiveProps() 已加载的组件在props发生变化时调用
  * 2.shouldComponentUpdate() 这个函数只返回true或false，表示组件是否需要更新（重新渲染）。（慎用）
  * 3.componentWillUpdate()
  * 4.render()
  * 5.componentDidUpdate() 在这个函数中可以使用this.refs获取真实DOM。还可以修改state哦，不过会导致组件再次re-render。
  */

  /**
   * 卸载阶段
   * 1.componentWillUnmount() 处理任何必要的清理工作，比如销毁定时器、取消网络请求、清除之前创建的相关DOM节点等。
   */