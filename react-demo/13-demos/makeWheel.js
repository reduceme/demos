var staticData = [
    {author: "张飞", text: "我在写一条评论~！"},
    {author: "关羽", text: "2货，都知道你在写的是一条评论。。"},
    {author: "刘备", text: "哎，咋跟这俩逗逼结拜了！"}
];

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}:
                </h2>
            </div>
        );
    }
});

var CommentBox = React.createClass({
    loadCommentsFromServer: function () {
        this.setState({data: staticData});
    },
    getInitialState: function () {
        return {data: []}
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <Comment/>
            </div>
        )
    }
});

ReactDOM.render(
    <CommentBox url="comments.json" pollInterval="2000"/>,
    document.getElementById("content")
);