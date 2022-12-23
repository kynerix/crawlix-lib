//
// This plugin is a example full website navigation, with inner links being visited and external references checked for broken links
// 
crawlix
.begin()

  .requiredParam("PARAM_SUMMARY_LENGTH", 2000)
  .requiredParam("PARAM_DOMAIN", document.location.hostname)

  // Clean up	
  .removeTags("script")
  .removeTags("link")

  // Create one entry per page
  .setValue("type",    "page")
  .setValue("title",   document.title)
  .setValue("summary", document.body.innerText.trim().substring(0, PARAM_SUMMARY_LENGTH) + "...")
  .setValue("url",     document.location.href)
  .trim("summary")
  .trim("title")
  .addContent()

  // Internal links within the domain will be visited
  .linksParser()
      .find()
      .exclude("url", "javascript:").exclude("url", "#")
      .include("url", PARAM_DOMAIN)
      .removeIfEmpty("title")
      .removeIfEmpty("url")
      .removeDuplicates()
      .visit()
      .add()

  // External links will be checked for broken links only
  .linksParser()
      .find()
      .exclude("url", "javascript:")
      .filter("url", null, PARAM_DOMAIN)
      .removeIfEmpty("title")
      .removeIfEmpty("url")
      .removeDuplicates()
      .check()
      .add()

.end()
