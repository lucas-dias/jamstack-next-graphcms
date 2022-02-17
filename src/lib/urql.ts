import { createClient, ssrExchange, dedupExchange, cacheExchange, fetchExchange } from 'urql';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({isClient: !isServerSide});

const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/ckzr5z7e40j9301z45wyth0jg/master',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
})

export {client, ssrCache};