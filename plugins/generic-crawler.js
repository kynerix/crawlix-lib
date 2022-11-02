 crawlix
  .begin()   
    .requiredParam("PARAM_SUMMARY_LENGTH")
    .requiredParam("PARAM_DOMAIN")
    // Clean up	
    .removeTags("script")
    .removeTags("link")
    
    // Create one entry per page
    .type().setValue("page")
    .title().setValue(document.title)
    .summary().setValue(document.body.innerText.trim().substring(0, PARAM_SUMMARY_LENGTH )+ "...")
    .url().setValue(document.location.href)
    .addContent()    
    
    // Internal links 
    .links().find().exclude("javascript:").include( PARAM_DOMAIN ).exclude("#").analyze().add()
    // External links
    .links().find().exclude("javascript:").filter(null, PARAM_DOMAIN ).check().add()
  .end()

