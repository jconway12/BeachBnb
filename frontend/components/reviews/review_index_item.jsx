import React from 'react';
import {connect} from 'react-redux';

class ReviewItem extends React.Component {
  componentWillMount() {
    this.props.fetchUser(this.props.authorId)
  }

  render() {
    const review = this.props.review;
    const users = this.props.users || {};
    const author = users[this.props.authorId] || {};
    // debugger
    return (
    <li>
      <div className="author-info">
        <img src={author.photoURL} alt="" />
        <h5>{author.first_name}</h5>
      </div>
      <p>{review.body}</p>
    </li>
    )
  }
}

const msp = state => {
  const users = state.entities.users;
  return {users};
}

export default connect(msp, null)(ReviewItem);