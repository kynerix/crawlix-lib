// https://www.meneame.net/
crawlix
.begin()
  // Accept cookies
  .click("ACEPTO") 

  // Parse contents
  .blocksParser("div.body.horizontal")
    .select("title", "h2")
    .select("url", "a[data-event-action='story'][data-event-label='title']", "href")
    .select("summary", "p.link-preview")
    .select("author", "a[href ^='/user/']")
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
