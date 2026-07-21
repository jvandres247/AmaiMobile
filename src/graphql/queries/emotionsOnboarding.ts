import {gql} from '@apollo/client';
export const EMOTION_PROCESSING_STYLES = gql`
  query Query {
    emotionProcessingStyles {
      id
      title
    }
    emotionalGoals {
      id
      title
    }
    activePlants {
      id
      name
      represents
      stages {
        id
        imageUrl
        requiredPoints
      }
      seasons {
        id
        startDate
        endDate
        isActive
      }
    }
  }
`;
