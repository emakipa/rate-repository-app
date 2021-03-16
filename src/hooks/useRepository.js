import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (variables) => {

  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
      
        const previousEdges = previousResult.repository.reviews.edges;
        const fetchMoreEdges = fetchMoreResult.repository.reviews.edges;
    
        fetchMoreResult.repository.reviews.edges = [...previousEdges, ...fetchMoreEdges];
    
        return { ...fetchMoreResult };
      } 
    });
  };

  return { 
    data,
    fetchMore: handleFetchMore,
    error,
    loading
  };
};

export default useRepository;