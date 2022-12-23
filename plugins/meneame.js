// https://www.meneame.net/
crawlix
.begin()

  // Parse contents
  .blocksParser("div.news-body")
    .select("title", "h2")
    .select("url", "h2 a", "href")
    .select("summary", "div.news-content")
    .select("author", "a[href ^='/user/'")
  .parse()
  
  // Updates fixed values for all contents
  .setValues("type", "meneame")
  
  // Clean up fields
  .trim("author")
  .cutBetween("author", ", ", null)

  // Remove content with empty fields
  .removeIfEmpty("summary")

  .addContents()
  .assertMinContentCount(5)

.end()
