import Page from '../data/models/pageModel.js'

const getPageContent = async (pageTitle) => {
  try {
    const searchTerm = pageTitle.toLowerCase()
    const pageContent = await Page.findOne({ title: searchTerm })
    return pageContent.body
  } catch (err) {
    console.log(err)
  }
}

export { getPageContent }
