import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
	render() {
		const { posts } = this.props
		return (
			<div className="Home">
				<h1>Blog</h1>
				{posts.map(post => {
					return (
						<div className='post' key={post.id}>
							<Link to={'/' + post.id}>
								<h3>{post.title}</h3>
							</Link>
							<p>{post.body}</p>
						</div>
					)
				})}
			</div> 
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Home)
