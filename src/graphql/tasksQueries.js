import { gql } from '@apollo/client';

export const GET_TASKS_AND_COLUMNS = gql`
query GetTasksAndColumns {
    tasks {
        ready {
            id
            name
            description
        }
        in_progress {
            id
            name
            description
        }
        review {
            id
            name
            description
        }
        to_do {
            id
            name
            description
        }
    }
    columns
}
`;