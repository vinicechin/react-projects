import React, { Component } from 'react'
import axios from 'axios'

import Post from './Post/Post'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4).map(post => {
                    return {
                        ...post,
                        author: 'Vini'
                    }
                })
                this.setState({ posts })
            })
            .catch(error => {
                console.log(error)
            })
    }

    postClickedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={this.postClickedHandler.bind(this, post.id)}
                />
            )
        })

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts