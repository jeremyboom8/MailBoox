// Holochain actions
export const BOOK_CREATE = 'bookCreate'
export const GET_BOOKS = 'getBooks'
export const GET_BOOK = 'getBook'
export const BORROW_BOOK_REQUEST = 'borrowBookRequest'
export const ACCEPT_BORROW_REQUEST = 'acceptBorrowRequest'
export const MARK_BOOK_RETURNED = 'markBookReturned'

// Holochain actions

export function bookCreate (book) {
  return {
    type: BOOK_CREATE,
    meta: {
      isHc: true,
      namespace: 'books',
      data: book
    }
  }
}

export function getBooks () {
  return {
    type: GET_BOOKS,
    meta: {
      isHc: true,
      namespace: 'books',
      data: undefined
    }
  }
}

export function getBook (ownerLink) {
  return {
    type: GET_BOOK,
    meta: {
      isHc: true,
      namespace: 'books',
      data: ownerLink
    }
  }
}

export function borrowBookRequest (ownerLink) {
  return {
    type: GET_BOOK,
    meta: {
      isHc: true,
      namespace: 'books',
      data: ownerLink
    }
  }
}

export function markBookReturned (ownerLink) {
  return {
    type: MARK_BOOK_RETURNED,
    meta: {
      isHc: true,
      namespace: 'books',
      data: ownerLink
    }
  }
}
