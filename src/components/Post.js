import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

	render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className='post'>
                <h2>{ this.props.post.title }</h2>
                <p>{ this.props.post.body }</p>
                <button onClick={this.handleClick}>DELETE POST</button>
            </div>
        ) : (
            <h3>Loading...</h3>
        )
		return (
            <div className='Post'>
                { post }
            </div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.post_id // This gets the post id from the URL. Note that "post_id" is declared for the route within App.js
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
