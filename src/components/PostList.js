import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const posts = await response.json();
        this.setState({ posts });
    }

    render() {
        const { posts } = this.state;

        return (
            <>
                <h1>List of Posts</h1>
                {posts && posts.map(post => <h4 key={post.id}>{post.title}</h4>)}
            </>
        )
    }
}

export default PostList
