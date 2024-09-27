import * as React from 'react'
import { Link } from 'gatsby'

export default function Pagination({ pageContext }) {
  const { humanPageNumber, pageNumber, nextPagePath, previousPagePath } =
    pageContext

  return (
    <>
      <div className={`grid text-sm ${!!pageNumber && 'grid-cols-3'}`}>
        {previousPagePath && (
          <div className="place-self-start prev">
            <Link to={previousPagePath}>Previous Page</Link>
          </div>
        )}
        {!!pageNumber && (
          <div className="flex flex-col h3 justify-end place-self-center">{`Page ${humanPageNumber}`}</div>
        )}
        {nextPagePath && (
          <div className="place-self-end next">
            <Link to={nextPagePath}>Next Page</Link>
          </div>
        )}
      </div>
    </>
  )
}
