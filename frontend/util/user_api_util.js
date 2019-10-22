export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
}

export const updateUser = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: formData,
    contentType: false,
    processData: false
  })
}