import React from 'react';
import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';
import {withRouter} from 'react-router-dom';
import {RECEIVE_REV_ERRORS} from '../../actions/review_actions';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.submit = this.submit.bind(this);
    this.update = this.update.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.createReview(this.state).then(() => this.props.history.push(`/users/${this.props.listing.owner_id}/listings/${this.props.listing.id}`));
  }

  update(e) {
    this.setState({body: e.target.value });
  }

  render() {
    let errors;
    if (this.props.errors.length != 0) {
      errors = <p id="rev-errors">Already reviewed</p>
    } else {
      errors = null;
    }

    return (
      <form className='review-form' onSubmit={this.submit}>
        <label>
          Review:
          <textarea value={this.state.body} onChange={this.update}/>
        </label>
          {errors}
        <input id="review-button" type="submit" value="Add Review" onClick={this.submit}/>
      </form>
    )
  }
}

const msp = (state, ownProps) => {
  const author_id = ownProps.user.id;
  const reviewable_id = ownProps.listing.id || state.session.id;
  const reviewable_type = "Listing";
  const review = { author_id, reviewable_id, reviewable_type, body: "" }
  const errors = state.errors.revErrors;

  return {
    review, errors
  }
}


const mdp = (dispatch) => {
  return {
    createReview: review => dispatch(createReview(review)),
    receiveErrors: () => dispatch({type: RECEIVE_REV_ERRORS})
  }
}

export default withRouter(connect(msp, mdp)(ReviewForm));