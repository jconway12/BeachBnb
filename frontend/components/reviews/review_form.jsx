import React from 'react';
import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
  }

  submit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }

  update(e) {
    this.setState({body: e.target.value });
  }

  render() {
    return (
      <form className='review-form' onSubmit={this.submit}>
        <label>
          Review:
          <textarea value={this.state.body} onChange={this.update}/>
        </label>

        <input type="submit" value="Add Review" onClick={this.submit}/>
      </form>
    )
  }
}

const msp = (state, ownProps) => {
  // debugger
  const author_id = state.session.id;
  const reviewable_id = ownProps.match.params.listingId || state.session.id;
  const reviewable_type = ownProps.match.params.listingId ? "Listing" : 'User';
  const review = { author_id, reviewable_id, reviewable_type, body: "" }
  // debugger
  return {
    review
  }
}


const mdp = (dispatch) => {
  return {
    createReview: review => dispatch(createReview(review))
  }
}

export default connect(msp, mdp)(ReviewForm);