import axios from 'axios';

// const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/reviewers';
const EMPLOYEE_API_BASE_URL = 'https://main.d3jhuaysskpva.amplifyapp.com/api/v1/reviewers';

class ReviewerService {
  getReviewers() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createReviewer(reviewer) {
    return axios.post(EMPLOYEE_API_BASE_URL, reviewer);
  }
}

export default new ReviewerService();
