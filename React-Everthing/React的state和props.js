// React的数据是自顶向下单向流动的，即从父组件到子组件中，组件的数据存储在props和state中。
// React的核心思想就是组件化思想，页面被切分成一些独立的、可复用的组件。
// 组件从概念上看就是一个函数，可以接受一个参数作为输入值，这个参数就是props，所以可以把props理解为从外部传入组件内部的数据。由于React是单向数据流，所以props基本上也就是从服父级组件向子组件传递的数据。

/**
 * props具有只读性，不可改变，如果props在渲染过程中可以被改变，会导致这个组件的现实形态变得不可预测。只有通过父组件重新渲染的方式才可以把新的props传入组建中
 * props的默认参数,在组建中，我们最好为props中参数设置一个defaultProps，并且定制它的类型
 */
Item.defaultProps = {
    item:'hello props',
};
Item.propTypes = {
    item: PropTypes.string,
}

// 关于propTypes，可以声明为以下几种类型：
/*
optionalArray: PropTypes.array,
optionalBool: PropTypes.bool,
optionalFunc: PropTypes.func,
optionalNumber: PropTypes.number,
optionalObject: PropTypes.object,
optionalString: PropTypes.string,
optionalSymbol: PropTypes.symbol,
*/

/**
 * 区别
 * 1.state是组件自己管理数据，控制自己的状态，可变
 * 2.props是外部传入的数据参数，不可变
 * 3.没有state的叫做无状态组件，有state的叫做有状态组件
 * 4.多用props，少用state，也就是多写无状态组件
 * 
 * 总结
 * state的主要作用是用于组件保存、控制以及修改自己的状态，它只能在constructor中初始化，
 * 它算是组件的私有属性，不可通过外部访问和修改，只能通过组件内部的this.setState来修改，
 * 修改state属性会导致组件的重新渲染。
 */