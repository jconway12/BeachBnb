import * as ReviewApi from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REV_ERRORS = 'RECEIVE_REV_ERRORS';

export const fetchReviews = (reviewableId, reviewableType) => dispatch => {
  // debugger
  return ReviewApi.fetchReviews(reviewableId, reviewableType).then(reviews => {dispatch({ type: RECEIVE_REVIEWS, reviews })}, errors => {dispatch({ type: RECEIVE_REV_ERRORS, errors })});
}

export const createReview = (review) => dispatch => {
  return ReviewApi.createReview(review).then(review => {dispatch({ type: RECEIVE_REVIEW, review })}, errors => {dispatch({ type: RECEIVE_REV_ERRORS, errors })});
}

export const updateReview = (review) => dispatch => {
  return ReviewApi.updateReview(review).then(review => {dispatch({ type: RECEIVE_REVIEW, review })}, errors => {dispatch({ type: RECEIVE_REV_ERRORS, errors })});
}

export const deleteReview = (id) => dispatch => {
  return ReviewApi.deleteReview(id).then(reviewId => {dispatch({ type: REMOVE_REVIEW, reviewId })});
}