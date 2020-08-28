export const normolizeFilterDataCheckbox = (data = []) => {
  console.log(data)
  try {
    data.forEach(item => {
      if (!item.hasOwnProperty("checked")) {
        item.checked = false
      }
    })
    return data
  } catch (e) {
    console.error(`ошибка нормализации данных ${e}`)
    return data
  }
}
