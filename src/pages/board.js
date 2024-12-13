import { Provider } from 'react-redux';
import Layout from '@/components/layout'
import BoardComponent from '@/components/Board/BoardComponent'
import store from '@/store/store';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient'; 
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();


export default function Board() {
  return (
    <Provider store={store}>
       <ApolloProvider client={client}>
          <Layout>
              <BoardComponent />
          </Layout>
        </ApolloProvider>
    </Provider>
  );
}
