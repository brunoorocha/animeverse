
export interface Page<T> {
  media: T
}

export interface PaginatedApiResult<T> {
  Page: Page<T>
}