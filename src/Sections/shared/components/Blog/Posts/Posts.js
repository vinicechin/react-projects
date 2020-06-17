import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Post from './Post/Post'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: []
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

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Link to={'/' + post.id} key={post.id} >
                    <Post
                        title={post.title}
                        author={post.author}
                    />
                </Link>
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