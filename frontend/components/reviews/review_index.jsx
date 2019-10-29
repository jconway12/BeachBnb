import React from 'react';
import {connect} from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import {fetchUser} from '../../actions/user_actions';
import ReviewItem from './review_index_item';

class ReviewIndex extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchReviews(this.props.reviewableId, this.props.reviewableType);
  }

  render() {
    const reviews = this.props.reviews || [];
    // debugger
    const noReviews = this.props.reviews.length === 0 ? <h4 id="no-reviews">0 reviews</h4> : null;
    return (
      <>
      {noReviews}
      <ul className="reviews">
        {reviews.map(review => {
          return <ReviewItem key={review.id} review={review} authorId={review.author_id} fetchUser={this.props.fetchUser}/>
        })}
      </ul>
      </>
    )
  }
}

const msp = (state, ownProps) => {
  const reviews = Object.values(state.entities.reviews);

  return {
    reviews
  }
}

const mdp = dispatch => {
  return {
    fetchReviews: (reviewableId, reviewableType) => dispatch(fetchReviews(reviewableId, reviewableType)), //make this so it takes in a reviewable_id
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default connect(msp, mdp)(ReviewIndex);

