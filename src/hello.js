/**
 * Created by 18953 on 2017/5/7.
 */
var HelloMessage = React.createClass({
    render(){
        return (
            React.createElement('div', null,
                React.createElement('h1', null, 'Hello'),
                React.createElement('p', null, '这是文本内容:' + this.props.name)
            )
        )
    }
});

ReactDOM.render(<HelloMessage name="John"/>, document.getElementById('reactDiv'));