import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
	render() {
		const { posts } = this.props
		return (
			<div className="App">
				<h1>App</h1>
				{posts.map(post => {
					return (
						<div className='post' key={post.id}>
							<h3>{post.title}</h3>
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

export default connect(mapStateToProps)(App)
