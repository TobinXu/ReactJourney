class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogOutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogOutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn= {isLoggedIn} />
                {button}
            </div>
        );
    }
}

ReactDom.render(
    <LoginControl />,
    document.getElementById('root')
);


function Mailbox(props) {
    const unredMessages = props.unreadMessages;
    retutrn (
        <div>
            <h1>Hello!</h1>
            {unredMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
                </h2>
                }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages}></Mailbox>,
    document.getElementById('root')
);

