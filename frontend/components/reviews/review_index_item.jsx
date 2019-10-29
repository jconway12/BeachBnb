import React from 'react';
import {connect} from 'react-redux';
import {deleteReview} from '../../actions/review_actions';

class ReviewItem extends React.Component {
  componentWillMount() {
    this.props.fetchUser(this.props.authorId)
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(id) {
    return () => {
     this.props.deleteReview(id);
    }
  }

  render() {
    const review = this.props.review;
    const users = this.props.users || {};
    const author = users[this.props.authorId] || {};

    return (
    <li>
      <div className="author-info">
        <img src={author.photoURL} alt="" />
        <h5>{author.first_name}</h5>
      </div>
      <div className='rev-body'>
      <p>{review.body}</p>
        {this.props.currUserId === author.id ? <button className='delete-review' onClick={this.deleteReview(review.id)}>Remove Review</button> : null}
      </div>
    </li>
    )
  }
}

const msp = state => {
  const users = state.entities.users;
  const currUserId = state.session.id;
  const currUser = state.entities.users[currUserId];
  return {users, currUser, currUserId};
}

const mdp = dispatch => {
  return {
    deleteReview: id => dispatch(deleteReview(id))
  }
}

export default connect(msp, mdp)(ReviewItem);