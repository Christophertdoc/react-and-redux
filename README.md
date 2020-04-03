# react-and-redux app
Practice with Redux
Based on the following tutorials starting at video #34: https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG

## Branches
- lesson-1: display data from central store by using "mapStateToProps()"
    1. In particular, we display a list of blog posts on the homepage.
- lesson-2: display global data for an individual post on its own page
- lesson-3: updating the global redux data with mapDispatchToProps

## Terms
- Redux: central data store for all app data (global state)
    1. Redux uses props to update components with its data
- Dispatch Action: describes a change we want to make to Redux's central data
    1. Contains an optional payload with new data to update the central data store
- Reducer: updates the central data store