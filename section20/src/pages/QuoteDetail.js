import React, { useEffect } from 'react'
import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments.js'
import useHttp from '../hooks/use-http.js'
import { getSingleQuote } from '../lib/api.js'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner.js'

const QuoteDetail = () => {
  const params = useParams()

  const quoteId = params.quoteId

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route path="*">
          <div className="centered">
            <Link className="btn--flat" to="comments">
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path="comments" element={<Comments />}></Route>
        <Outlet />
      </Routes>
    </>
  )
}

export default QuoteDetail
